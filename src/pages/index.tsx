export default function Home() {
	return (
		<div className="container flex items-center p-4 mx-auto min-h-screen justify-center">
			<main>
				<h1 className="font-mono text-xl code">
					Welcome to{" "}
					<span className="text-purple-700 hover:text-blue-400">Nextjs</span>,
					<span className="text-indigo-700 hover:text-blue-400">
						TailwindCSS
					</span>{" "}
					and{" "}
					<span className="text-blue-700 hover:text-red-400">TypeScript</span>
				</h1>
			</main>
		</div>
	)
}
