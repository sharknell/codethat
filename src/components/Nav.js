import { Link, NavLink } from 'react-router-dom';
import Container from './Container';
import UserMenu from './UserMenu';
import logoImg from '../assets/logoim.jpeg';
import styles from './Nav.module.css';




function getLinkStyle({ isActive }) {
  return {
    textDecoration: isActive ? 'underline' : '',
  };
}
const logosize = {
  width : "105px",
  height :"75 px"
};


function Nav() {
  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        <Link to="/">
          <img src={logoImg}  alt="Codethat Logo" style={logosize} />
        </Link>
        <ul className={styles.menu}>
          <li>
            <NavLink style={getLinkStyle} to="/courses">
              카탈로그
            </NavLink>
          </li>
          <li>
            <NavLink style={getLinkStyle} to="/questions">
              커뮤니티
            </NavLink>
          </li>
          <li>
            <UserMenu />
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Nav;
