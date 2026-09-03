import { Form } from "react-aria-components";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { TextArea } from "@/components/base/textarea/textarea";

export default function ContactPage() {
  return (
    <section id="contato" className="relative min-h-svh overflow-hidden bg-amparo-600">
      <img src="/images/gallery-01.jpg" alt="" className="absolute inset-0 size-full object-cover object-[50%_52%]" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-amparo-900/90 via-amparo-600/72 to-amparo-400/52" />
      <div aria-hidden="true" className="absolute -top-40 -right-24 size-[34rem] rounded-full bg-amparo-300/25 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-52 left-1/3 size-[30rem] rounded-full bg-amparo-900/45 blur-3xl" />

      <div className="relative z-10 mx-auto grid min-h-svh w-full max-w-container items-center gap-12 px-6 py-20 lg:grid-cols-[29rem_1fr] lg:gap-24 lg:px-8">
          <Form onSubmit={(event) => event.preventDefault()} className="grid gap-5 rounded-3xl bg-amparo-50/96 p-8 text-amparo-900 shadow-2xl backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-1 lg:p-10">
            <div className="sm:col-span-2 lg:col-span-1">
              <p className="text-xs font-semibold tracking-[0.2em] text-amparo-600 uppercase">Converse com a Amparo</p>
              <h2 className="mt-3 text-2xl font-semibold">Solicite um contato</h2>
            </div>
            <Input name="name" label="Nome" placeholder="Como podemos chamar você?" isRequired />
            <Input name="phone" type="tel" label="Telefone" placeholder="(00) 00000-0000" isRequired />
            <Input name="email" type="email" label="E-mail" placeholder="voce@exemplo.com" isRequired className="sm:col-span-2 lg:col-span-1" />
            <TextArea name="message" label="Como podemos ajudar?" placeholder="Conte brevemente o que você procura" isRequired rows={3} className="sm:col-span-2 lg:col-span-1" />
            <Button type="submit" size="md" className="sm:col-span-2 lg:col-span-1">Enviar mensagem</Button>
          </Form>

          <div className="max-w-xl text-amparo-50">
            <p className="text-xs font-semibold tracking-[0.24em] text-amparo-200 uppercase">Cuidado 360°</p>
            <h2 className="mt-5 font-editorial text-5xl leading-[1.08] font-medium tracking-tight sm:text-6xl">Toda jornada de cuidado começa com uma boa conversa.</h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-amparo-50">Conte-nos sobre a rotina, as preocupações e as necessidades da sua família. Nossa equipe escuta primeiro, avalia o contexto e organiza uma solução personalizada.</p>
            <p className="mt-5 text-base font-medium text-amparo-100">Atendimento humano, confidencial e acompanhado pela Amparo.</p>
        </div>
      </div>
    </section>
  );
}
