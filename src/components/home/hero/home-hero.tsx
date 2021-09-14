import { FC } from "react"
import { HomeHeroBG } from "@/components/home/hero/home-hero-bg"

export const HomeHero: FC = () => (
  <div className="relative h-screen">
    <HomeHeroBG className="absolute inset-0 -z-1" />
    <div className="flex-auto flex items-center justify-center h-full">
      {/* <h1 className="text-5xl font-bold text-white">pureidea</h1> */}
    </div>
  </div>
)
