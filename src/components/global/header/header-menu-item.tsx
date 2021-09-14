import { FC } from "react"
import cc from "classcat"
import Link from "next/link"
import { useRouter } from "next/router"

interface HeaderMenuItemProps {
  className?: JSX.Element
  url: string
  label: string
}

const HeaderMenuItem: FC<HeaderMenuItemProps> = ({ url, label }) => {
  const router = useRouter()

  return (
    <li>
      <Link href={url}>
        <a
          className={cc([
            `block border-0 border-current py-1 hover:text-gray-200`,
            router.pathname === url ? `border-b-2` : ``,
          ])}
        >
          {label}
        </a>
      </Link>
    </li>
  )
}
export default HeaderMenuItem
