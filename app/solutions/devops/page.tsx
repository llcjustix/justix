import { SolutionsAbout } from "../components/about";
import { SolutionsBody } from "../components/body";

const DevOps = () => (
  <>
    <section className="container">
      <SolutionsAbout
        mainTitle={`${process.env.NEXT_PUBLIC_WEBSITE_NAME} DevOps`}
        title=" Scalable & Secure Infrastructure"
        imagePath="/img/solutions/justix-ai.jpg"
      />
    </section>
    <section className="container">
      <SolutionsBody
        text1={`At ${process.env.NEXT_PUBLIC_WEBSITE_NAME} DevOps, we provide end-to-end automation and infrastructure management solutions, helping businesses accelerate deployment, minimize risks, and enhance service reliability.`}
        text2="We build robust, scalable, and secure DevOps platforms to keep your business running smoothly."
        text3={`🚀 Optimize your infrastructure with ${process.env.NEXT_PUBLIC_WEBSITE_NAME} DevOps.`}
        listTitle="Our Expertise"
        list={[
          {
            id: 1,
            text: "CI/CD – Setting up and optimizing delivery pipelines for faster development.",
          },
          {
            id: 2,
            text: "Cloud & On-Prem – Managing cloud and on-premise infrastructure, migration, and scaling.",
          },
          {
            id: 3,
            text: "Kubernetes & Containerization – Deployment, orchestration, and support for containerized applications.",
          },
          {
            id: 4,
            text: "Observability & Monitoring – Logging, alerting, and real-time monitoring for system stability.",
          },
          {
            id: 5,
            text: "Security & Compliance – Infrastructure security, secret management, and regulatory compliance.",
          },
        ]}
      />
    </section>
  </>
);

export default DevOps;
