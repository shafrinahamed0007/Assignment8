import React from "react";
import PopularCourseCard from "../components/PopularCourseCard";
import CourseSearch from "../components/CourseSearch.jsx";

const Courses = async ({ searchParams }) => {
  const sp = await searchParams;
  const searchQuery = sp?.search || "";

  const allCourseData = await fetch(
    "https://assignment8-rho-orcin.vercel.app/data.json",
  ).then((res) => res.json());

  const filterCourses = allCourseData.filter((course) => {
    if (!searchQuery) return true;

    return (
      course?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course?.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="w-11/12 mx-auto">
      <CourseSearch />
      <h2 className="text-bold text-2xl my-5 font-bold">All Courses </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
       {
        filterCourses.length > 0 ? (
          filterCourses.map((popularCourse)=>(
            <PopularCourseCard key={popularCourse?.id} popularCourse={popularCourse} />
          ))
        ): (
          <p className="text-red-500 font-semibold text-xl">No course found</p>
        )
       }
      </div>
    </div>
  );
};

export default Courses;
