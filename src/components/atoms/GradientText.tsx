interface GradientTextProps {
  children: React.ReactNode;
  from?: string;
  via?: string;
  to?: string;
  className?: string;
}

export function GradientText({
  children,
  from = 'from-blue-400',
  via,
  to = 'to-cyan-400',
  className = '',
}: GradientTextProps) {
  const gradient = [from, via, to].filter(Boolean).join(' ');
  return (
    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient} ${className}`}>
      {children}
    </span>
  );
}
