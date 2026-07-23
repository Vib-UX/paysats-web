import {
  faqPageSchema,
  financialProductCardSchema,
  financialProductDcaSchema,
  financialProductLoanSchema,
  homeFaqs,
} from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { HomePage } from "@/components/HomePage";

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          financialProductLoanSchema(),
          financialProductDcaSchema(),
          financialProductCardSchema(),
          faqPageSchema(homeFaqs),
        ]}
      />
      <HomePage />
    </>
  );
}
