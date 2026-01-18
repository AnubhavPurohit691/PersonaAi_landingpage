import Bodycontent from './BodyContent/Bodycontent'
import Hero_first_Section from './HeroSectionComponents/HeroSection'
import ImageSection from './HeroSectionComponents/ImageSection'
import TextsAfterHero from './HeroSectionComponents/TextError'

const HeroSection = () => {
  return (
    <div className='flex flex-col gap-20 md:gap-0 '>
      <Hero_first_Section />
      <ImageSection/>
      <TextsAfterHero/>
      <Bodycontent/>
    </div>
  )
}

export default HeroSection
