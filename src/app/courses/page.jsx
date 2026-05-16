import React from "react";
import PopularCourseCard from "../components/PopularCourseCard";

const Courses = async () => {
  const allCourses = await fetch(
    "https://assignment8-rho-orcin.vercel.app/data.json",
  ).then((res) => res.json());
  console.log(allCourses);
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-bold text-2xl my-5 font-bold">All Courses </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {
          allCourses.map(popularCourse => <PopularCourseCard key={popularCourse?.id} popularCourse={popularCourse}  />)
        }

      </div>
    </div>
  );
};

export default Courses;
