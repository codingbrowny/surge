import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { HiArrowRight } from "react-icons/hi";
import {FiPhoneCall} from "react-icons/fi"
import Experts from "../assets/images/experts-group.png"

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
        <section className="flex flex-col items-center justify-center gap-5 h-fit md:h-96 py-20">
          <h1 className="text-mainColor text-lg sm:text-3xl md:text-[46px] font-semibold">
            How can we help?
          </h1>
          <span className="text-mainColor relative py-2 animated text-lg sm:text-3xl md:text-[46px] font-semibold">
            Talk to our experts today.
          </span>
          <div className="experts">
            <Image
              src={Experts}
              alt={"Experts group"}
              height={80}
              width={150}
            />
          </div>
          <span className="text-grayText font-semibold">
            Experts in marketing, analytics, engineering, etc.
          </span>
          <button className="flex items-center gap-4 justify-between p-4 font-semibold text-white my-5 relative top-0 hover:after:bg-gradient-to-r hover:after:from-[#7d8ef7] hover:after:to-mainRed shadow-md z-[1] transition-all duration-200 ease-in-out after:bg-mainRed after:transition-all after:duration-200 after:ease-in-out after:absolute after:-z-[1] after:top-0 after:right-0 after:left-0 after:bottom-0 after:border-none hover:after:scale-[1.05]">
            <FiPhoneCall />
            <span>Schedule a call</span>
            <HiArrowRight />
          </button>
        </section>

        {/* Hiring Section */}
        <section className="relative px-5 md:px-20 xl:px-56 grid grid-cols-1 md:grid-cols-3 content-center h-fit md:h-96 py-20 bg-lightGray">
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

      <footer className="w-full bg-mainColor px-5 md:px-20 xl:px-56 pt-14">
        <Footer />
      </footer>
    </div>
  );
}
