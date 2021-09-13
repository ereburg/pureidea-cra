import Footer from "@/components/global/footer/Footer"
import Header from "@/components/global/header/Header"
import ContactForm from "@/components/global/contactForm/ContactForm"
import TextSection from "@/components/global/textSection/TextSection"

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen font-body">
      <Header />
      <main className="flex-auto">
        <h1 className="font-mono text-xl code">Pureidea title</h1>
      </main>
      <TextSection
        title='Разработка <span class="underline underline-accent-500 underline-thickness-thin underline-offset-large">вeб-приложений</span> и сложных систем'
        rootClass="pt-12.5"
      >
        <div className="text-grey-2 text-lg tracking-tight leading-tight">
          <div className="">
            <p>
              Мы занимаемся разработкой программного обеспечения и PWA
              приложений. Найдём решение проблем в кратчайшие сроки и без потери
              качества продукта, поможем вам сэкономить бюджет и драгоценное
              время
            </p>
            <br />
            <p>
              * некоторые услуги доступны только при работах на полноценном
              проекте. Эта оптимизация помогает нам сфокусироваться на контроле,
              улучшении качества и плотном взаимодействии с клиентами
            </p>
          </div>
        </div>
      </TextSection>
      <TextSection
        title='Про технологии, инструменты и нашу <span class="underline underline-accent-500 underline-thickness-thin underline-offset-large">компетенцию</span>'
        rootClass="pt-12.5"
      >
        <div className="text-grey-2 text-lg tracking-tight leading-tight">
          <div className="">
            <p>
              Мы занимаемся разработкой программного обеспечения и PWA
              приложений. Найдём решение проблем в кратчайшие сроки и без потери
              качества продукта, поможем вам сэкономить бюджет и драгоценное
              время
            </p>
            <br />
            <p>
              * некоторые услуги доступны только при работах на полноценном
              проекте. Эта оптимизация помогает нам сфокусироваться на контроле,
              улучшении качества и плотном взаимодействии с клиентами
            </p>
          </div>
        </div>
      </TextSection>
      <TextSection title="PUREIDEA" rootClass="pt-12.5">
        <div className="grid grid-cols-2 gap-24 text-grey-2 text-lg tracking-tight leading-tight">
          <div className="">
            <p>
              Начиная с 2015 года мы работаем в области проектирования и
              разработки программных продуктов и веб приложений. В свете быстро
              меняющихся условий рынка, мы сфокусировались на работе со средними
              и крупными компаниями, которые хотят автоматизировать процессы,
              снизить издержки, внедрить управленческую отчётность, реализовать
              параллельный проект, запустить в компании ERP или CRM.
            </p>
          </div>
          <div className="">
            <p>
              В период пандемии мы выстроили и оптимизировали процессы для
              удалённой работы, не растеряв уровень, качество и точность,
              работая по Agile.
            </p>
            <br />
            <p>
              Кстати, методология пригодилась не только в проектах по разработке
              :)
            </p>
          </div>
        </div>
      </TextSection>
      <ContactForm rootClass="pt-12 pb-15" />
      <Footer />
    </div>
  )
}
