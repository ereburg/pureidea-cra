import { FC } from "react"
import Header from "@/components/global/header/Header"
import Footer from "@/components/global/footer/Footer"
import TextSection from "@/components/global/textSection/TextSection.component"
import PriceProducts from "@/components/price/products/price-products"
import ContactForm from "@/components/global/contactForm/ContactForm"

const Price: FC = () => (
  <div className="flex flex-col min-h-screen font-body">
    <Header type="default" />
    <main className="flex-auto pb-17.5">
      <h1 className="sr-only">PrivacyPolicy</h1>
      <TextSection
        rootClass="my-17.5"
        title={
          <>
            Цены на <span className="underline-text-xl">работы и услуги</span>
          </>
        }
      >
        <div className="text-grey-2 text-lg tracking-tight leading-tight">
          <div className="max-w-[1160px]">
            <p>
              В прайсе раскрыт порядок цен на реализацию «классических задач» —
              таких как дизайн, создание фирменного стиля, разработка PWA и
              мобильных приложений.
            </p>
            <br />
            <p>
              Цены на сложные и комплексные проекты рассчитаем только после
              личной встречи непосредственным с заказчиком, с этим строго :)
            </p>
          </div>
        </div>
      </TextSection>

      <PriceProducts />
    </main>
    <ContactForm rootClass="mt-[30vh] mb-17" />
    <Footer />
  </div>
)

export default Price
