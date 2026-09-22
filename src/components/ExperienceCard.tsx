import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/ExperienceCard.module.css'
import '../app/globals.css'

function ExperienceCard({ ExpItem }) {
  return (
    <div className={styles['experience-card']}>
      <div className={styles['content-wrapper']}>
        <h3>{ExpItem.title}</h3>
        <p>{ExpItem.dates}</p>
        <p>{ExpItem.body}</p>
      </div>
    </div>
  )
}

export default ExperienceCard
