export default function Panel({ title, code, children, className = '' }) {
  return (
    <section className={`panel ${className}`.trim()}>
      <header className="panel__head">
        <h3>{title}</h3>
        {code && <span className="panel__code">{code}</span>}
      </header>
      {children}
    </section>
  );
}
