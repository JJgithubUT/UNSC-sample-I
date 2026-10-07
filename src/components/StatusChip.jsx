const MAP = {
  ok: ['', 'EN LÍNEA'],
  warn: ['chip--warn', 'DEGRADADO'],
  crit: ['chip--crit', 'FUERA DE LÍNEA']
};

export default function StatusChip(
  { level = 'ok', label }
) {
  const [cls, text] = MAP[level];
  return (
    <span className={`chip ${cls}`}>
      {label ?? text}
    </span>
);
}
