import LandingContent from '@/components/LandingContent'
import LandingHero from '@/components/LandingHero'
import { LandingNavbar } from '@/components/LandingNavbar'
import { Footer } from './_components/footer'

export default function LandingPage() {
  return (
    <div className='h-full'>
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
      <Footer/>
    </div>
  )
}
