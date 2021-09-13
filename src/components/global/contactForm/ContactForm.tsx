import Link from "next/link"

export default function ContactForm(): JSX.Element {
  return (
    <section className="pt-12 pb-15">
      <div className="container pt-15 pb-7.5 rounded-[32px] shadow-contacts">
        <div className="max-w-[1080px] mx-auto flex flex-wrap justify-between gap-4">
          <div className="flex-[470px] flex-grow-0">
            <h2>Обсудим ваш проект?</h2>
            <p>
              Можете оставить заявку, а мы свяжемся с вами в течение недели. Не
              забудьте указать разделы, которые заинтересовали вас. Так мы
              сможем быстрее и качественнее проконсультировать :)
            </p>
            <h3>Разделы</h3>
          </div>
          <div className="flex-[410px] flex-grow-0">
            <h3>Контактная информация</h3>
            <form action="">rr</form>
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
