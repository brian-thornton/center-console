import Image from 'next/image'
import styles from './page.module.css'

import Header from './components/header/Header';
import PageBody from './components/page-body/PageBody';
import Footer from './components/footer/Footer';

import logo from "./logo.png";

export default function Home() {
  return (
    <div className={styles.body}> 
      <Header />
      <PageBody />
      <Footer />
    </div>
  )
}
