import Banner from '@/components/banner';
import CTA from '@/components/cta';
import Customers from '@/components/customers';
import FAQ from '@/components/faq';
import Features from '@/components/features';
import GooglePoweredFeature from '@/components/googlepoweredfeature';
import Reviews from '@/components/reviews';
import Head from 'next/head';

const HomePage: React.FC = () => {
  return (
    <div className='bg-white'>
      <Head>
        <title>TakvimOS</title>
      </Head>
      <Banner />
      <GooglePoweredFeature />
      <Features />
      <Customers />
      <div>
        <Reviews />
      </div>
      <div
        className=' px-4 py-10 bg-white rounded-lg'>
        <h1 className='text-3xl font-bold tracking-tight text-black   sm:leading-none text-center p-5'>Sıkça Sorulan Sorular</h1>
        <FAQ />
      </div>
      <CTA />
    </div>

  )
}
export default HomePage;