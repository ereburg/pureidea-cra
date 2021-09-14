import { FC } from "react"
import cc from "classcat"
import { DefaultProps } from "@/components/home/cta/cta-card.d"
import { CardCTA } from "@/components/home/cta/cta-card"
import { QuoteArrowT } from "@/components/home/cta/arrow-t"
import { QuoteArrowB } from "@/components/home/cta/arrow-b"

export const HomeCTA: FC<DefaultProps> = ({ className }) => (
  <div className={cc([className])}>
    <div className="relative py-12.5">
      <div className="absolute left-0 bottom-full">
        <QuoteArrowT />
      </div>
      <div className="grid grid-cols-2 gap-12.5 max-w-[1260px] mx-auto">
        <CardCTA
          type="purple"
          title="CRM строительного направления"
          label="Познакомиться с CRM"
        />
        <CardCTA
          type="gradient"
          title="Индивидуальные решения"
          label="Хочу конструктор!"
        />
      </div>
      <div className="absolute right-0 top-full">
        <QuoteArrowB />
      </div>
    </div>
  </div>
)
