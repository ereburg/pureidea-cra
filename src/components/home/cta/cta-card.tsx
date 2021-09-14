import { FC } from "react"
import { CTACardProps, CTACardType } from "@/components/home/cta/cta-card.d"
import { CardCTAPurple } from "@/components/home/cta/cta-card-purple"
import { CardCTAGradient } from "@/components/home/cta/cta-card-gradient"

const cards: Record<CTACardType, any> = {
  purple: CardCTAPurple,
  gradient: CardCTAGradient,
}

export const CardCTA: FC<CTACardProps> = ({
  children,
  type = `purple`,
  className,
  ...props
}) => {
  const CTA = cards[type]
  if (!CTA) return <>{`card type "${type}" is not found`}</>
  return (
    <CTA {...props} className={className}>
      {children}
    </CTA>
  )
}
