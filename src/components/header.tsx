import { Menu01, XClose } from "@untitledui/icons";
import { useEffect, useRef, useState } from "react";
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
  const [isVisible, setIsVisible] = useState(true);
  const [isOnHero, setIsOnHero] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const onHero = currentScrollY < window.innerHeight - 72;

      setIsOnHero(onHero);
      if (onHero || currentScrollY < lastScrollY.current - 8) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 8) {
        setIsVisible(false);
        setIsMenuOpen(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-50 border-0 transition-[transform,background-color,color] duration-300",
        isVisible || isMenuOpen ? "translate-y-0" : "-translate-y-full",
        isOnHero ? "bg-transparent text-white" : "bg-amparo-50/95 text-amparo-900 shadow-lg backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-18 max-w-container items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#inicio"
          aria-label="Amparo — página inicial"
          className="rounded outline-brand focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <img
            src="/images/amparo-consultoria-logo.png"
            alt="Amparo Consultoria"
            className={cx("h-12 w-44 object-contain object-left transition", isOnHero && "brightness-0 invert")}
          />
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cx("rounded px-3 py-2 text-sm font-medium outline-amparo-400 transition focus-visible:outline-2 focus-visible:outline-offset-2", isOnHero ? "text-white/85 hover:text-amparo-300" : "text-amparo-900/80 hover:text-amparo-600")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="#contato"
            className={cx("inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold outline-amparo-400 transition focus-visible:outline-2 focus-visible:outline-offset-2", isOnHero ? "bg-amparo-50 text-amparo-900 hover:bg-amparo-400" : "bg-amparo-900 text-amparo-50 hover:bg-amparo-600")}
          >
            Encontrar um cuidador
          </Link>
        </div>

        <Button
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          onPress={() => setIsMenuOpen((open) => !open)}
          className={cx("flex size-10 items-center justify-center rounded outline-amparo-400 focus-visible:outline-2 focus-visible:outline-offset-2 md:hidden", isOnHero ? "text-white hover:text-amparo-300" : "text-amparo-900 hover:text-amparo-600")}
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
