import { ITextSectionProps } from "@/shared/types/ITextSection"

export default function TextSection(props: ITextSectionProps): JSX.Element {
  const { title, children, rootClass } = props
  return (
    <section className={rootClass}>
      <div className="container mx-auto">
        {/* eslint-disable-next-line react/no-danger */}
        <h2
          dangerouslySetInnerHTML={{ __html: title }}
          className="relative font-medium text-[2.625rem] leading-tight before:absolute before:inset-y-0 before:-left-7.5 before:block before:border-r-4 before:h-full before:border-primary "
        />
        <div className="mt-10 ">{children}</div>
      </div>
    </section>
  )
}
