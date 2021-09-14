import { FC } from "react"
import cc from "classcat"
import { ProductCardDefaultProps } from "@/components/price/product-card/product-card.d"

export const ProductCardWhiteGradient: FC<ProductCardDefaultProps> = ({
  title,
  children,
  className,
  price,
  ...props
}) => (
  <article className="h-full">
    <a
      className={cc([
        `block h-full bg-white border border-grey-5 pt-6 pb-10 px-14 rounded-4xl shadow-base`,
        className,
      ])}
      {...props}
    >
      <h2 className="text-4xl">
        <span className="bg-gradient-to-r from-[#009FFF] to-[#EC2F4B] leading-tight bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      <div className="mt-4 min-h-[84px] text-sm text-grey-2">{children}</div>
      <div className="text-grey-2 text-4xl text-right leading-tight mt-3.5">
        {price}
      </div>
    </a>
  </article>
)
