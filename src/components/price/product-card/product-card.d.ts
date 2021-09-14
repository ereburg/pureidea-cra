import { HTMLElement, MouseEvent } from "react"

export type ProductCardType = "white" | "gradient" | "accent" | "white-gradient"

export interface ProductCardDefaultProps {
  title: string
  children?: JSX.Element | string
  className?: string
  price: string
}

export interface ProductCardProps extends ProductCardDefaultProps {
  type: ProductCardType
  isDisabled?: boolean
  onClick?: (event: MouseEvent<HTMLElement>) => void
}
