import Head from 'next/head'
import Link from 'next/link';
import Footer from '../components/footer';
import Navbar from '../components/navbar'
import { HiArrowRight } from "react-icons/hi";

export default function Home() {
  return (
    <div className="relative min-h-screen">
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

      <main className="">
        {/* Hiring */}
        <section className="px-5 md:px-20 xl:px-56 grid grid-cols-1 md:grid-cols-3 content-center h-96 py-20 bg-lightGray">
          <div className="flex flex-col justify-center gap-8 h-[inherit]">
            <h1 className="text-mainColor text-lg sm:text-3xl md:text-[40px] font-semibold">
              We’re hiring
            </h1>
            <p className="text-grayText md:w-[80%]">
              Learn about our culture and how we’ve grown up to 250+ people.
            </p>
            <Link
              href={""}
              className="text-mainRed font-semibold flex gap-3 items-center"
            >
              <span>Careers</span>
              <HiArrowRight />
            </Link>
            <Link
              href={""}
              className="text-mainRed font-semibold flex gap-3 items-center -mt-3"
            >
              <span>See available positions</span>
              <HiArrowRight />
            </Link>
          </div>
          {/* Highring video */}
          <div className="col-span-2 grid justify-items-center content-center h-[inherit] bg-blue-200"></div>
        </section>
      </main>

      <footer className="absolute bottom-0 w-full bg-mainColor px-5 md:px-20 xl:px-56 pt-14">
        <Footer />
      </footer>
    </div>
  );
}
