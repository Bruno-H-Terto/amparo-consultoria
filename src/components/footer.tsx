import type { SVGProps } from "react";
import { Link } from "react-aria-components";

const socialLinks = [
  { label: "Instagram", Icon: Instagram },
  { label: "Facebook", Icon: Facebook },
  { label: "LinkedIn", Icon: LinkedIn },
  { label: "YouTube", Icon: YouTube },
];

export default function Footer() {
  return (
    <footer className="shrink-0 bg-amparo-900 text-amparo-50">
      <div className="mx-auto max-w-container px-6 py-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-2xl font-semibold sm:text-3xl">Vamos conversar sobre o cuidado ideal?</p>
            <p className="mt-2 text-base text-amparo-200">Nossa equipe está pronta para ouvir sua família.</p>
          </div>
          <Link href="/#contato" className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-amparo-50 px-6 py-3 text-base font-semibold text-amparo-900 transition hover:-translate-y-0.5 hover:bg-amparo-400">Entrar em contato</Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="Amparo — página inicial" className="inline-flex rounded outline-amparo-400 focus-visible:outline-2 focus-visible:outline-offset-4">
              <img src="/images/amparo-consultoria-logo.png" alt="Amparo Consultoria" className="h-11 w-44 object-contain object-left brightness-0 invert" />
            </Link>
            <p className="mt-3 max-w-sm text-base leading-7 text-amparo-200">Uma rede de cuidado construída para cada história, com segurança para a família e respeito por quem recebe o cuidado.</p>
          </div>
          <nav aria-label="Institucional" className="grid content-start gap-3 text-base">
            <p className="mb-1 text-xs font-semibold tracking-[0.18em] text-amparo-400 uppercase">Navegação</p>
            <Link href="/servicos" className="text-amparo-100 transition hover:text-amparo-400">Serviços</Link>
            <Link href="/como-funciona" className="text-amparo-100 transition hover:text-amparo-400">Como funciona</Link>
            <Link href="/sobre-nos" className="text-amparo-100 transition hover:text-amparo-400">Sobre nós</Link>
          </nav>
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-amparo-400 uppercase">Atendimento</p>
            <p className="mt-2 text-base leading-7 text-amparo-200">Escuta cuidadosa, orientação clara e acompanhamento próximo em todas as etapas.</p>
            <p className="mt-3 text-sm font-semibold text-amparo-100">Juiz de Fora · Minas Gerais</p>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-amparo-300">© {new Date().getFullYear()} Amparo Consultoria. Todos os direitos reservados.</p>
          <nav aria-label="Redes sociais" className="flex items-center gap-2">
            {socialLinks.map(({ label, Icon }) => (
              <Link key={label} href="#" aria-label={label} className="flex size-8 items-center justify-center rounded-full text-amparo-200 outline-amparo-400 transition hover:bg-white/10 hover:text-amparo-400 focus-visible:outline-2 focus-visible:outline-offset-2"><Icon className="size-4" /></Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

function Instagram(props: SVGProps<SVGSVGElement>) { return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8"/><circle cx="17.4" cy="6.7" r="1" fill="currentColor"/></svg>; }
function Facebook(props: SVGProps<SVGSVGElement>) { return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M13.7 21v-8h2.8l.42-3.1H13.7V7.92c0-.9.26-1.5 1.62-1.5H17V3.65a23 23 0 0 0-2.45-.13c-2.43 0-4.1 1.48-4.1 4.2V9.9H7.7V13h2.75v8h3.25Z"/></svg>; }
function LinkedIn(props: SVGProps<SVGSVGElement>) { return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M6.5 8.3H3.2V19h3.3V8.3ZM4.85 3A1.93 1.93 0 1 0 4.8 6.85 1.93 1.93 0 0 0 4.85 3ZM19.3 12.87c0-3.22-1.72-4.72-4.02-4.72-1.85 0-2.68 1.02-3.15 1.74V8.3H8.82V19h3.31v-5.3c0-1.4.27-2.8 2.04-2.8 1.74 0 1.76 1.63 1.76 2.9V19h3.32l.05-6.13Z"/></svg>; }
function YouTube(props: SVGProps<SVGSVGElement>) { return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><path d="M21 8.2a3 3 0 0 0-2.1-2.12C17.05 5.58 12 5.58 12 5.58s-5.05 0-6.9.5A3 3 0 0 0 3 8.2 31 31 0 0 0 2.5 12 31 31 0 0 0 3 15.8a3 3 0 0 0 2.1 2.12c1.85.5 6.9.5 6.9.5s5.05 0 6.9-.5A3 3 0 0 0 21 15.8c.5-1.85.5-3.8.5-3.8s0-1.95-.5-3.8Z" fill="currentColor"/><path d="m10 15.2 5.2-3.2L10 8.8v6.4Z" fill="#172F39"/></svg>; }
