import ExperienceCard from './ExperienceCard'
import experienceData from '../data/experience.json'

import styles from '../styles/ExperienceSection.module.css'
import '../app/globals.css'

function ExperienceSection() {
  return (
    <section className={styles['experience-section']}>
      <div className='container'>
        <h2>Experience</h2>
        {experienceData.map((item, index) => (
          <ExperienceCard key={index} ExpItem={item} />
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
