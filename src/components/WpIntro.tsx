import styles from '../styles/HomeIntro.module.css'
import '../app/globals.css'

function WpIntro() {
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
        <h3>WordPress Development, Javascript Web Apps, Headless CMS</h3>
        <h3>Custom WordPress Themes, Plugins, Gutenberg Blocks</h3>
        <p>
          HTML, CSS, JavaScript, TypeScript, React, node.js, Next.js, WordPress,
          Strapi, Sanity, etc etc
        </p>
        <p>nap</p>
        <p>socials</p>
        <p>nav</p>
      </div>
    </section>
  )
}
export default WpIntro
