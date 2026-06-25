'use client'

export default function Nav() {
  const scrollToSim = () => {
    document.getElementById('simulador')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav>
      <div className="logo"><em>Willy</em></div>
      <button className="nav-btn" onClick={scrollToSim}>Simular economia →</button>
    </nav>
  )
}
