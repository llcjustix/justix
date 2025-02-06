import Header from "@/components/header";
import { ChatButton, ChatButton2 } from "./components/chat-button";
import SuccessStories from "./components/success-stories";
import Technologies from "./components/technologies";

const Home = () => (
  <main>
    <div className="h-screen flex flex-col">
      <div className="fixed inset-0 h-fit z-[1]">
        <Header />
      </div>
      <div className="container flex-1 flex flex-col items-center justify-center">
        <div className="max-w-[650px] relative">
          <h1 className="font-extrabold text-[60px] leading-[60px]">
            We are a Software Development Company
          </h1>
          <p className="mt-5 text-2xl leading-7">
            We are your trusted development partner with just one goal in focus to build products
            that generate a lasting, profitable impact.
          </p>
          <ChatButton />
        </div>
      </div>
    </div>
    <div className="my-10" />
    <section className="container">
      <SuccessStories />
    </section>
    {/* <section className="container">
      <div className="max-w-3xl xl:max-w-4xl pb-8 pt-14 md:pt-24 lg:pt-[10.5rem]">
        <h2 className="font-bold pb-1 md:pb-0 sentence-first-letter sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
          Our journey of building success
        </h2>
        <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
          We are a full-cycle product development company that combines creative thinking with
          technical expertise to create user-centric products that solve real problems and drive
          business growth.
        </p>
      </div>
    </section> */}
    <section className="container">
      <Technologies />
    </section>
    <div className="my-20" />
    <section className="container">
      <ChatButton2 />
    </section>
    <div className="my-20" />
  </main>
);

export default Home;
