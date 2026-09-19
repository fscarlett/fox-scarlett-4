import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/WorkCard.module.css'
import '../app/globals.css'

function WorkCard({ workItem }) {
  return (
    <div className={styles['work-card']}>
      <div className={styles['content-wrapper']}>
        <h3>{workItem.title}</h3>
        <p>{workItem.summary}</p>
        <p>{workItem.caseStudy}</p>
        <Link
          href={workItem.liveLink}
          target='_blank'
          rel='noopener noreferrer'
        >
          Live Link
        </Link>
      </div>
      <Image
        src={workItem.image}
        alt={workItem.title}
        width={600}
        height={400}
      />
    </div>
  )
}

export default WorkCard
