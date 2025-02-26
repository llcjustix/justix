import ServicesHeader from "@/components/services-header";
import { productManagementService } from "@/database/services";
import SolutionsComponent from "@/components/solutions";
import ApproachComponent from "@/components/approach";
import FAQComponent from "@/components/faq";
import Image from "next/image";

const ProductManagement = () => (
  <>
    <section className="container">
      <ServicesHeader
        title="Product Management Services"
        description="We turn ideas into market-leading products by streamlining development, aligning business goals, and optimizing the entire product lifecycle for success."
      />
    </section>
    <section className="w-screen relative lg:mt-40 mt-8">
      <Image
        src="/img/services/product-management.webp"
        alt="Product Management"
        layout="responsive"
        width={700}
        height={475}
        className="object-contain object-center"
        priority
      />
    </section>
    <section className="container">
      <SolutionsComponent
        title="End-to-end product management for innovation and growth"
        steps={productManagementService.solutions}
      />
    </section>
    <section className="container">
      <ApproachComponent
        title="Turning ideas into success"
        steps={productManagementService.approach}
      />
    </section>
    <section className="container">
      <FAQComponent
        title="Common questions about product strategy, development, and market success"
        questions={productManagementService.faq}
      />
    </section>
  </>
);

export default ProductManagement;
