import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer';
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Surge</title>
        <meta name="description" content="Surge" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      </Head>

      <nav className="bg-mainColor px-5 md:px-20 xl:px-56 h-16 md:h-20 sticky w-full z-20 top-0 left-0">
        <Navbar />
      </nav>

      <main className="">hello Welcome</main>

      <footer className="bg-mainColor px-5 md:px-20 xl:px-56 py-5 pt-10">
        <Footer />
      </footer>
    </div>
  );
}
