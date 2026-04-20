interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
}

const variants = {
  // bg-blue-500 is the solid fallback for a11y scanners that can't read gradients;
  // browsers render the gradient (background-image) on top of it visually.
  primary: 'bg-blue-500 bg-gradient-to-r from-blue-500 to-cyan-500 hover:bg-blue-600 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold shadow-lg hover:shadow-blue-500/25',
  // Light: dark border + dark text → inverts to dark bg + white on hover (7:1+)
  // Dark: subtle border + light text → brightens border + goes white on hover
  secondary: 'border border-slate-700 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 dark:border-slate-500 dark:text-slate-200 dark:hover:border-white dark:hover:text-white',
  // Light: blue text → fills with blue + white text on hover (4.6:1+)
  // Dark: lighter blue → subtle fill on hover
  ghost: 'text-blue-600 hover:bg-blue-600 hover:text-white dark:text-blue-400 dark:hover:bg-blue-400/15 dark:hover:text-cyan-300',
};

const sizes = {
  sm: 'px-4 py-1.5 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3 text-base',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  target,
  rel,
  disabled = false,
}: ButtonProps) {
  const disabledClass = disabled ? 'opacity-40 cursor-not-allowed pointer-events-none' : 'cursor-pointer';
  const classes = `inline-flex items-center justify-center rounded-lg transition-all duration-200 ${variants[variant]} ${sizes[size]} ${disabledClass} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
