import { forwardRef, useId, useState } from 'react'
import { ArrowRight, Check, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Button({ to, href, children, variant = 'primary', icon = true, className = '', ...props }) {
  const content = <>{children}{icon && <ArrowRight aria-hidden="true" size={18} />}</>
  const classes = `button button--${variant} ${className}`.trim()
  if (to) return <Link className={classes} to={to} {...props}>{content}</Link>
  if (href) return <a className={classes} href={href} {...props}>{content}</a>
  return <button className={classes} {...props}>{content}</button>
}

export function SectionHeading({ eyebrow, title, text, align = 'left', light = false }) {
  return (
    <header className={`section-heading section-heading--${align}${light ? ' section-heading--light' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </header>
  )
}

export function Picture({ image, eager = false, className = '', sizes = '(max-width: 768px) 100vw, 50vw' }) {
  return (
    <img
      className={className}
      src={image.src}
      alt={image.alt}
      width="1200"
      height="900"
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : 'auto'}
      decoding={eager ? 'sync' : 'async'}
      sizes={sizes}
    />
  )
}

export function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => <li key={item.label}>{item.to ? <Link to={item.to}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}{index < items.length - 1 && <span aria-hidden="true">/</span>}</li>)}
      </ol>
    </nav>
  )
}

export function CheckList({ items, className = '' }) {
  return <ul className={`check-list ${className}`}>{items.map((item) => <li key={item}><span><Check size={16} aria-hidden="true" /></span>{item}</li>)}</ul>
}

export function Accordion({ items }) {
  const [open, setOpen] = useState(0)
  return <div className="accordion">{items.map(([question, answer], index) => {
    const isOpen = open === index
    return <div className={`accordion__item${isOpen ? ' is-open' : ''}`} key={question}>
      <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : index)}>
        <span>{question}</span><ChevronDown aria-hidden="true" />
      </button>
      <div className="accordion__panel" hidden={!isOpen}><p>{answer}</p></div>
    </div>
  })}</div>
}

export const Field = forwardRef(function Field({ label, as = 'input', error, options, className = '', ...props }, ref) {
  const generatedId = useId()
  const id = props.id || generatedId
  const Component = as
  return (
    <div className={`field ${className}`}>
      <label htmlFor={id}>{label}{props.required && <span aria-hidden="true"> *</span>}</label>
      {as === 'select' ? (
        <select id={id} ref={ref} aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} {...props}>
          <option value="">Choose an option</option>
          {options.map((option) => <option value={option} key={option}>{option}</option>)}
        </select>
      ) : <Component id={id} ref={ref} aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} {...props} />}
      {error && <span className="field__error" id={`${id}-error`} role="alert">{error}</span>}
    </div>
  )
})
