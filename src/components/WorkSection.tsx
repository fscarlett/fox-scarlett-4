import clsx from 'clsx'

import styles from '../styles/WorkSection.module.css'
import '../app/globals.css'

function WorkSection() {
  return (
    <section className={clsx(styles['work-section'])}>
      <div className='container'>
        <h2>Work</h2>
        <p>Dynamic cards showcasing my projects will go here.</p>
      </div>
    </section>
  )
}

export default WorkSection
