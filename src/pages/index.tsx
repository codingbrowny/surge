import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Slider from "../components/slider";
import { FiPhoneCall } from "react-icons/fi";
import { HiArrowRight } from "react-icons/hi";
import ProductCard from "../components/product-card";
import Experts from "../assets/images/experts-group.png";
import MeshBackground from "../assets/images/hero.svg"
import { CompaniesData, ExpertServiceData, ServiceData } from "../assets/data/data";

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
      <div className="info text-center underline text-lightGray p-2">
        <Link href={""}>We&apos;re hiring now - Learn about our culture</Link>
      </div>
      <nav className="bg-mainColor px-5 md:px-20 xl:px-56 h-16 md:h-20 sticky w-full z-20 top-0 left-0">
        <Navbar />
      </nav>

      <main className="relative">
        {/* Hero Section */}
        <section className="relative bg-mainColor h-full max-h-full sm:h-auto">
          <Image
            src={MeshBackground}
            alt="Mesh Background"
            className="animated absolute bottom-0 h-full w-full object-center object-cover overflow-visible z-0 brightness-50"
          />
          <div className="relative sm:px-5 md:px-20 xl:px-56 w-full h-full z-10 flex flex-col justify-between gap-10 md:gap-14 lg:gap-20">
            <div className="md:w-[80%] lg:w-[65%] mx-auto text-center py-10">
              <h1 className="text-lightGray text-4xl lg:text-7xl font-semibold text-center md:leading-loose">
                Your Product Engineering + Growth Marketing
              </h1>
              <h1 className="animated text-4xl lg:text-7xl font-semibold text-center">
                Powerhouse
              </h1>
              <p className="text-lightGray w-[90%] sm:w-[80%] lg:w-[70%] mx-auto md:font-semibold text-center md:text-lg mt-4 sm:mt-6 md:mt-10 lg:mt-16">
                Surge provides everything from expert advice to dedicated
                staffing, taking your business from idea to implementation.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-full">
              <span className="uppercase text-lightPurple py-3">
                Experts in
              </span>
              <div className="images flex justify-between gap-5 pb-2 md:mb-0 w-full overflow-hidden overflow-x-auto overscroll-none">
                {ExpertServiceData.map((item, index) => (
                  <Image
                    key={index}
                    src={item.img}
                    alt={item.name}
                    width={100}
                    height={100}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative sm:px-5 md:px-20 xl:px-56 md:py-10 lg:py-14">
          <div className="mt-6 sm:w-[80%] lg:w-[60%] mx-auto text-center px-5 sm:px-10 md:px-0">
            <h1 className="text-2xl md:text-4xl font-semibold text-mainColor leading-8">
              Great teams are built on product + market expertise, we’ve got
              both
            </h1>
            <p className="text-grayText mt-6">
              Over 250 consultants with expertise ranging from Hemp to SaaS,
              from Boston to Dubai.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="px-3 sm:px-5 md:px-20 xl:px-56 grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
          {ServiceData.map((item, index) => (
            <ProductCard key={index} data={item} />
          ))}
        </section>

        {/* Achivement and Testimony */}
        <section className="relative sm:px-5 md:px-20 xl:px-56 md:py-10 lg:py-16">
          <div className="text-center my-4 sm:my-6 md:mt-10 md:mb-5">
            <h2 className="text-lg sm:text-2xl md:text-4xl font-semibold text-mainColor">
              Don’t take our word for it
            </h2>
            <p className="text-grayText mt-6 md:w-[80%] lg:w-[60%] mx-auto">
              We work with the best in the business with 100+ marketers,
              developers, and strategists helping achieve client goals.
            </p>
            <div className="companies-logo flex items-center justify-center gap-x-14 my-3 mb-10 md:mb-0 md:mt-14 overflow-hidden overflow-x-auto overscroll-none">
              {CompaniesData.map((item, index) => (
                <Link key={index} href={"#"}>
                  <Image
                    src={item.img}
                    alt={item.name}
                    className="relative transition-all duration-100 grayscale hover:grayscale-0 h-full w-full"
                  />
                </Link>
              ))}
            </div>
          </div>
          <Slider />
        </section>

        <section className="flex flex-col items-center justify-center gap-5 h-fit md:h-96 py-20">
          <h1 className="text-mainColor -mb-5 md:mb-0 text-3xl md:text-[46px] font-semibold">
            How can we help?
          </h1>
          <span className="text-mainColor relative text-center px-3 py-2 animated text-3xl md:text-[46px] font-semibold">
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
          <span className="text-grayText font-semibold text-center px-5">
            Experts in marketing, analytics, engineering, etc.
          </span>
          <button className="flex items-center gap-4 justify-between p-4 font-semibold text-white my-5 relative top-0 hover:after:bg-gradient-to-r hover:after:from-[#7d8ef7] hover:after:to-mainRed shadow-md z-[1] transition-all duration-200 ease-in-out after:bg-mainRed after:transition-all after:duration-200 after:ease-in-out after:absolute after:-z-[1] after:top-0 after:right-0 after:left-0 after:bottom-0 after:border-none hover:after:scale-[1.05]">
            <FiPhoneCall />
            <span>Schedule a call</span>
            <HiArrowRight />
          </button>
        </section>

        {/* Hiring Section */}
        <section className="relative px-5 md:px-20 xl:px-56 md:h-96 pb-20 py-20 grid grid-cols-1 md:grid-cols-3 content-center bg-lightGray">
          <div className="flex flex-col justify-center gap-4 sm:gap-8 h-full">
            <h1 className="text-mainColor text-3xl md:text-[40px] font-semibold">
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
          <div className="relative col-span-2 flex flex-col justify-center items-center mt-4 md:mt-0">
            <div className="relative md:h-4/5 lg:h-3/5">
              <video
                loop
                className="relative max-h-full h-full md:h-full w-full"
                autoPlay={true}
              >
                <source src="/videos/surge-hiring.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-mainColor px-5 md:px-20 xl:px-56 pt-14">
        <Footer />
      </footer>
    </div>
  );
}
