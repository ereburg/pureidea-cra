import React, { FC, useState } from "react"
import cc from "classcat"
import { DefaultProps } from "@/components/home/cta/cta-card.d"

interface AccordionProps extends DefaultProps {
  state?: boolean
}

const Accordion: FC<AccordionProps> = ({ title, children, state = false }) => {
  const [isOpen, setIsOpen] = useState(state)

  return (
    <div className="">
      <div className="border border-r-0 border-l-0 border-accent-500">
        <button
          className="inline-flex items-center justify-between w-full px-6 py-2 text-grey text-4xl font-medium"
          aria-expanded={isOpen}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {title}
          <svg
            className={cc([
              `text-accent-500 transition-transform ease-in`,
              !isOpen ? `` : `rotate-180`,
            ])}
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5139 0.811724L14.4932 0.784768L14.4691 0.760858C14.1425 0.437386 13.5417 0.375018 13.197 0.801932L7.92862 7.32525L2.63117 0.801932C2.63099 0.801707 2.63081 0.801483 2.63063 0.801258C2.28576 0.375084 1.68544 0.437556 1.35906 0.760858L1.33492 0.784769L1.31424 0.811725L0.72367 1.58147C0.424069 1.95771 0.425449 2.48659 0.727811 2.86143C0.727942 2.86159 0.728072 2.86175 0.728203 2.86192L7.25872 10.9868L7.27645 11.0088L7.29656 11.0288C7.45978 11.1904 7.67698 11.2896 7.91406 11.2896C8.15115 11.2896 8.36834 11.1904 8.53156 11.0288L8.55167 11.0088L8.5694 10.9868L15.0999 2.86192C15.1001 2.86174 15.1002 2.86157 15.1003 2.8614C15.4027 2.48655 15.404 1.95769 15.1044 1.58146L14.5139 0.811724Z"
              fill="currentColor"
              stroke="currentColor"
            />
          </svg>
        </button>
      </div>
      <div
        className={cc([
          `accordion-item -mx-7 px-7 overflow-hidden`,
          !isOpen ? `collapsed` : ``,
        ])}
        aria-expanded={!isOpen}
      >
        <div className="pt-3.5 pb-17">{children}</div>
      </div>
    </div>
  )
}
export default Accordion
