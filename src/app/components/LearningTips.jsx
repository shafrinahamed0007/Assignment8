import { Card } from "@heroui/react";
import { FaClock, FaCode, FaUsers } from "react-icons/fa6"; // react-icons ব্যবহার করা হয়েছে

export default function LearningTipsSection() {
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
