import { Card } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";

const InstructorCard = ({ instructor }) => {
  return (
    <div className="mt-5 p-2 max-w-sm mx-auto">
      <Card className="border border-neutral-200/80 bg-white shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden group">
     
        <div className="relative w-full aspect-square overflow-hidden rounded-t-2xl bg-neutral-100">
          <Image
            className="object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
            fill
            src={instructor?.avatar || "/placeholder.jpg"}
            alt={instructor?.name || "Instructor"}
            sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
            priority={false}
          />
        </div>


        <div className="p-5 flex flex-col gap-3.5">

          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-semibold tracking-wide text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                {instructor?.designation || "Instructor"}
              </span>
              <span className="text-xs font-medium text-neutral-400">
                {instructor?.organization}
              </span>
            </div>
            <h2 className="text-xl font-bold text-neutral-800 mt-1.5 group-hover:text-blue-600 transition-colors">
              {instructor?.name}
            </h2>
          </div>

   
          <p className="text-sm text-neutral-500 line-clamp-2 leading-relaxed min-h-[40px]">
            {instructor?.bio || "No biography available at the moment."}
          </p>

        
          {instructor?.skills && instructor.skills.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {instructor.skills.slice(0, 4).map((skill, index) => (
                <span 
                  key={index} 
                  className="text-[11px] font-medium text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded-md"
                >
                  {skill}
                </span>
              ))}
              {instructor.skills.length > 4 && (
                <span className="text-[11px] font-medium text-neutral-400 px-1 py-0.5">
                  +{instructor.skills.length - 4} more
                </span>
              )}
            </div>
          )}

        
          <div className="border-t border-neutral-100 pt-3 flex items-center justify-between text-sm">
            {/* Rating */}
            <div className="flex items-center gap-1 bg-amber-50 border border-amber-100 px-2.5 py-1 rounded-full">
              <FaStar className="text-amber-500 text-sm" />
              <span className="font-bold text-amber-700">
                {instructor?.rating || "N/A"}
              </span>
            </div>

           
            <div className="text-neutral-600 font-medium">
              <span className="text-neutral-400 font-normal">Experience:</span>{" "}
              {instructor?.experience || "0+ Years"}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InstructorCard;