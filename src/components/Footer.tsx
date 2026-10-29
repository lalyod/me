import { Link } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-10">
      <div className="hazard h-3" />
      <div className="bg-ink px-4 py-6 text-center font-display text-lg uppercase tracking-widest text-paper/80">
        <p>© {year} Muhamad Pradita Adiantama. All rights reserved.</p>
        <Link to="/credits" className="mt-2 inline-block text-p5 hover:text-paper">
          Credits
        </Link>
      </div>
    </footer>
  )
}

export default Footer
