import Header from "@/components/header";
import ChatButton from "./components/chat-button";
import SuccessStories from "./components/success-stories";

const Home = () => (
  <main>
    <div className="h-screen flex flex-col">
      <div className="container">
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
  </main>
);

export default Home;
