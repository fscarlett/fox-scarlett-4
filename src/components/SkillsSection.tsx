import styles from '../styles/SkillsSection.module.css'
import '../app/globals.css'

function SkillsSection() {
  return (
    <section className={styles['skills-section']}>
      <div className='container'>
        <h2>Skills</h2>
        <p>Here iz skills.</p>
      </div>
    </section>
  )
}

export default SkillsSection
