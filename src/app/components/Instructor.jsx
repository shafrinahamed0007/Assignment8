import InstructorCard from "./InstructorCard";

const Instructor = async () => {
  const instructors = await fetch(
    "https://assignment8-rho-orcin.vercel.app/instructor.json",
  ).then((res) => res.json());
  return (
    <div className="my-10">
      <h2 className="text-xl font-bold">Top Instructor </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {instructors.map((instructor) => (
          <InstructorCard
            key={instructor.instructor_id}
            instructor={instructor}
          />
        ))}
      </div>
    </div>
  );
};

export default Instructor;
