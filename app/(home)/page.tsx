import { ChatButton, ChatButton2 } from "./components/chat-button";
import SuccessStories from "./components/success-stories";
import Technologies from "./components/technologies";
import DevelopmentProcess from "./components/development-process";

const Home = () => (
  <main>
    <div className="h-[calc(100vh-70px)] flex flex-col">
      <div className="container flex-1 flex flex-col items-center justify-center">
        <div className="max-w-[650px] relative">
          <h1 className="font-extrabold text-black md:text-6xl leading-none text-[43px] lg:text-6xl xl:text-7xl 2xl:text-8xl lg:tracking-[-4px] tracking-[-2px]">
            We are a Software Development Company
          </h1>
          <p className="my-5 text-2xl leading-7 text-black text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            We are your trusted development partner with just one goal in focus to build products
            that generate a lasting, profitable impact.
          </p>
          <ChatButton />
        </div>
      </div>
    </div>
    <div className="my-20" />
    <section className="container">
      <SuccessStories />
    </section>
    <div className="my-20" />
    <DevelopmentProcess />
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
