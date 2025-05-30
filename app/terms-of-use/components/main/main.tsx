import { Translate } from "@/components/translate";

const TermsOfUseMain = () => (
  <>
    <h1 className="font-bold mt-24 pb-6 text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] xl:!leading-[55px] 2xl:!leading-[65px]">
      <Translate value="Terms of use" />
    </h1>
    <p className="lg:pr-56 text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
      <Translate value="This Terms of Use outlines the user policy of Justix, its services and liabilities involving the use of our services and products. By registering for any of our services, you agree that you have read and accepted all the terms and conditions outlined in this document." />
    </p>
  </>
);

export default TermsOfUseMain;
