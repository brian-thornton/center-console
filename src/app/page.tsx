import Image from 'next/image'
import styles from './page.module.css'

import Header from './components/header/Header';
import PageBody from './components/page-body/PageBody';
import Footer from './components/footer/Footer';

export default function Home() {
  return (
    <div style={{backgroundColor: 'white'}}>
      <Header />
      <PageBody />
      <Footer />
    </div>
  )
}
