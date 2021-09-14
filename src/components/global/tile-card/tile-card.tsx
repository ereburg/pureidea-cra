import { FC } from "react"
import {
  TileCardProps,
  TileCardType,
} from "@/components/global/tile-card/tile-card.d"
import { TileCardWhite } from "@/components/global/tile-card/tile-card-white"
import { TileCardAccent } from "@/components/global/tile-card/tile-card-accent"
import { TileCardGradient } from "@/components/global/tile-card/tile-card-gradient"
import { TileCardWhiteGradient } from "@/components/global/tile-card/tile-card-white-gradient"

const cards: Record<TileCardType, any> = {
  white: TileCardWhite,
  gradient: TileCardGradient,
  "white-gradient": TileCardWhiteGradient,
  accent: TileCardAccent,
}

export const TileCard: FC<TileCardProps> = ({
  children,
  type = `white`,
  isDisabled,
  className,
  ...props
}) => {
  const Tile = cards[type]
  if (!Tile) return <>{`card type "${type}" is not found`}</>
  return (
    <Tile {...props} className={className} disabled={isDisabled}>
      {children}
    </Tile>
  )
}
