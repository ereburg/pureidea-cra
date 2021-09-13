import Logo from "@/components/global/logo/Logo"

interface IFooterSection {
  id: number
  name: string
  items?: IFooterSection[]
  bold?: boolean
  url?: string
}

const data: IFooterSection[] = [
  {
    id: 1,
    name: `Разработка`,
    items: [
      {
        id: 1,
        name: `Frontend и Backend разработка`,
      },
      {
        id: 2,
        name: `Мобильные приложения`,
      },
      {
        id: 3,
        name: `Нативная разработка | iOS и Android`,
      },
      {
        id: 4,
        name: `Кроссплатформенная | Flutter`,
      },
      {
        id: 5,
        name: `Адаптивные сайты`,
      },
      {
        id: 6,
        name: `Веб-сервисы, SaaS`,
      },
      {
        id: 7,
        name: `Дашборды, личные кабинеты, интранет`,
      },
      {
        id: 8,
        name: `Разработка API`,
      },
      {
        id: 9,
        name: `DevOps `,
      },
    ],
  },
  {
    id: 2,
    name: `Автоматизация`,
    items: [
      {
        id: 1,
        name: `ERP, E-Commerce`,
      },
      {
        id: 2,
        name: `HRIS и ATS`,
      },
      {
        id: 3,
        name: `Стартапы, начало пути`,
      },
      {
        id: 4,
        name: `CRM (Строительный сектор)`,
        bold: true,
      },
    ],
  },
  {
    id: 3,
    name: `Дизайн`,
    items: [
      {
        id: 1,
        name: `UX/UI дизайн, web-дизайн`,
      },
      {
        id: 2,
        name: `Проектирование интерфейсов
`,
      },
      {
        id: 3,
        name: `Концептуальный дизайн
`,
      },
      {
        id: 4,
        name: `Дизайн мобильных приложений`,
      },
      {
        id: 5,
        name: `3D модделинг`,
      },
      {
        id: 6,
        name: `3D визуализация и анимация`,
      },
      {
        id: 7,
        name: `Графический дизайн`,
      },
      {
        id: 8,
        name: `Дизайн-системы`,
      },
      {
        id: 9,
        name: `Редизайн услуги`,
      },
    ],
  },
  {
    id: 4,
    name: `Аналитика и консалтинг`,
    items: [
      {
        id: 1,
        name: `Подготовка бизнес-процессов `,
      },
      {
        id: 2,
        name: `Аудит текущего решения`,
      },
      {
        id: 3,
        name: `Подготовка технического задания`,
      },
      {
        id: 4,
        name: `Исследование аудитории, CustDev`,
      },
    ],
  },
  {
    id: 5,
    name: `IT инфрастура`,
    items: [
      {
        id: 1,
        name: `Поддержка инфраструктуры`,
      },
      {
        id: 2,
        name: `Аудит инфраструктуры`,
      },
      {
        id: 3,
        name: `Регламентированная поддержка, SLA`,
      },
      {
        id: 4,
        name: `Подготовка инфраструктуры к высоким нагрузкам, нагрузочное тестирование`,
      },
      {
        id: 5,
        name: `Инфраструктура на NIX-системах`,
      },
      {
        id: 6,
        name: `Внедрение Microsoft Exchange Server`,
      },
      {
        id: 7,
        name: `Виртуализация`,
      },
      {
        id: 8,
        name: `IP-Телефония`,
      },
      {
        id: 9,
        name: `Системы видеонаблюдения`,
      },
      {
        id: 10,
        name: `Поставка оборудования`,
      },
      {
        id: 11,
        name: `Системы “Умный дом”`,
      },
    ],
  },
]

export default function FooterTop(): JSX.Element {
  return (
    <div className="container py-14 flex gap-36 items-start">
      <Logo />
      <div className="grid grid-cols-footer gap-8">
        <div className="col">
          <div>
            <h2 className="text-grey text-lg font-bold">Разработка</h2>
            <ul className="mt-5 font-light text-sm grid gap-5 leading-none">
              {data[0].items.map((dn) => (
                <li key={dn.id}>{dn.name}</li>
              ))}
            </ul>
          </div>
          <div className="mt-7">
            <h2 className="text-grey text-lg font-bold">Автоматизация</h2>
            <ul className="mt-5 font-light text-sm grid gap-5 leading-none">
              {data[1].items.map((dn) => (
                <li key={dn.id}>{dn.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col">
          <div>
            <h2 className="text-grey text-lg font-bold">Дизайн</h2>
            <ul className="mt-5 font-light text-sm grid gap-5 leading-none">
              {data[2].items.map((dn) => (
                <li key={dn.id}>{dn.name}</li>
              ))}
            </ul>
          </div>
          <div className="mt-7">
            <h2 className="text-grey text-lg font-bold">
              Аналитика и консалтинг
            </h2>
            <ul className="mt-5 font-light text-sm grid gap-5 leading-none">
              {data[3].items.map((dn) => (
                <li key={dn.id}>{dn.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col">
          <div>
            <h2 className="text-grey text-lg font-bold">IT инфрастура</h2>
            <ul className="mt-5 font-light text-sm grid gap-5 leading-none">
              {data[4].items.map((dn) => (
                <li key={dn.id}>{dn.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
