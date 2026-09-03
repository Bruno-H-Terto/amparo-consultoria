import { Link } from "react-router-dom";
import { cx } from "@/utils/cx";

interface EditorialSectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageOnRight?: boolean;
  dark?: boolean;
  detailsHref: string;
}

export function EditorialSection({ id, eyebrow, title, description, image, imageAlt, imageOnRight, dark, detailsHref }: EditorialSectionProps) {
  return (
    <section id={id} className={cx("relative flex h-svh items-center overflow-hidden py-12", dark ? "bg-amparo-900 text-amparo-50" : "bg-amparo-50 text-amparo-900")}>
      <div aria-hidden="true" className={cx("absolute -top-40 size-96 rounded-full border opacity-20", imageOnRight ? "-left-44 border-amparo-400" : "-right-44 border-amparo-600")} />
      <div className="relative mx-auto grid w-full max-w-container items-center gap-14 px-6 lg:grid-cols-12 lg:px-8">
        <div className={cx("overflow-hidden lg:col-span-7", imageOnRight && "lg:order-2")}>
          <img src={image} alt={imageAlt} loading="lazy" decoding="async" className="aspect-[5/4] size-full object-cover transition duration-700 hover:scale-[1.02]" />
        </div>
        <div className={cx("relative z-10 lg:col-span-5 lg:-ml-20", imageOnRight && "lg:order-1 lg:mr-[-5rem] lg:ml-0")}>
          <div className={cx("p-8 sm:p-12", dark ? "bg-amparo-800/95" : "bg-white/90 shadow-2xl backdrop-blur-sm")}>
            <p className={cx("text-xs font-semibold tracking-[0.22em] uppercase", dark ? "text-amparo-300" : "text-amparo-600")}>{eyebrow}</p>
            <h2 className="mt-5 font-editorial text-4xl leading-tight font-medium tracking-tight sm:text-5xl">{title}</h2>
            <p className={cx("mt-6 text-base leading-7", dark ? "text-amparo-100" : "text-amparo-slate")}>{description}</p>
            <Link to={detailsHref} className={cx("mt-8 inline-flex border-b pb-1 text-sm font-semibold outline-amparo-400 transition", dark ? "border-amparo-300 text-amparo-100 hover:text-amparo-300" : "border-amparo-600 text-amparo-900 hover:text-amparo-600")}>Saiba mais</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
