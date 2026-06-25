'use client'

export default function Nav() {
  const scrollToSim = () => {
    document.getElementById('simulador')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav>
      <div className="nav-inner">
        <div className="logo">
          <span className="logo-wi">Wi</span><span className="logo-lly">lly</span><span className="logo-hub">hub</span>
        </div>
        <button className="nav-btn" onClick={scrollToSim}>Simular economia →</button>
      </div>
    </nav>
  )
}
