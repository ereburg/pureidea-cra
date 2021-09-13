import FooterBottom from "@/components/global/footer/FooterBottom"
import FooterTop from "@/components/global/footer/FooterTop"

export default function Footer(): JSX.Element {
  return (
    <footer className="border-t-2 border-blue-400 text-grey-2">
      <FooterTop />
      <FooterBottom />
    </footer>
  )
}
