import { Form } from "react-aria-components";
import type { FormEvent } from "react";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { TextArea } from "@/components/base/textarea/textarea";

export default function ContactPage() {
  const formatPhone = (event: FormEvent<HTMLInputElement>) => {
    const digits = event.currentTarget.value.replace(/\D/g, "").slice(0, 11);
    const formatted = digits
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2");
    event.currentTarget.value = formatted;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, "");
    if (!whatsappNumber) {
      window.alert("O número de atendimento ainda não foi configurado.");
      return;
    }

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const text = [
      "Olá, equipe Amparo! Gostaria de solicitar um contato.",
      "",
      `Nome: ${name}`,
      `Telefone: ${phone}`,
      `E-mail: ${email}`,
      `Como podemos ajudar: ${message}`,
    ].join("\n");

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contato" className="relative min-h-svh overflow-hidden bg-amparo-600">
      <img src="/images/gallery-01.jpg" alt="" className="absolute inset-0 size-full object-cover object-[50%_52%]" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-amparo-900/90 via-amparo-600/72 to-amparo-400/52" />
      <div aria-hidden="true" className="absolute -top-40 -right-24 size-[34rem] rounded-full bg-amparo-300/25 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-52 left-1/3 size-[30rem] rounded-full bg-amparo-900/45 blur-3xl" />

      <div className="relative z-10 mx-auto grid min-h-svh w-full max-w-container content-center items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 xl:grid-cols-[minmax(22rem,27rem)_minmax(0,1fr)] xl:gap-16 xl:py-20 [@media(min-width:1280px)_and_(max-height:760px)]:py-5">
          <Form onSubmit={handleSubmit} className="grid w-full max-w-[27rem] justify-self-center gap-4 rounded-2xl bg-amparo-50/96 p-6 text-amparo-900 shadow-2xl backdrop-blur-xl sm:p-8 xl:p-8 [@media(min-width:1280px)_and_(max-height:760px)]:gap-3 [@media(min-width:1280px)_and_(max-height:760px)]:p-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-amparo-600 uppercase">Converse com a Amparo</p>
              <h2 className="mt-2 text-2xl font-semibold">Solicite um contato</h2>
            </div>
            <Input name="name" label="Nome" placeholder="Como podemos chamar você?" isRequired />
            <Input name="phone" type="tel" inputMode="tel" maxLength={15} onInput={formatPhone} label="Telefone" placeholder="(00) 00000-0000" isRequired />
            <Input name="email" type="email" label="E-mail" placeholder="voce@exemplo.com" isRequired />
            <TextArea name="message" label="Como podemos ajudar?" placeholder="Conte brevemente o que você procura" isRequired rows={2} />
            <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-amparo-slate">
              <input name="privacyConsent" type="checkbox" required className="mt-1 size-5 shrink-0 accent-amparo-600" />
              <span>Concordo com o uso destes dados para receber o contato da equipe Amparo.</span>
            </label>
            <Button type="submit" size="md" className="w-full">Conversar pelo WhatsApp</Button>
          </Form>

          <div className="mx-auto max-w-2xl text-amparo-50 xl:mx-0">
            <p className="text-xs font-semibold tracking-[0.24em] text-amparo-200 uppercase">Cuidado 360°</p>
            <h2 className="mt-5 font-editorial text-4xl leading-[1.1] font-medium tracking-tight sm:text-5xl xl:text-6xl [@media(min-width:1280px)_and_(max-height:760px)]:text-5xl">Toda jornada de cuidado começa com uma boa conversa.</h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-amparo-50 [@media(min-width:1280px)_and_(max-height:760px)]:mt-5">Conte-nos sobre a rotina, as preocupações e as necessidades da sua família. Nossa equipe escuta primeiro, avalia o contexto e organiza uma solução personalizada.</p>
            <p className="mt-5 text-base font-medium text-amparo-100 [@media(min-width:1280px)_and_(max-height:760px)]:mt-3">Ao continuar, o WhatsApp será aberto. Evite incluir informações médicas sensíveis.</p>
        </div>
      </div>
    </section>
  );
}
