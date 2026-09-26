import { useEffect, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import septCss from './sept.css?raw'

export function SeptFrame({ children }: { children: ReactNode }) {
  const hostRef = useRef<HTMLDivElement>(null)
  const [shadow, setShadow] = useState<ShadowRoot | null>(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return
    setShadow(host.shadowRoot ?? host.attachShadow({ mode: 'open' }))
  }, [])

  return (
    <div ref={hostRef} className="sept-host">
      {shadow ? createPortal(
        <>
          <style>{septCss}</style>
          {children}
        </>,
        shadow,
      ) : null}
    </div>
  )
}
