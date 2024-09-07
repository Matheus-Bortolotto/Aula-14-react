import { Link } from "react-router-dom";
import styles from './Header.module.css'

const estiloTirulo= {
    color: "red",
    background: "blue"
}

function Header() {
  return (
    <header>
      <h1 style={estiloTirulo}>Meu site</h1>
      <h2 className={styles.titulo}>Subtitulo</h2>
      <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="">Serviços</Link></li>
            <li><Link to="">Contato</Link></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
