import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { Marquee } from '@/components/Marquee'
import { HowItWorks } from '@/components/HowItWorks'
import { Differentials } from '@/components/Differentials'
import { NoTeam } from '@/components/NoTeam'
import { Prize } from '@/components/Prize'
import { RankingPlaceholder } from '@/components/RankingPlaceholder'
import { CTAFinal } from '@/components/CTAFinal'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <HowItWorks />
        <Differentials />
        <NoTeam />
        <Prize />
        <RankingPlaceholder />
        <CTAFinal />
      </main>
    </>
  )
}
