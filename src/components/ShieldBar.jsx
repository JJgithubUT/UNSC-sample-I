export default function ShieldBar({ value, cells = 20, label = 'ESCUDOS' }) {
  const on = Math.round((value / 100) * cells);
  return (
    <div role="meter" aria-label={label} aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
      <div className="bar-label"><span>{label}</span><span>{value}%</span></div>
      <div className={`seg ${value < 30 ? 'seg--low' : ''}`}>
        {Array.from({ length: cells }, (_, i) => <i key={i} className={i < on ? 'on' : ''} />)}
      </div>
    </div>
  );
}
