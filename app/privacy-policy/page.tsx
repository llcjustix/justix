import { privacyPolicyDatabase } from "@/database/privacy-policy";
import PrivacyPolicyCard from "@/app/privacy-policy/components/card";
import PrivacyPolicyMain from "./components/main";

const PrivacyPolicy = () => (
  <>
    <section className="container">
      <PrivacyPolicyMain />
    </section>
    <section className="container">
      {privacyPolicyDatabase.map((item) => (
        <PrivacyPolicyCard title={item.title} description={item.description} key={item.id} />
      ))}
      <div className="mb-16" />
    </section>
  </>
);

export default PrivacyPolicy;
