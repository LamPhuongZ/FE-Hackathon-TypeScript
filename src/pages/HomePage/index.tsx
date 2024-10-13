import Benefits from "./components/benefits";
import Category from "./components/category";
import { Feedback } from "./components/feedback";
import FindJob from "./components/find-job";

export default function HomePage() {
  return (
    <>
      <FindJob />
      <Category />
      <Benefits />
      <Feedback />
    </>
  );
}
