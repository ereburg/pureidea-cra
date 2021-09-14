import { FC } from "react"
import cc from "classcat"
import { CardCTAProps } from "@/components/home/cta/cta-card.d"

export const CardCTAPurple: FC<CardCTAProps> = ({
  className,
  title,
  label,
}) => (
  <div
    className={cc([
      `block h-full pt-20 px-25 pb-12.5 bg-no-repeat bg-center bg-cover bg-cta-card-gradient-purple rounded-2xl shadow-base text-white text-center`,
      className,
    ])}
  >
    <h2 className="font-bold text-5xl leading-none">{title}</h2>
    <p className="mt-12">
      <button
        className="py-3.5 px-4 min-w-[255px] bg-[#2A00A2] rounded-lg shadow-cta-card-btn"
        type="button"
      >
        {label}
      </button>
    </p>
  </div>
)
