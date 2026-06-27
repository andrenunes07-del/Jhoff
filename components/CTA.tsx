'use client'

import { useState } from 'react'
import LeadModal from './LeadModal'

export default function CTA() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section className="cta-outer">
        <div className="cta-in">
          <div className="cta-left">
            <h2>
              Transforme <span className="cy">imposto</span> em{' '}
              <span className="li">margem</span> ainda este mês
            </h2>
            <p>
              Ativação imediata. Sem mudança operacional. Você já tem a base — nós temos o produto e o
              suporte.
            </p>
            <button className="btn-cy" onClick={() => setOpen(true)}>
              Quero contratar agora →
            </button>
          </div>
          <div className="cta-right">
            <div className="price-box">
              <div className="pb-l">Mensalidade fixa</div>
              <div className="pb-v">R$ 498</div>
              <div className="pb-p">por mês</div>
              <div className="pb-s">Para bases de até 3.000 clientes ativos</div>
              <div className="pb-custo">
                R$ 0,16 <span>por cliente / mês</span>
              </div>
            </div>
            <div className="feats">
              <div className="feat"><span className="fdot" />Plataforma completa de ebooks e audiobooks</div>
              <div className="feat"><span className="fdot" />Conteúdo cultural isento de imposto federal</div>
              <div className="feat"><span className="fdot" />Ativação imediata após contratação</div>
              <div className="feat"><span className="fdot" />Suporte para enquadramento tributário</div>
            </div>
            <button className="btn-li" onClick={() => setOpen(true)}>
              Começar agora →
            </button>
          </div>
        </div>
      </section>
      {open && <LeadModal onClose={() => setOpen(false)} />}
    </>
  )
}
