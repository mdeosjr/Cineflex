import { Link } from 'react-router-dom';
import './style.css';

function Header() {
  return (
    <header className="header">
      <Link to={`/`}>
        <h1>CINEFLEX</h1>
      </Link>
    </header>
  )
}

export default Header;