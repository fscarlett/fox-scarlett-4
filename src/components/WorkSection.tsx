import clsx from 'clsx'
import WorkCard from './WorkCard'
import styles from '../styles/WorkSection.module.css'
import '../app/globals.css'

function WorkSection() {
  return (
    <section className={clsx(styles['work-section'])}>
      <div className='container'>
        <h2>Work</h2>
        <p>Dynamic cards showcasing my projects will go here.</p>
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </section>
  )
}

export default WorkSection
