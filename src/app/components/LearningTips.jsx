import { Card } from "@heroui/react";
import { FaClock, FaCode, FaUsers } from "react-icons/fa6"; // react-icons ব্যবহার করা হয়েছে

export default function LearningTipsSection() {
  const tips = [
    {
      id: 1,
      title: "Set a Study Routine",
      description:
        "Dedicate at least 30-45 minutes daily to consistent learning. Small, daily steps lead to massive career achievements over time.",
      icon: <FaClock className="w-6 h-6 text-orange-500" />,
      bgColor: "bg-orange-50",
    },
    {
      id: 2,
      title: "Build Real Projects",
      description:
        "Don't just watch tutorial videos. Code along with the instructor, make mistakes, and build small dynamic applications to solidify your base.",
      icon: <FaCode className="w-6 h-6 text-amber-500" />,
      bgColor: "bg-amber-50",
    },
    {
      id: 3,
      title: "Engage with Community",
      description:
        "Join student forums, share your code blockages, and collaborate with peer learners. Solving real-world issues together accelerates growth.",
      icon: <FaUsers className="w-6 h-6 text-orange-600" />,
      bgColor: "bg-orange-100/50",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
          Smart <span className="text-orange-500">Learning Tips</span> For You
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          Maximize your online learning potential and accelerate your
          professional skills with these proven frameworks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tips.map((tip) => (
          <Card
            key={tip.id}
            className="border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="p-6 flex flex-col items-start gap-4">
              <div
                className={`p-3 rounded-xl ${tip.bgColor} flex items-center justify-center`}
              >
                {tip.icon}
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-slate-800 tracking-tight">
                  {tip.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {tip.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
