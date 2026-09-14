import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <section>
            <h1>Fox Scarlett</h1>
            <h2>Web Developer</h2>
            <p>
              I am a web developer from California US. I&apos;ve been shipping
              web experiences since 2015. I&apos;m committed to working with
              design, product, and engineering team members to create high
              quality products.
            </p>
          </section>
          <section>work (dynamic cards)</section>
          <section>skills (more interesting layout)</section>
          <section>experience (timeline cards)</section>
          <Image
            className={styles.logo}
            src='/next.svg'
            alt='Next.js logo'
            width={100}
            height={20}
            priority
          />
        </div>
      </main>
    </>
  )
}
