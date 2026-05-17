import Link from "next/link";
import PopularCourseCard from "./PopularCourseCard";
import { Button } from "@heroui/react";

const PopularCourses = async () => {
  const coursesData = await fetch(
    "https://assignment8-rho-orcin.vercel.app/data.json",
  ).then((res) => res.json());
  const popularCourses = coursesData.slice(0, 6);
  //   console.log("Popular Coures", popularCourses);

  return (
    <div className="lg:mt-20 mt-5">
      <h2 className="text-2xl  font-bold">Popular Courses </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 ">
        {popularCourses.map((popularCourse) => (
          <PopularCourseCard
            key={popularCourse.id}
            popularCourse={popularCourse}
          />
        ))}
      </div>
      <div className="md:mt-10 mt-5 flex  w-full ">
        <Link className="w-full flex justify-center" href={"/courses"}>
          <Button className={"w-48"}>All Courses</Button>
        </Link>
      </div>
    </div>
  );
};

export default PopularCourses;
