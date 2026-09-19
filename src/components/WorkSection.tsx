import clsx from 'clsx'
import WorkCard from './WorkCard'
import styles from '../styles/WorkSection.module.css'
import '../app/globals.css'
import workData from '../data/work.json'

function WorkSection() {
  return (
    <section className={clsx(styles['work-section'])}>
      <div className='container'>
        <h2>Work</h2>
        <p>These are the works .</p>
        {workData.map((workItem, index) => (
          <WorkCard key={index} workItem={workItem} />
        ))}
      </div>
    </section>
  )
}

export default WorkSection
