import Banner from "@/components/Banner/Banner";
import ContactInfo from "@/components/ContactUs/ContactInfo";
import ContactUs from "@/components/ContactUs/ContactUs";
import Courses from "@/components/Courses/Courses";
import Features from "@/components/Features";
import { Footer } from "@/components/footer/Footer";
import GetHiredSection from "@/components/GetHiredSection/GetHiredSection";
import Navbar from "@/components/Header/Navbar";
import Testimonials from "@/components/Testimonials";
import WhyChooseSection from "@/components/WhyChoose/WhyChooseSection";
export default async function Home() {
  return (
    <main className=" bg-white">
      <Navbar />
      <Banner />

      <div className="  bg-ChooseBG top-12">
        <WhyChooseSection />
        <Courses />
        <Features />
      </div>
      <Testimonials />

      <GetHiredSection />
      <ContactUs />

      <ContactInfo />

      <Footer />
    </main>
  );
}
