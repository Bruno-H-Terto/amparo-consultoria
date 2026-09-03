import { HeartRounded, Menu01, XClose } from "@untitledui/icons";
import { useState } from "react";
import { Button, Link } from "react-aria-components";
import { cx } from "@/utils/cx";

const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Sobre nós", href: "#sobre" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-secondary bg-primary/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-container items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#inicio"
          aria-label="Amparo — página inicial"
          className="flex items-center gap-2.5 rounded-lg outline-brand focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <span className="flex size-9 items-center justify-center rounded-lg bg-brand-solid text-white shadow-xs-skeuomorphic">
            <HeartRounded aria-hidden="true" className="size-5" />
          </span>
          <span className="text-xl font-semibold text-primary">Amparo</span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-secondary outline-brand transition hover:bg-primary_hover hover:text-secondary_hover focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="#contato"
            className="inline-flex items-center justify-center rounded-lg bg-brand-solid px-4 py-2.5 text-sm font-semibold text-white shadow-xs-skeuomorphic outline-brand transition hover:bg-brand-solid_hover focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Encontrar um cuidador
          </Link>
        </div>

        <Button
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          onPress={() => setIsMenuOpen((open) => !open)}
          className="flex size-10 items-center justify-center rounded-lg text-fg-secondary outline-brand hover:bg-primary_hover focus-visible:outline-2 focus-visible:outline-offset-2 md:hidden"
        >
          {isMenuOpen ? <XClose aria-hidden="true" className="size-6" /> : <Menu01 aria-hidden="true" className="size-6" />}
        </Button>
      </div>

      <div
        id="mobile-navigation"
        className={cx("border-t border-secondary px-4 py-4 md:hidden", !isMenuOpen && "hidden")}
      >
        <nav aria-label="Navegação mobile" className="mx-auto flex max-w-container flex-col gap-1">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onPress={() => setIsMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-md font-semibold text-secondary outline-brand hover:bg-primary_hover focus-visible:outline-2"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contato"
            onPress={() => setIsMenuOpen(false)}
            className="mt-3 inline-flex justify-center rounded-lg bg-brand-solid px-4 py-2.5 text-sm font-semibold text-white shadow-xs-skeuomorphic outline-brand hover:bg-brand-solid_hover focus-visible:outline-2"
          >
            Encontrar um cuidador
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
