import Button from './Button.jsx';
export default function AlertCard({ level = 'warning', title, code, children, onAck, onDismiss }) {
  return (
    <article className={`alert ${level === 'critical' ? 'alert--critical' : ''}`} role="alert">
      <header className="alert__head">
        <span className="alert__icon" aria-hidden="true">⚠</span>
        <h3>{title}</h3>
        {code && <span className="panel__code">{code}</span>}
      </header>
      <div>{children}</div>
      <footer className="alert__actions">
        {onDismiss && <Button variant="ghost" onClick={onDismiss}>Descartar</Button>}
        {onAck && <Button variant={level === 'critical' ? 'danger' : 'primary'} onClick={onAck}>Reconocer</Button>}
      </footer>
    </article>
  );
}
