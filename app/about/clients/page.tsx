import ClientsList from "@/app/about/clients/components/clients-list";
import ClientsHeader from "./components/clients-header";

const Clients = () => (
  <>
    <section className="container">
      <ClientsHeader />
    </section>
    <section className="container">
      <ClientsList />
    </section>
  </>
);

export default Clients;
