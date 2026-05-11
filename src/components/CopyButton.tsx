'use client';

import { useState, useRef } from 'react';

const CopyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

interface CopyButtonProps {
  textToCopy: string;
  /** Accessible label shown to screen readers on the button itself */
  ariaLabel?: string;
}

export function CopyButton({ textToCopy, ariaLabel = 'Copy email address' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  async function handleCopy() {
    // Clear any pending reset timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setError(false);
      } catch {
        // Clipboard write was rejected (e.g. permissions denied)
        setError(true);
        setCopied(false);
      }
    } else {
      // Graceful fallback: select text via a temporary textarea
      try {
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        textarea.setAttribute('readonly', '');
        textarea.style.cssText = 'position:absolute;left:-9999px;top:-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopied(true);
        setError(false);
      } catch {
        setError(true);
        setCopied(false);
      }
    }

    timerRef.current = setTimeout(() => {
      setCopied(false);
      setError(false);
    }, 1500);
  }

  const liveMessage = copied ? 'Email copied' : error ? 'Copy failed' : '';

  return (
    <>
      {/* aria-live region announces copy result to screen readers */}
      <span
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {liveMessage}
      </span>

      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? 'Email copied' : error ? 'Copy failed — try again' : ariaLabel}
        title={copied ? 'Copied!' : error ? 'Copy failed — try manually' : 'Copy email address'}
        className={[
          'inline-flex items-center justify-center',
          'w-8 h-8 rounded-md cursor-pointer',
          'transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400',
          'focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900',
          copied
            ? 'text-cyan-500 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20'
            : error
            ? 'text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-900/20'
            : 'text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-700/50',
        ].join(' ')}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </button>
    </>
  );
}
