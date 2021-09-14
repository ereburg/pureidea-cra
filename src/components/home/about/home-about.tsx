import { FC } from "react"
import Image from "next/image"
import Lang from "@/images/home/home-about.png"

export const HomeAbout: FC = () => (
  <section className="flex gap-28 border-grey-5 border bg-[#FCFCFC] p-16 pr-3.5 shadow-base rounded-4xl">
    <div className="static flex-[700px]">
      <h2>
        <b className="underline-text-xl">Frontend</b> stack
      </h2>
      <div className="static__wrapper">
        <h3>Лучшая практика фронтэнда</h3>
        <p>
          Для решения большинства задач мы используем{` `}
          <strong className="text-lang-react">ReactJS</strong> или{` `}
          <strong className="text-lang-next">NextJS</strong> в связке со
          статическим типизатором{` `}
          <strong className="text-lang-ts">TypeScript</strong> и компилятором
          {` `}
          <strong className="text-lang-svelte">Svelte</strong>. Эти инструменты
          позволяют созавать отзывчивые и легко поддерживаемые продукты
        </p>
        <h3>Крупным компаниям и корпорациям</h3>
        <p>
          Большим корпоративным заказчикам часто необходим детальный подход к
          архитектуре, процессам и компонентам. Для таких задач наша команда
          использует <strong className="text-lang-ng">AngularJS</strong> в
          связке с{` `}
          <strong className="text-lang-next">JavaScript</strong> и{` `}
          <strong className="text-lang-ts">TypeScript</strong>
        </p>
        <h3>Для лэндингов и промо сайтов</h3>
        <p>
          Новый и прогрессивный <strong className="text-lang-vue">VueJS</strong>
          {` `}
          фреймворк. На нём наша команда сможет быстро сделать яркий и
          привлекательный промо сайт для компании
        </p>
        <h3>Для массмаркета и лоукост проектов</h3>
        <p>
          <strong className="text-lang-next">Bitrix</strong> фреймворк, с
          которым мы тоже справимся. Но это будет дороже полноценного решения :)
        </p>
      </div>
      <h2>
        <b className="underline-text-xl">Backend</b> stack
      </h2>
      <div className="static__wrapper">
        <h3>Backend best practice!</h3>
        <p>
          <strong className="text-lang-go">GoLang</strong> — это строгая
          типизация, многопоточность и запас ресурса, которого хватит на
          нестандартные и смелые решения. А требования к серверу будут
          минимальными
        </p>
        <h3>Второй эшелон инструментов</h3>
        <p>
          <strong className="text-lang-py">Python</strong>,{` `}
          <strong className="text-lang-node">NodeJS</strong> решения. Медленнее
          чем{` `}
          <strong className="text-lang-go">GoLang</strong>, тяжелее переживают
          нагрузки, но проще и дешевле физическом исполнении. Такой выбор
          позволит сэкономить деньги компании не проиграв в качестве
        </p>
        <h3>Распределённые системы — выбор для «взрослых»</h3>
        <p>
          Для тех, кому важно масштабирование без ограничений, скорость работы и
          отказоустойчивость —&nbsp;микросервисная архитектура. Контейнеры
          соберём в<strong className="text-lang-docker">Docker</strong>, а
          оркестрацию настроим в{` `}
          <strong className="text-lang-docker">Docker Swarm + Ansible</strong>
          {` `}
          или в <strong className="text-lang-kub">Kubernetes</strong>, в
          зависимости от требований{` `}
        </p>
        <h3>Монолитные системы </h3>
        <p>
          Программируем их на <strong className="text-lang-go">GoLang</strong>.
          А используем для небольших проектов, которые не предусматривают
          постоянное расширения функционала и логики
        </p>
        <h3>Системы мониторинга</h3>
        <p>
          Чтобы оперативно реагировать на инциденты, наша команда настроит
          персональный интерфейс{` `}
          <strong className="text-lang-grafana">Grafana</strong> и поможет
          наладить отправку отчётов о сбоях в мессенджер
        </p>
        <h3>Базы данных </h3>
        <p>
          Чаще это <strong className="text-lang-db">PostgreSQL</strong>,{` `}
          <strong className="text-lang-db">MySQL</strong>,{` `}
          <strong className="text-lang-mongo">MongoDB</strong>. Для кэширования
          используем <strong className="text-lang-go">Redis</strong> или
          используем собственное решение на{` `}
          <strong className="text-lang-go">GoLang</strong>
        </p>
      </div>
    </div>
    <div className="flex-[410px]">
      <Image src={Lang} />
    </div>
  </section>
)
