import Header from "@/components/header";
import ArrowRightUpLineIcon from "remixicon-react/ArrowRightUpLineIcon";
import ClientsSlider from "@/components/clients-slider/clients-slider";

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
          <button
            type="button"
            className="w-[176px] h-[176px] rounded-full flex items-center justify-center flex-col gap-2 text-xl bg-gray-dark hover:bg-black shadow-2xl shadow-gray-dark hover:shadow-black transition ease-in-out duration-150 text-white
          p-2 absolute -bottom-36 -right-36"
          >
            <ArrowRightUpLineIcon size={36} />
            Let's Discuss Your Idea
          </button>
        </div>
      </div>
      <ClientsSlider />
    </div>
  </main>
);

export default Home;
