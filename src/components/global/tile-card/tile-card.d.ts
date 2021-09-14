import { HTMLElement, MouseEvent } from "react"

export type TileCardType = "white" | "gradient" | "accent" | "white-gradient"

export interface TileCardDefaultProps {
  title: string
  children?: JSX.Element | string
  className?: string
}

export interface TileCardProps extends TileCardDefaultProps {
  type: TileCardType
  isDisabled?: boolean
  onClick?: (event: MouseEvent<HTMLElement>) => void
}
