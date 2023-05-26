import styles from './styles.module.css'
// import banner from '../../assets/banner-img.png'
import logo from '../../assets/portfolio.png'

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
        <img src={logo} alt="banner" />
      </section>
  )
}

export default BannerSection
