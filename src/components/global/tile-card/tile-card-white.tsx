import { FC } from "react"
import cc from "classcat"
import { TileCardDefaultProps } from "@/components/global/tile-card/tile-card.d"

export const TileCardWhite: FC<TileCardDefaultProps> = ({
  title,
  children,
  className,
  ...props
}) => (
  <article className="h-full">
    <a
      className={cc([
        `block h-full bg-white border border-grey-5 pt-6 pb-10 px-9 rounded-4xl shadow-base`,
        className,
      ])}
      {...props}
    >
      <h2 className="text-4xl font-bold leading-tight text-accent-500">
        {title}
      </h2>
      <div className="mt-4 text-sm text-grey-2">{children}</div>
    </a>
  </article>
)
