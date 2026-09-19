import styles from '../styles/HomeIntro.module.css'
import '../app/globals.css'

function HomeIntro() {
  return (
    <section className={styles['home-intro-section']}>
      <div className='container'>
        <h1 className={styles['home-intro-title']}>Fox Scarlett</h1>
        <h2>Web Developer</h2>
        <p>
          I am a web developer from California US. I&apos;ve been shipping web
          experiences since 2015. I&apos;m committed to working with design,
          product, and engineering team members to create high quality products.
        </p>
      </div>
    </section>
  )
}
export default HomeIntro
