import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/logixa/Navbar";
import { Hero } from "@/components/logixa/Hero";
import { TrustBar } from "@/components/logixa/TrustBar";
import { About } from "@/components/logixa/About";
import { Services } from "@/components/logixa/Services";
import { WhyChooseUs } from "@/components/logixa/WhyChooseUs";
import { Process } from "@/components/logixa/Process";
import { Industries } from "@/components/logixa/Industries";
import { Testimonials } from "@/components/logixa/Testimonials";
import { CtaBanner } from "@/components/logixa/CtaBanner";
import { Footer } from "@/components/logixa/Footer";

const title = "LOGIXA — Global Freight Forwarding & Supply Chain Solutions";
const description =
  "LOGIXA moves air, sea, land and project cargo worldwide. Custom clearance, warehousing and 24/7 tracking — uncomplicating global logistics, every mile.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <Industries />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
