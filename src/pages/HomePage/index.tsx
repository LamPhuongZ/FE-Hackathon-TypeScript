import Banner from "./components/banner";
import Benefits from "./components/benefits";
import Feedback from "./components/feedback";
import FindJob from "./components/find-job";

export default function HomePage() {
  return (
    <>
      <Banner />
      <FindJob />
      <Benefits />
      <Feedback />
    </>
  );
}
