import { Link } from 'react-router-dom'
import Container from '@components/Container'
import { buttonClasses } from '@components/common/buttonClasses'

const NotFound = () => {
  return (
    <section className="relative isolate overflow-hidden py-24 text-center md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,#0f3d33_0%,#0a0a0a_70%)]" />
      <div className="halftone absolute inset-0 -z-10 text-p3/10" />
      <Container>
        <p className="font-display uppercase tracking-[0.4em] text-p3">
          Dark Hour
        </p>
        <h1
          data-text="404"
          className="glitch my-4 font-display text-[9rem] leading-none md:text-[14rem]"
        >
          404
        </h1>
        <p className="text-lg text-paper/80">Page not found.</p>
        <Link to="/" className={buttonClasses('primary', 'mt-10')}>
          Back to Home
        </Link>
      </Container>
    </section>
  )
}

export default NotFound
