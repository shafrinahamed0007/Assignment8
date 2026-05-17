
import Banner from "./components/Banner";
import Instructor from "./components/Instructor";
import PopularCourses from "./components/PopularCourses";

export default function Home() {
  return <div className="w-11/12 mx-auto">
    <Banner />
    <PopularCourses />
    <Instructor />
  </div>;
}
