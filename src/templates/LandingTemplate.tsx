import Header from "../pages/LandingPage/components/header";
import Footer from "../components/footer";
import HowItWorks from "../pages/LandingPage/components/how-it-works";
import Benefits from "../pages/LandingPage/components/benefits";
import Support from "../pages/LandingPage/components/support";

export default function LandingTemplate() {
  return (
    <div className="content-wrapper max-w-screen-2xl">
      <Header />
      <div style={{ minHeight: "80vh" }}>
        <Benefits />
        <Support />
        <HowItWorks />
      </div>
      <Footer />
    </div>
  );
}
