import styles from './styles.module.css'

function BannerSection( { children } ) {
  return (
      <section className={styles.banner}>
        <div>
          <span className={styles.name}>JOSEDASILVA</span>
          <h1>Bem vindo ao meu portfólio</h1>
          <span>Uma frase interessante sobre mim</span>
          <div>
            {children}
          </div>
        </div>
        <img src=".././src/assets/banner-img.png" alt="logo" />
      </section>
  )
}

export default BannerSection
