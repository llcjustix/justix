import { Translate } from "@/components/translate";

const PrivacyPolicyMain = () => (
  <>
    <h1 className="font-bold mt-24 pb-6 text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] xl:!leading-[55px] 2xl:!leading-[65px]">
      <Translate value="Privacy Policy" />
    </h1>
    <p className="lg:pr-56 text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
      <Translate value="This Privacy Policy has been prepared by Justix regarding Personal data collected on or through our website (“Site”). All capitalized terms shall have the meaning defined herein." />
    </p>
  </>
);

export default PrivacyPolicyMain;
