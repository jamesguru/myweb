import Head from 'next/head'
import Image from 'next/image'


import Slider from '../components/Slider';
import Products from '../components/Products';
import Process from '../components/Process';
import PortFolio from '../components/PortFolio';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div >
      <Head>
        <title>Pizza Restaurant in Nairobi</title>
        <meta name="description" content="Best Pizza selling restaurant" />
        <link rel="icon" href="/img/cart.png" />
      </Head>
      <Slider />

      <Products />

      <Process />

      <PortFolio />

      <Newsletter />

     
      
      
     </div>
  )
}
