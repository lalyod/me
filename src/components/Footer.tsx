const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-10">
      <div className="hazard h-3" />
      <p className="bg-ink px-4 py-6 text-center font-display text-lg uppercase tracking-widest text-paper/80">
        © {year} Muhamad Pradita Adiantama. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
