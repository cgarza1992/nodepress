import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = buildMetadata({
  title: 'Job Application Autofill: Download & Setup',
  description:
    'A free, local-first Chrome extension that fills job-application forms from your saved profile, with a review step. Never submits.',
  path: '/autofill',
  type: 'website',
});

const ZIP = '/autofill/job-application-autofill-v0.7.0.zip';
const VERSION = 'v0.7.0';

const DownloadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

function DownloadButton() {
  return (
    <a
      href={ZIP}
      download
      className="inline-flex items-center gap-2.5 rounded-xl bg-blue-500 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-6 py-3.5 shadow-lg hover:shadow-blue-500/25 transition-all"
    >
      <DownloadIcon />
      Download for Chrome
      <span className="font-mono text-xs font-semibold opacity-80">{VERSION}</span>
    </a>
  );
}

function Code({ children }: { children: ReactNode }) {
  return (
    <code className="font-mono text-[0.88em] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded px-1.5 py-0.5 break-words">
      {children}
    </code>
  );
}

function Kbd({ children }: { children: ReactNode }) {
  return (
    <kbd className="font-mono text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 border-b-2 rounded px-1.5 py-0.5 whitespace-nowrap text-slate-800 dark:text-slate-200">
      {children}
    </kbd>
  );
}

function Aside({ tag, children }: { tag: string; children: ReactNode }) {
  return (
    <div className="mt-3 rounded-lg bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 px-4 py-3 text-sm text-slate-600 dark:text-slate-400">
      <span className="block text-[10px] font-mono uppercase tracking-widest font-bold text-teal-600 dark:text-teal-400 mb-1">
        {tag}
      </span>
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500">
      {children}
    </p>
  );
}

interface StepProps {
  num: number;
  time: string;
  title: string;
  children: ReactNode;
}

function Step({ num, time, title, children }: StepProps) {
  return (
    <li className="relative pl-16 pb-10 last:pb-0 before:content-[''] before:absolute before:left-[18px] before:top-1 before:bottom-0 before:w-px before:bg-slate-200 dark:before:bg-slate-700 last:before:hidden">
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 w-9 h-9 rounded-xl grid place-items-center font-mono font-bold text-sm bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 border border-slate-200 dark:border-slate-700 shadow-sm"
      >
        {num}
      </span>
      <span className="block font-mono text-[11px] uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">
        {time}
      </span>
      <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">{title}</h3>
      <div className="mt-2 text-slate-600 dark:text-slate-400 leading-relaxed space-y-3">
        {children}
      </div>
    </li>
  );
}

export default function AutofillPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-white">
      <Navigation />

      <main className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        {/* Hero */}
        <header>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400">
            Free · Local-first · Chrome extension
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-balance max-w-[15ch]">
            Autofill your job applications.
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
            One saved profile fills the forms for you, with a review step every time. It runs only when you
            click it, keeps everything on your own computer, and never submits anything for you.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <DownloadButton />
            <span className="text-sm text-slate-500 dark:text-slate-400">
              Loads in about <b className="text-slate-900 dark:text-white font-semibold">2 minutes</b>. No account. No sign-up.
            </span>
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {[
              ['Local', 'your data stays here'],
              ['Reviewed', 'you approve every field'],
              ['Never submits', 'you send it'],
            ].map(([label, rest]) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 text-sm font-medium px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" aria-hidden="true" />
                <b className="text-blue-600 dark:text-blue-400 font-semibold">{label}</b>
                <span className="text-slate-500 dark:text-slate-400">{rest}</span>
              </span>
            ))}
          </div>
        </header>

        {/* See it in action */}
        <section className="mt-16">
          <SectionLabel>See it in action</SectionLabel>
          <p className="mt-2 text-slate-600 dark:text-slate-400 leading-relaxed">
            The actual extension running on a sample form with placeholder data. It scans the page, matches
            your details, and shows you every field before filling anything. It never submits.
          </p>
          <div
            className="mt-4 w-full rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden bg-slate-100 dark:bg-slate-900"
            style={{ aspectRatio: '1280 / 800', containerType: 'size' }}
          >
            <iframe
              src="/autofill/demo.html"
              title="Job Application Autofill live demo"
              loading="lazy"
              scrolling="no"
              style={{
                width: '1280px',
                height: '800px',
                border: 0,
                transformOrigin: 'top left',
                transform: 'scale(calc(100cqw / 1280px))',
              }}
            />
          </div>
          <p className="mt-2.5 text-sm text-slate-400 dark:text-slate-500">Live demo, looping with sample data.</p>
        </section>

        {/* Setup */}
        <section className="mt-16">
          <SectionLabel>Setup</SectionLabel>
          <p className="mt-2 text-slate-600 dark:text-slate-400 leading-relaxed">
            Chromium browsers (Chrome, Edge, Brave, Arc) load an extension folder directly. It takes a few
            minutes, and you only do most of this once.
          </p>

          <ol className="mt-8">
            <Step num={1} time="about 2 minutes" title="Install the extension">
              <p>You are loading a folder from your own computer. This is normal and safe.</p>
              <ol className="list-decimal pl-5 space-y-1.5 marker:text-blue-500 marker:font-mono marker:text-sm">
                <li><b className="text-slate-900 dark:text-white font-semibold">Unzip</b> the file you just downloaded. You get a folder with a <Code>manifest.json</Code> inside it.</li>
                <li>Open <Code>chrome://extensions</Code> (paste that into the address bar).</li>
                <li>Turn on <b className="text-slate-900 dark:text-white font-semibold">Developer mode</b>, the toggle in the top right.</li>
                <li>Click <b className="text-slate-900 dark:text-white font-semibold">Load unpacked</b> and choose the unzipped folder.</li>
                <li>Pin it to your toolbar: click the puzzle-piece icon, then the pin next to it.</li>
              </ol>
              <Aside tag="Works in">
                Chrome, Edge, Brave, Arc, and other Chromium browsers. Safari and Firefox are not supported.
              </Aside>
            </Step>

            <Step num={2} time="about 4 minutes" title="Add your profile">
              <p>This is what the extension types into forms. The more complete it is, the more it can fill for you.</p>
              <ol className="list-decimal pl-5 space-y-1.5 marker:text-blue-500 marker:font-mono marker:text-sm">
                <li>Right-click the extension icon and choose <b className="text-slate-900 dark:text-white font-semibold">Options</b> (or open it from the popup).</li>
                <li>Fill in your <b className="text-slate-900 dark:text-white font-semibold">name and contact details</b>, then your <b className="text-slate-900 dark:text-white font-semibold">work history</b>.</li>
                <li>Save. That is your reusable profile, and you only do this once.</li>
              </ol>
              <Aside tag="Private">
                Your profile is stored only in this browser, on this computer. It is not uploaded anywhere.
              </Aside>
            </Step>

            <Step num={3} time="optional, recommended" title="Upload your documents">
              <p>So the extension can attach them on forms that ask for a file.</p>
              <ul className="list-disc pl-5 space-y-1.5 marker:text-teal-500">
                <li><b className="text-slate-900 dark:text-white font-semibold">Résumé</b>: PDF, DOC, or DOCX.</li>
                <li><b className="text-slate-900 dark:text-white font-semibold">Cover letter</b>: use a <Code>.docx</Code> if you want the tailor-per-job feature below.</li>
              </ul>
              <Aside tag="Cover-letter tip">
                Write <Code>[Company]</Code> and <Code>[Role]</Code> in your letter where they should change per
                job. In <b className="text-slate-900 dark:text-white font-semibold">Options, Cover letter replacements</b>, give constants like <Code>[Portfolio]</Code> a
                value, and leave per-application ones like <Code>[Hiring&nbsp;Manager]</Code> blank to fill them each time.
              </Aside>
            </Step>

            <Step num={4} time="optional" title="Turn on the power-ups, or don't">
              <p>Both are off until you set them up, and both keep your data yours.</p>
              <ul className="list-disc pl-5 space-y-1.5 marker:text-teal-500">
                <li><b className="text-slate-900 dark:text-white font-semibold">Local AI drafting</b>: point it at a model running on your own machine to draft open-ended answers and cover letters. Nothing leaves your computer.</li>
                <li><b className="text-slate-900 dark:text-white font-semibold">Notion logging</b>: connect your own Notion to record every application you send. Bring your own key.</li>
              </ul>
            </Step>

            <Step num={5} time="the main event" title="Fill your first form">
              <p>Everything above was one-time setup. This is what you do on every application.</p>
              <ol className="list-decimal pl-5 space-y-1.5 marker:text-blue-500 marker:font-mono marker:text-sm">
                <li>Open a job-application page.</li>
                <li>Click the extension, or press <Kbd>Ctrl</Kbd> <Kbd>Shift</Kbd> <Kbd>Y</Kbd> (<Kbd>⌘</Kbd> <Kbd>Shift</Kbd> <Kbd>Y</Kbd> on Mac).</li>
                <li>A review panel opens with three lists: <b className="text-slate-900 dark:text-white font-semibold">Will fill</b>, <b className="text-slate-900 dark:text-white font-semibold">Needs your check</b>, and <b className="text-slate-900 dark:text-white font-semibold">Skipped</b>.</li>
                <li>Look it over, fix anything, then approve. It types your answers in, and stops there.</li>
              </ol>
              <Aside tag="You stay in control">
                It never clicks <b className="text-slate-900 dark:text-white font-semibold">Submit</b>. You read the filled form and send the application yourself.
              </Aside>
            </Step>

            <Step num={6} time="if you saved a .docx cover letter" title="Tailor your cover letter">
              <p>Turn one template into a letter written for this exact posting.</p>
              <ol className="list-decimal pl-5 space-y-1.5 marker:text-blue-500 marker:font-mono marker:text-sm">
                <li>In the panel, choose <b className="text-slate-900 dark:text-white font-semibold">Fill my cover letter</b>.</li>
                <li>It swaps <Code>[Company]</Code>, <Code>[Role]</Code>, and your placeholders for this job.</li>
                <li>Preview it, then <b className="text-slate-900 dark:text-white font-semibold">Attach to this application</b> or <b className="text-slate-900 dark:text-white font-semibold">Download</b> a copy.</li>
              </ol>
              <Aside tag="Guardrail">
                It will not attach a letter that still has an unfilled <Code>[placeholder]</Code> in it, so a
                half-finished template cannot go out by mistake.
              </Aside>
            </Step>
          </ol>
        </section>

        {/* Why it exists (moved down from the top for a better mobile lead) */}
        <section className="mt-16 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 shadow-sm p-6 sm:p-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-teal-600 dark:text-teal-400">
            Why it exists
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-balance">An accessibility tool, first.</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
            Filling out job applications means entering the same details by hand, over and over, while you jump
            between your resume, a notes file, and the application tab. If your hands or wrists make that
            painful, it adds up fast. This exists to spare you as much of that movement as it can.
          </p>
          <ul className="mt-5 space-y-3">
            {[
              ['Enter it once.', 'Save your details a single time and every form fills from them, so you are not re-typing your name, history, and answers on application after application.'],
              ['Let it come to you.', 'It fills the form you are already on, so you are not chasing your information across windows and documents to copy it over by hand.'],
              ['One easy copy when it is unsure.', 'If the local model hiccups, every field is a single click to copy, so nothing pushes you into extra typing or reaching.'],
            ].map(([lead, rest]) => (
              <li key={lead} className="relative pl-6 text-slate-700 dark:text-slate-300 leading-relaxed">
                <span className="absolute left-0 top-2.5 w-2 h-2 rounded-full bg-teal-500" aria-hidden="true" />
                <b className="text-slate-900 dark:text-white font-semibold">{lead}</b> {rest}
              </li>
            ))}
          </ul>
        </section>

        {/* What it will never do */}
        <section className="mt-8 rounded-2xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50 dark:bg-emerald-950/20 p-6 sm:p-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-700 dark:text-emerald-400">
            Peace of mind
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight">What it will never do</h2>
          <ul className="mt-5 space-y-4">
            {[
              ['Submit anything on its own.', 'It fills the form and stops. You always press send.'],
              ['Fill demographic questions on its own.', 'EEO and voluntary self-identification are skipped by default. If you want them answered, you opt in from Settings and give your own values.'],
              ['Send your data away.', 'Your profile and documents live in your browser. No servers, no accounts.'],
            ].map(([lead, rest]) => (
              <li key={lead} className="flex gap-3">
                <CheckIcon />
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  <b className="block text-slate-900 dark:text-white font-semibold">{lead}</b>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">{rest}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Final CTA */}
        <section className="mt-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 shadow-sm text-center p-10">
          <h2 className="text-2xl font-bold tracking-tight">Ready when you are.</h2>
          <p className="mt-2.5 text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            Download it, set up your profile once, and let it handle the typing.
          </p>
          <div className="mt-6 flex justify-center">
            <DownloadButton />
          </div>
        </section>

        <p className="mt-10 text-center text-sm text-slate-400 dark:text-slate-500">
          Built by{' '}
          <Link href="/" className="underline underline-offset-2 hover:text-blue-500 transition-colors">
            Christopher Garza
          </Link>
          . An accessibility tool for anyone who finds repetitive computer tasks painful.{' '}
          <a href="/autofill/privacy" className="underline underline-offset-2 hover:text-blue-500 transition-colors">
            Privacy policy
          </a>
          .
        </p>
      </main>

      <Footer year={2026} name="Christopher Garza" />
    </div>
  );
}
