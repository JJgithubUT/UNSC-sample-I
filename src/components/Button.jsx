export default function Button({ variant = 'primary', className = '', children, ...props }) {
  const v = variant === 'primary' ? '' : `btn--${variant}`;
  return <button className={`btn ${v} ${className}`.trim()} {...props}>{children}</button>;
}
