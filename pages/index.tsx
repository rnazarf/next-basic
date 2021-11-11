import type { NextPage } from 'next'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <h1 className={styles['title-homepage']}>Welcome Rifki Nazar Firdaus</h1>
    </>
  )
}

export default Home
