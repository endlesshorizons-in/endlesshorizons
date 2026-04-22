import About from '../pages/About'
import Contact from '../pages/Contact'
import Destinations from '../pages/Destinations'
import Home from '../pages/Home'
import Intake from '../pages/Intake'
import NotFound from '../pages/NotFound'
import Portfolio from '../pages/Portfolio'
import Services from '../pages/Services'
import ThankYou from '../pages/ThankYou'

export const ROUTE_PATHS = {
  HOME: '/',
  SERVICES: '/services',
  DESTINATIONS: '/destinations',
  PORTFOLIO: '/portfolio',
  INTAKE: '/intake',
  CONTACT: '/contact',
  THANK_YOU: '/thank-you',
  ABOUT: '/about',
}

export const appRoutes = [
  { path: ROUTE_PATHS.HOME, element: <Home /> },
  { path: ROUTE_PATHS.SERVICES, element: <Services /> },
  { path: ROUTE_PATHS.DESTINATIONS, element: <Destinations /> },
  { path: ROUTE_PATHS.PORTFOLIO, element: <Portfolio /> },
  { path: ROUTE_PATHS.INTAKE, element: <Intake /> },
  { path: ROUTE_PATHS.CONTACT, element: <Contact /> },
  { path: ROUTE_PATHS.THANK_YOU, element: <ThankYou /> },
  { path: ROUTE_PATHS.ABOUT, element: <About /> },
  { path: '*', element: <NotFound /> },
]

export const navRoutes = [
  { to: ROUTE_PATHS.HOME, label: 'Home' },
  { to: ROUTE_PATHS.DESTINATIONS, label: 'Destinations' },
  { to: ROUTE_PATHS.SERVICES, label: 'Services' },
  { to: ROUTE_PATHS.ABOUT, label: 'About Us' },
  { to: ROUTE_PATHS.CONTACT, label: 'Contact' },
]