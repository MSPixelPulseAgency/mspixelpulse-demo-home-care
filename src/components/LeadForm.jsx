import { useMemo, useState } from 'react'
import { CheckCircle2, LoaderCircle, Send } from 'lucide-react'
import { Field } from './ui'

const initial = { name: '', phone: '', email: '', careFor: '', services: '', schedule: '', timeframe: '', location: '', experience: '', availability: '', transportation: '', message: '', consent: false, website: '' }

export default function LeadForm({ type = 'care' }) {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [serverMessage, setServerMessage] = useState('')
  const isCareer = type === 'career'
  const isContact = type === 'contact'

  const copy = useMemo(() => ({
    care: { title: 'Request a Care Conversation', button: 'Request My Care Consultation' },
    contact: { title: 'Send Us a Message', button: 'Send My Message' },
    career: { title: 'Tell Us About Yourself', button: 'Send My Application' },
  })[type], [type])

  const update = (event) => {
    const { name, value, type: inputType, checked } = event.target
    setValues((current) => ({ ...current, [name]: inputType === 'checkbox' ? checked : value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  const validate = () => {
    const next = {}
    if (values.name.trim().length < 2) next.name = 'Please enter your name.'
    if (!/^[+\d\s().-]{7,}$/.test(values.phone)) next.phone = 'Please enter a valid phone number.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = 'Please enter a valid email address.'
    if (!values.message || values.message.trim().length < 15) next.message = 'Please share at least 15 characters.'
    if (!values.consent) next.consent = 'Please confirm we may contact you.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const submit = async (event) => {
    event.preventDefault()
    if (!validate()) return
    setStatus('loading')
    setServerMessage('')
    try {
      const response = await fetch('/api/submit-lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...values, formType: type }) })
      const result = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(result.message || 'The form could not be sent right now.')
      setStatus('success')
      setValues(initial)
    } catch (error) {
      setStatus('error')
      setServerMessage(error.message)
    }
  }

  if (status === 'success') return <div className="form-success" role="status"><CheckCircle2 aria-hidden="true" /><h2>Thank you. We’ve received your request.</h2><p>Someone from the team will follow up using the contact information you provided.</p><button type="button" onClick={() => setStatus('idle')}>Send another message</button></div>

  return (
    <form className="lead-form" onSubmit={submit} noValidate>
      <div className="lead-form__heading"><span className="eyebrow">A simple first step</span><h2>{copy.title}</h2><p>Share a few details. Please do not include medical or sensitive personal information.</p></div>
      <div className="form-grid">
        <Field label="Name" name="name" value={values.name} onChange={update} error={errors.name} autoComplete="name" required />
        <Field label="Phone" name="phone" type="tel" value={values.phone} onChange={update} error={errors.phone} autoComplete="tel" required />
        <Field label="Email" name="email" type="email" value={values.email} onChange={update} error={errors.email} autoComplete="email" required />
        {isCareer ? <>
          <Field label="Location" name="location" value={values.location} onChange={update} autoComplete="address-level2" />
          <Field label="Caregiving experience" as="select" options={['New to caregiving', 'Less than 1 year', '1–3 years', '3+ years']} name="experience" value={values.experience} onChange={update} />
          <Field label="Availability" as="select" options={['Weekdays', 'Evenings', 'Overnights', 'Weekends', 'Flexible']} name="availability" value={values.availability} onChange={update} />
          <Field label="Transportation availability" as="select" options={['Yes', 'No', 'Prefer to discuss']} name="transportation" value={values.transportation} onChange={update} />
        </> : !isContact && <>
          <Field label="Who needs care?" as="select" options={['Self', 'Parent', 'Spouse', 'Relative', 'Friend', 'Other']} name="careFor" value={values.careFor} onChange={update} />
          <Field label="Primary support needed" as="select" options={['Personal Care', 'Companionship', 'Homemaking', 'Meal Support', 'Transportation', 'Respite', 'Memory Support', 'Overnight', 'Post-Hospital', 'Not Sure']} name="services" value={values.services} onChange={update} />
          <Field label="Preferred schedule" as="select" options={['Occasional', 'Few Hours Weekly', 'Daily', 'Overnight', '24-Hour Support', 'Not Sure']} name="schedule" value={values.schedule} onChange={update} />
          <Field label="Start timeframe" as="select" options={['As soon as possible', 'Within 2 weeks', 'Within a month', 'Planning ahead', 'Not sure']} name="timeframe" value={values.timeframe} onChange={update} />
          <Field label="City / ZIP" name="location" value={values.location} onChange={update} autoComplete="postal-code" />
        </>}
        <Field className="field--full" label={isCareer ? 'Why are you interested in caregiving?' : 'How can we help?'} as="textarea" name="message" rows="5" value={values.message} onChange={update} error={errors.message} required />
      </div>
      <div className="honeypot" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex="-1" autoComplete="off" value={values.website} onChange={update} /></div>
      <label className="consent"><input type="checkbox" name="consent" checked={values.consent} onChange={update} /><span>I agree that the business may contact me about this request. This demo form is not for emergencies.</span></label>
      {errors.consent && <span className="field__error" role="alert">{errors.consent}</span>}
      {status === 'error' && <div className="form-error" role="alert">{serverMessage} You can also use the phone or email links on this page.</div>}
      <button className="button button--primary form-submit" type="submit" disabled={status === 'loading'}>{status === 'loading' ? <LoaderCircle className="spin" aria-hidden="true" /> : <Send size={18} aria-hidden="true" />}{status === 'loading' ? 'Sending…' : copy.button}</button>
      <p className="form-note"><strong>Demo note:</strong> secure email delivery requires the recipient and provider environment variables listed in the project README.</p>
    </form>
  )
}
