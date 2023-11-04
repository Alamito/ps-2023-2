import styles from '../src/styles/footer.module.css'

const Header = () => (
    <div className={styles['container-footer']}>
        <div className={styles['footer-icons']}>
            <a href="https://www.pokemon.com/" target="_blank"><img src="/img/pokemon-logo.png" /></a>
            <a href="https://www.instagram.com/" target="_blank"><img src="/img/instagram-logo.png" /></a>
            <a href="https://www.linkedin.com/" target="_blank"><img src="/img/linkedin-logo.png" /></a>
            <a href="https://www.idejr.com.br/" target="_blank"><img src="/img/ide-logo.png" /></a>
        </div>
        <p>株式会社ポケモン (The Pokémon Company) © x IDE © Todos os direitos reservados.</p>
        <p>
            <a href="#">Termos de Uso</a>
            <span> | </span>
            <a href="#">Política de Privacidade</a>
            <span> | </span>
            <a href="#">Política de Cookies</a>
        </p>
        <div className={styles['footer-ide-logo']}>
            <img src="/img/logo-pixelado-branco.png" />
        </div>
    </div>
);

export default Header;
