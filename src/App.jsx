import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import PageShell from './components/layout/PageShell'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/CompanyPages').then((module) => ({ default: module.About })))
const ServiceAreas = lazy(() => import('./pages/CompanyPages').then((module) => ({ default: module.ServiceAreas })))
const Services = lazy(() => import('./pages/ServicePages').then((module) => ({ default: module.Services })))
const ServiceDetail = lazy(() => import('./pages/ServicePages').then((module) => ({ default: module.ServiceDetail })))
const RequestCare = lazy(() => import('./pages/FormPages').then((module) => ({ default: module.RequestCare })))
const Careers = lazy(() => import('./pages/FormPages').then((module) => ({ default: module.Careers })))
const Contact = lazy(() => import('./pages/FormPages').then((module) => ({ default: module.Contact })))
const Resources = lazy(() => import('./pages/ResourcePages').then((module) => ({ default: module.Resources })))
const ResourceDetail = lazy(() => import('./pages/ResourcePages').then((module) => ({ default: module.ResourceDetail })))
const Privacy = lazy(() => import('./pages/LegalPages').then((module) => ({ default: module.Privacy })))
const Terms = lazy(() => import('./pages/LegalPages').then((module) => ({ default: module.Terms })))
const NotFound = lazy(() => import('./pages/LegalPages').then((module) => ({ default: module.NotFound })))

export default function App() {
  return (
    <PageShell>
      <Suspense fallback={<div className="route-loader" role="status"><span />Loading page…</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/request-care" element={<RequestCare />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<ResourceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </PageShell>
  )
}
