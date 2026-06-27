'use client'

import { useState } from 'react'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwpPCr0Nmodg0JAxp5dDHGN6Rb7wKky4kIdVgDpSEGs5oJ9F0MA_zdk1A0g2rxw1eSB/exec'

interface Props {
  onClose: () => void
}

export default function LeadModal({ onClose }: Props) {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle')

  const handle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus('ok')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        {status === 'ok' ? (
          <div className="modal-success">
            <div className="modal-success-icon">✓</div>
            <h3>Interesse registrado!</h3>
            <p>Enviamos uma confirmação para <strong>{form.email}</strong>.<br />Nossa equipe entrará em contato em breve.</p>
            <p className="modal-spam-hint">Não encontrou o e-mail? Verifique sua caixa de <strong>spam</strong>.</p>
            <button className="btn-cy" onClick={onClose}>Fechar</button>
          </div>
        ) : (
          <>
            <h3>Quero contratar o plano SVA</h3>
            <p>Preencha seus dados e nossa equipe entra em contato para ativar.</p>
            <form onSubmit={submit} className="modal-form">
              <label>Nome completo
                <input name="nome" type="text" required placeholder="Seu nome" value={form.nome} onChange={handle} />
              </label>
              <label>E-mail
                <input name="email" type="email" required placeholder="seu@email.com" value={form.email} onChange={handle} />
              </label>
              <label>Telefone / WhatsApp
                <input name="telefone" type="tel" required placeholder="(00) 00000-0000" value={form.telefone} onChange={handle} />
              </label>
              {status === 'error' && <p className="modal-error">Erro ao enviar. Tente novamente.</p>}
              <button className="btn-cy" type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Enviando...' : 'Confirmar interesse →'}
              </button>
              <p className="modal-spam-hint">
                📧 Um e-mail de confirmação será enviado para o endereço informado. Caso não encontre, verifique a caixa de <strong>spam</strong>.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
