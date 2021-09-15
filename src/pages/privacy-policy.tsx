import Header from "@/components/global/header/Header"
import Footer from "@/components/global/footer/Footer"

export default function PrivacyPolicy(): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen font-body">
      <Header type="default" />
      <main className="flex-auto">
        <h1 className="font-mono text-xl code">PrivacyPolicy</h1>
      </main>
      <Footer />
    </div>
  )
}
