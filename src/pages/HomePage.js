import Button from '../components/Button';
import Container from '../components/Container';
import Lined from '../components/Lined';
import styles from './HomePage.module.css';
import landingImg from '../assets/landing.svg';

function HomePage() {
  return (
    <>
      <div className={styles.bg} />
      <Container className={styles.container}>
        <div className={styles.texts}>
          <h1 className={styles.heading}>
            <Lined>React</Lined>
            <br />
            <strong>백승현</strong>
          </h1>
            <br />
          <p className={styles.description}>
              The Library For Web And Native User Interfaces
            <hr />

            Learned Codeit Platform for REACT,PUBLISHING STUDY
          </p>
          <div>
            <Button>SHOW WEB</Button>
          </div>
        </div>
        <div className={styles.figure}>
          <img src={landingImg} alt="그래프, 모니터, 윈도우, 자물쇠, 키보드" />
        </div>
      </Container>
    </>
  );
}

export default HomePage;
