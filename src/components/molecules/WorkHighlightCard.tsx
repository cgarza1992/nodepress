'use client';

import { useState, useRef, type ReactNode } from 'react';
import NextImage from 'next/image';

interface WorkHighlightCardProps {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  image?: string;
  video?: string;
  preview?: ReactNode;
}

const CHAR_LIMIT = 180;

export function WorkHighlightCard({ title, description, tags, href, image, video, preview }: WorkHighlightCardProps) {
  const [expanded, setExpanded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => videoRef.current?.play();
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };
  const isLong = description.length > CHAR_LIMIT;
  const displayText = isLong && !expanded
    ? description.slice(0, CHAR_LIMIT).trimEnd() + '…'
    : description;

  return (
    <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden flex flex-col gap-4 transition-all duration-300 hover:border-blue-500 hover:bg-slate-50 dark:hover:bg-slate-800 hover:shadow-lg hover:shadow-blue-500/10">
      {preview && (
        <div className="w-full overflow-hidden rounded-t-xl">
          {preview}
        </div>
      )}
      {!preview && video && (
        <div
          className="w-full h-44 overflow-hidden bg-slate-900 relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video
            ref={videoRef}
            src={video}
            poster={image}
            muted
            loop
            playsInline
            preload="none"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute bottom-2 right-2 bg-black/50 text-white text-[10px] px-1.5 py-0.5 rounded pointer-events-none">
            Hover to play
          </div>
        </div>
      )}
      {!preview && !video && image && (
        <div className="w-full overflow-hidden border-b border-slate-100 dark:border-slate-700/50">
          <NextImage
            src={image}
            alt={`${title} preview`}
            width={0}
            height={0}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
            quality={100}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      )}
      <div className="flex items-start justify-between gap-4 px-6 pt-2">
        <h4 className="text-slate-900 dark:text-white font-semibold text-base leading-snug">{title}</h4>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-600 dark:text-blue-400 whitespace-nowrap shrink-0 hover:text-cyan-500 transition-colors cursor-pointer"
          >
            View Live →
          </a>
        )}
      </div>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1 px-6">{displayText}</p>
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-500 hover:text-blue-400 text-sm font-medium transition-colors cursor-pointer self-start px-6"
        >
          {expanded ? 'Read less' : 'Read more'}
        </button>
      )}
      <div className="flex flex-wrap gap-2 px-6 pb-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
