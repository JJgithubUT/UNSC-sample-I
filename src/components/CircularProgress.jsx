export default function CircularProgress({ value, size = 120, label }) {
  const r = 48, c = 2 * Math.PI * r, arc = c * 0.75; // anillo de 270°
  const offset = arc - (value / 100) * arc;
  return (
    <div className="ring" style={{ '--size': `${size}px` }} role="progressbar" aria-label={label} aria-valuenow={value}>
      <svg viewBox="0 0 120 120" width={size} height={size} fill="none" strokeWidth="8" strokeLinecap="square">
        <circle className="ring__track" cx="60" cy="60" r={r} strokeDasharray={`${arc} ${c}`} />
        <circle className="ring__val" cx="60" cy="60" r={r} strokeDasharray={`${arc} ${c}`} strokeDashoffset={offset} />
      </svg>
      <span className="ring__num">{value}</span>
    </div>
  );
}
