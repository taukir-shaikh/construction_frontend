import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Hero from "../components/frontend/Hero";
import About from "../components/frontend/About";
import Services from "../components/frontend/Services";
import WhyChooseUs from "../components/frontend/WhyChooseUs";
import Projects from "../components/frontend/Projects";
import Testimony from "../components/frontend/Testimony";
import Blogs from "../components/frontend/Blogs";

const Home = () => {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Testimony />
      <Blogs />
      <Footer />
    </>
  );
};

export default Home;
