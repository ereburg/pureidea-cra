import { FC } from "react"
import cc from "classcat"
import Logo from "@/components/global/logo/Logo"
import { DefaultProps } from "@/components/home/cta/cta-card.d"
import HeaderMenuItem from "@/components/global/header/header-menu-item"

type HeaderTypes = "transparent" | "default"

interface HeaderProps extends DefaultProps {
  type: HeaderTypes
}

const HeaderMenu: FC<HeaderProps> = ({ className }) => (
  <ul className={cc([`flex gap-7.5 items-center`, className])}>
    <HeaderMenuItem url="/" label="Главная" />
    <HeaderMenuItem url="/services" label="Услуги" />
    <HeaderMenuItem url="/vacancies" label="Вакансии" />
    <HeaderMenuItem url="/contacts" label="Контакты" />
    <HeaderMenuItem url="/price" label="Прайс" />
  </ul>
)
export default HeaderMenu
