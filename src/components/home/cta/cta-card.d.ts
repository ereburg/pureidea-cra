export interface DefaultProps {
  title?: string
  className?: string
  children?: JSX.Element
}

export type CTACardType = "gradient" | "purple"

export interface CardCTAProps extends DefaultProps {
  label: string
}

export interface CTACardProps extends CardCTAProps {
  type: CTACardType
}
