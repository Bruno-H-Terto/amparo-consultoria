import { Menu01, XClose } from "@untitledui/icons";
import { useState } from "react";
import { Button, Link } from "react-aria-components";
import { useLocation } from "react-router-dom";
import { cx } from "@/utils/cx";

const navigation = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Como funciona", href: "/como-funciona" },
  { label: "Sobre nós", href: "/sobre-nos" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const useHeroStyle = isLandingPage;

  return (
    <header
      className={cx(
        "absolute inset-x-0 top-0 z-[100] border-0 transition-[background-color,color] duration-300",
        useHeroStyle ? "bg-transparent text-white" : "bg-amparo-50/95 text-amparo-900 shadow-lg backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-20 max-w-container items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="Amparo — página inicial"
          className="w-56 rounded outline-brand focus-visible:outline-2 focus-visible:outline-offset-2 lg:w-64"
        >
          <img
            src="/images/amparo-consultoria-logo.png"
            alt="Amparo Consultoria"
            className={cx("h-14 w-full object-contain object-left transition lg:h-16", useHeroStyle && "brightness-0 invert")}
          />
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cx("rounded-lg px-4 py-3 text-base font-medium outline-amparo-400 transition focus-visible:outline-2 focus-visible:outline-offset-2", useHeroStyle ? "text-white/90 hover:text-amparo-300" : "text-amparo-900/85 hover:text-amparo-600")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href={isLandingPage ? "#contato" : "/#contato"}
            className={cx("inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-base font-semibold shadow-lg outline-amparo-400 transition duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2", useHeroStyle ? "bg-amparo-50 text-amparo-900 hover:bg-amparo-400" : "bg-amparo-900 text-amparo-50 hover:bg-amparo-600")}
          >
            Entrar em contato
          </Link>
        </div>

        <Button
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          onPress={() => setIsMenuOpen((open) => !open)}
          className={cx("flex size-10 items-center justify-center rounded outline-amparo-400 focus-visible:outline-2 focus-visible:outline-offset-2 md:hidden", useHeroStyle ? "text-white hover:text-amparo-300" : "text-amparo-900 hover:text-amparo-600")}
        >
          {isMenuOpen ? <XClose aria-hidden="true" className="size-6" /> : <Menu01 aria-hidden="true" className="size-6" />}
        </Button>
      </div>

      <div
        id="mobile-navigation"
        className={cx("border-0 bg-amparo-900/98 px-4 py-4 md:hidden", !isMenuOpen && "hidden")}
      >
        <nav aria-label="Navegação mobile" className="mx-auto flex max-w-container flex-col gap-1">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onPress={() => setIsMenuOpen(false)}
              className="rounded px-3 py-2.5 text-md font-semibold text-white outline-amparo-400 hover:text-amparo-300 focus-visible:outline-2"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={isLandingPage ? "#contato" : "/#contato"}
            onPress={() => setIsMenuOpen(false)}
            className="mt-3 inline-flex justify-center rounded-lg bg-brand-solid px-4 py-2.5 text-sm font-semibold text-white shadow-xs-skeuomorphic outline-brand hover:bg-brand-solid_hover focus-visible:outline-2"
          >
            Entrar em contato
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
