import axios from "axios";
import Benefits from "./components/benefits";
import Category from "./components/category";
import Feedback from "./components/feedback";
import TopFeature from "./components/top-feature";

export default function HomePage() {

  return (
    <>
      <TopFeature />
      <Category />
      <Benefits />
      <Feedback />
    </>
  );
}
