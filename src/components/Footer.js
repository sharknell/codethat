import logo from '../assets/grayLogo.svg';
import facebookIcon from '../assets/facebook.svg';
import twitterIcon from '../assets/twitter.svg';
import instagramIcon from '../assets/instagram.svg';
import styles from './Footer.module.css';
import Container from './Container';

function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <ul className={styles.links}>
          <li>코드댓 소개</li>
          <li>개인정보 취급방침</li>
          <li>사용자 이용약관</li>
          <li>자주 묻는 질문</li>
        </ul>
        <ul className={styles.info}>
          <li>REACT CREATE THE WEB</li>
          <li>작성자 | 백승현 </li>
          <li>연락처 | 010 - 2328 - 5750 </li>
          <li>프로그래밍 언어 | REACT.JS</li>
          <li>제작 및 공부 기간 | 2024.03.08 - 2024.03.09 </li>
        </ul>
        <div className={styles.icons}>
          <img src={logo} alt="codethat" />
          <div className={styles.sns}>
            <img src={facebookIcon} alt="facebook icon" />
            <img src={twitterIcon} alt="twitter icon" />
            <img src={instagramIcon} alt="instagram icon" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
