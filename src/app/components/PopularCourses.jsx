import PopularCourseCard from "./PopularCourseCard";

const PopularCourses = async () => {
  const coursesData = await fetch(
    "https://assignment8-rho-orcin.vercel.app/data.json",
  ).then((res) => res.json());
  const popularCourses = coursesData.slice(0, 3);
//   console.log("Popular Coures", popularCourses);

  return (
    <div className="mt-20">
      <h2 className="text-2xl  font-bold">Popular Courses </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {popularCourses.map((popularCourse) => (
          <PopularCourseCard
            key={popularCourse.id}
            popularCourse={popularCourse}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
