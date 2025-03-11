import { termsOfUseDatabase } from "@/database/terms-of-use";
import TermsOfUseMain from "./components/main";
import TermsOfUseCard from "./components/card";

const TermsOfUse = () => (
  <>
    <section className="container">
      <TermsOfUseMain />
    </section>
    <section className="container">
      {termsOfUseDatabase.map((item) => (
        <TermsOfUseCard title={item.title} description={item.description} key={item.id} />
      ))}
      <div className="mb-16" />
    </section>
  </>
);

export default TermsOfUse;
