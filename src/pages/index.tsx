import Footer from "@/components/global/footer/Footer"
import Header from "@/components/global/header/Header"

export default function Home(): JSX.Element {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex-auto">
				<h1 className="font-mono text-xl code">Pureidea title</h1>
			</main>
			<Footer />
		</div>
	)
}
