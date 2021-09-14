import cc from "classcat"
import { ITextSectionProps } from "@/components/global/textSection/ITextSection.interface"

export default function TextSection(props: ITextSectionProps): JSX.Element {
  const { title, children, rootClass } = props
  return (
    <section className={cc([`container`, rootClass])}>
      <div className="px-8">
        <h2 className="relative font-medium text-[2.625rem] leading-tight before:absolute before:inset-y-0 before:-left-7.5 before:block before:border-r-4 before:h-full before:border-primary ">
          {title}
        </h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
