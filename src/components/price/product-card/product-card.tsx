import { FC } from "react"
import { ProductCardProps, ProductCardType } from "./product-card.d"
import { ProductCardAccent } from "@/components/price/product-card/product-card-accent"
import { ProductCardGradient } from "@/components/price/product-card/product-card-gradient"
import { ProductCardWhite } from "@/components/price/product-card/product-card-white"
import { ProductCardWhiteGradient } from "@/components/price/product-card/product-card-white-gradient"

const cards: Record<ProductCardType, any> = {
  white: ProductCardWhite,
  gradient: ProductCardGradient,
  "white-gradient": ProductCardWhiteGradient,
  accent: ProductCardAccent,
}

export const ProductCard: FC<ProductCardProps> = ({
  children,
  type = `white`,
  isDisabled,
  className,
  ...props
}) => {
  const Product = cards[type]
  if (!Product) return <>{`card type "${type}" is not found`}</>
  return (
    <Product {...props} className={className} disabled={isDisabled}>
      {children}
    </Product>
  )
}
