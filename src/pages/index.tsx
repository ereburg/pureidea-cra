import Footer from "@/components/global/footer/Footer"
import Header from "@/components/global/header/Header"
import ContactForm from "@/components/global/contactForm/ContactForm"
import TextSection from "@/components/global/textSection/TextSection.component"
import { TileCard } from "@/components/global/tile-card/tile-card"

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen font-body">
      <Header />
      <main className="flex-auto">
        <h1 className="font-mono text-xl code">Pureidea title</h1>
        <TextSection
          title='Разработка <span class="underline-text-xl">вeб-приложений</span> и сложных систем'
          rootClass="pt-17.5"
        >
          <div className="text-grey-2 text-lg tracking-tight leading-tight">
            <div className="max-w-[1160px]">
              <p>
                Наша команда поможет внятно составить ТЗ, спроектировать и
                разработать продукт, вэб платформу или мобильное приложение,
                интранет портал компании или что угодно другое.
              </p>
              <br />
              <p>
                Проект делится на этапы, далее фиксируем конкретные результаты
                на каждом из них, что позволит минимизировать риски и произвести
                точную оценку трудозатрат, притом с обоих сторон. Оплаты тоже
                будут идти согласно плана проекта, тем самым добавим
                прозрачности в проектную работу. В конце каждого этапа вы
                получите конкретный результат.
              </p>
            </div>
          </div>
        </TextSection>
        <ul className="grid grid-cols-3 gap-6 container mt-24">
          <li>
            <TileCard title="Проект под ключ" type="white">
              <p>
                Поймём проблематику, распишем задачи, подготовим техническое
                задание, соберём прототип, создадим дизайн, разработаем MVP,
                отшлифуем, наполним и запустим
              </p>
            </TileCard>
          </li>
          <li>
            <TileCard title="Разработка" type="gradient">
              <p>
                Сложность зависит от задач стоящих перед бизнесом,
                инфраструктурой клиента и требуемой расчётной нагрузки, которая
                ляжет на конечный продукт
              </p>
            </TileCard>
          </li>
          <li>
            <TileCard title="Автоматизация" type="white-gradient">
              <p>
                Автоматизируем бизнес процессы, комплексные и сложные
                программно-аппаратные комплексы, создадим REST API
              </p>
            </TileCard>
          </li>
          <li>
            <TileCard title="Дизайн" type="accent" />
          </li>
          <li>
            <TileCard title="Аналитика" type="white">
              <p>
                Выслушаем, найдём проблемные места и улучшим бизнес процессы.
                Переведём все пожелания бизнеса в техническое задание, учтём
                ограничения ПО, производительности и бизнес ресурсов
              </p>
            </TileCard>
          </li>
          <li>
            <TileCard title="Поддержка" type="white">
              <p>
                Гарантийная поддержка разработанного нашей командой ПО. Обслужим
                и модернизируем ИТ-инфраструктуры, поможем найти проблемные
                места
              </p>
            </TileCard>
          </li>
        </ul>
        <TextSection
          title='Про технологии, инструменты и нашу <span class="underline-text-xl">компетенцию</span>'
          rootClass="pt-19"
        >
          <div className="text-grey-2 text-lg tracking-tight leading-tight">
            <div className="max-w-[1160px]">
              <p>
                Мы занимаемся разработкой программного обеспечения и PWA
                приложений. Найдём решение проблем в кратчайшие сроки и без
                потери качества продукта, поможем вам сэкономить бюджет и
                драгоценное время
              </p>
              <br />
              <p>
                * некоторые услуги доступны только при работах на полноценном
                проекте. Эта оптимизация помогает нам сфокусироваться на
                контроле, улучшении качества и плотном взаимодействии с
                клиентами
              </p>
            </div>
          </div>
        </TextSection>
        <TextSection
          title='<span class="underline-text-xl">PUREIDEA</span>'
          rootClass="pt-12.5"
        >
          <div className="max-w-[1240px] grid grid-cols-2 gap-24 text-grey-2 text-lg tracking-tight leading-tight">
            <div className="">
              <p>
                Начиная с 2015 года мы работаем в области проектирования и
                разработки программных продуктов и веб приложений. В свете
                быстро меняющихся условий рынка, мы сфокусировались на работе со
                средними и крупными компаниями, которые хотят автоматизировать
                процессы, снизить издержки, внедрить управленческую отчётность,
                реализовать параллельный проект, запустить в компании ERP или
                CRM.
              </p>
            </div>
            <div className="">
              <p>
                В период пандемии мы выстроили и оптимизировали процессы для
                удалённой работы, не растеряв уровень, качество и точность,
                работая по&nbsp;Agile.
              </p>
              <br />
              <p>
                Кстати, методология пригодилась не только в проектах по
                разработке :)
              </p>
            </div>
          </div>
        </TextSection>
      </main>
      <ContactForm rootClass="pt-12 pb-15" />
      <Footer />
    </div>
  )
}
