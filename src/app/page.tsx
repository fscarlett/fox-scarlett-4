import Image from 'next/image'
import styles from './page.module.css'
import HomeIntro from '@/components/HomeIntro'
import WorkSection from '@/components/WorkSection'
import SkillsSection from '@/components/SkillsSection'
import ExperienceSection from '@/components/ExperienceSection'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <HomeIntro />
        <WorkSection />
        <SkillsSection />
        <ExperienceSection />
      </main>
    </>
  )
}
