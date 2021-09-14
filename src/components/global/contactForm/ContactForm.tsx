import Link from "next/link"
import { ITextSectionProps } from "@/components/global/textSection/ITextSection.interface"

interface IContactsCheckboxes {
  name: string
  id: number
  checked?: boolean
}

export default function ContactForm(props: ITextSectionProps): JSX.Element {
  const checkboxes: IContactsCheckboxes[] = [
    {
      id: 1,
      name: `дизайн`,
    },
    {
      id: 2,
      name: `разработка`,
    },
    {
      id: 3,
      name: `CRM`,
    },
    {
      id: 4,
      name: `мобильное приложение`,
    },
    {
      id: 5,
      name: `адаптивные сайты`,
    },
  ]

  const { rootClass } = props

  return (
    <section className={rootClass}>
      <div className="container pt-15 pb-7.5 rounded-[32px] shadow-base">
        <div className="max-w-[1080px] mx-auto flex flex-wrap justify-between gap-4">
          <div className="flex-[470px] flex-grow-0">
            <h2 className="text-[2.625rem] text-grey leading-tight font-medium">
              Обсудим ваш проект?
            </h2>
            <p className="mt-2.5 text-sm leading-tight text-grey-2 tracking-wide">
              Можете оставить заявку, а мы свяжемся с вами в течение недели. Не
              забудьте указать разделы, которые заинтересовали вас. Так мы
              сможем быстрее и качественнее проконсультировать :)
            </p>
            <h3 className="mt-12.5 font-medium text-2xl text-grey">Разделы</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {checkboxes.map((d) => (
                <label
                  className="inline-flex items-center text-sm group"
                  key={d.id}
                  htmlFor={d.name}
                >
                  <input
                    className="peer sr-only"
                    type="checkbox"
                    value={d.name}
                    id={d.name}
                  />
                  <span className="rounded-[2rem] bg-grey-4 group-focus-within:bg-grey-3 peer-checked:bg-accent-500 text-white py-1.5 px-5">
                    {d.name}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="flex-[410px] flex-grow-0">
            <h3 className="font-medium text-2xl text-grey">
              Контактная информация
            </h3>
            <form className="mt-8 grid gap-4 text-grey-4 text-sm" action="">
              <p>
                <label htmlFor="username">
                  <input
                    id="username"
                    name="username"
                    className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 placeholder-grey-4 text-grey-2 focus:ring-0 focus:border-accent-500"
                    type="text"
                    placeholder="ФИО"
                    required
                  />
                </label>
              </p>
              <p>
                <label htmlFor="phone">
                  <input
                    id="phone"
                    name="phone"
                    className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 placeholder-grey-4 text-grey-2 focus:ring-0 focus:border-accent-500"
                    type="text"
                    inputMode="tel"
                    placeholder="Телефон"
                    required
                  />
                </label>
              </p>
              <p>
                <label htmlFor="website">
                  <input
                    id="website"
                    name="website"
                    className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 placeholder-grey-4 text-grey-2 focus:ring-0 focus:border-accent-500"
                    type="text"
                    inputMode="url"
                    placeholder="Адрес сайта"
                    required
                  />
                </label>
                <span className="block text-xs mt-1">
                  Начнём знакомство с вами как можно раньше
                </span>
              </p>
              <p className="mt-10">
                <label htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 placeholder-grey-4 text-grey-2 focus:ring-0 focus:border-accent-500"
                    placeholder="Опишите, пожалуйста, задачу"
                    rows={2}
                  />
                </label>
              </p>
              <p className="text-right">
                <button
                  className="inline-block px-10 py-2 text-white text-lg font-medium bg-accent-500 rounded-lg hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-opacity-50 focus:ring-offset-1"
                  type="submit"
                >
                  Отправить
                </button>
              </p>
            </form>
          </div>
          <div className="flex justify-between text-grey-4 text-xs font-normal w-full">
            <p>
              <a
                className="hover:text-blue-400"
                href="mailto:hello@pureidea.ru"
              >
                hello@pureidea.ru
              </a>
            </p>
            <p>
              Отправляя, вы соглашаетесь с{` `}
              <Link href="/privacy-policy">
                <a className="underline hover:no-underline">
                  политикой конфиденциальности
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
