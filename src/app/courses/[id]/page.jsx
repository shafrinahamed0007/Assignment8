import { Card } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { FiUser, FiClock, FiLayers, FiInfo } from "react-icons/fi"; // নতুন কিছু আইকন যোগ করা হয়েছে

const CourseDetails = async ({ params }) => {
  const { id } = await params;

  const courseDetails = await fetch(
    "https://assignment8-rho-orcin.vercel.app/data.json",
  ).then((res) => res.json());

  const courseDetail = courseDetails.find((p) => p.id == id);

  return (
    <div className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto my-10">
      <Card className="border border-default-100 bg-background/60 dark:bg-default-100/50 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
        <div className="relative w-full aspect-video md:aspect-[16/9] overflow-hidden group">
          <Image
            className="object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
            fill
            priority
            src={courseDetail?.image}
            alt={courseDetail?.title || "Course Image"}
            sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
          />

          {courseDetail?.category && (
            <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
              {courseDetail?.category}
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col gap-5">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-foreground leading-snug">
              {courseDetail?.title}
            </h1>
          </div>

          {courseDetail?.description && (
            <div className="bg-default-50/50 p-3.5 rounded-xl border border-default-100 flex gap-2.5 items-start">
              <FiInfo className="text-primary mt-0.5 shrink-0" size={18} />
              <p className="text-sm text-default-600 leading-relaxed">
                {courseDetail?.description}
              </p>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2.5 bg-default-50/30 p-3 rounded-xl border border-default-100/70">
              <div className="p-2 bg-secondary-100 text-secondary rounded-lg">
                <FiClock size={16} />
              </div>
              <div>
                <p className="text-[11px] text-default-400 uppercase tracking-wider font-semibold">
                  Duration
                </p>
                <p className="font-semibold text-sm text-foreground-700">
                  {courseDetail?.duration}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 bg-default-50/30 p-3 rounded-xl border border-default-100/70">
              <div className="p-2 bg-success-100 text-success rounded-lg">
                <FiLayers size={16} />
              </div>
              <div>
                <p className="text-[11px] text-default-400 uppercase tracking-wider font-semibold">
                  Level
                </p>
                <p className="font-semibold text-sm text-foreground-700">
                  {courseDetail?.level}
                </p>
              </div>
            </div>
          </div>

          <hr className="border-default-200/60" />

          <div className="flex justify-between items-center bg-default-50/50 p-3 rounded-xl border border-default-100">
            {/* Instructor */}
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-primary-100 text-primary rounded-full">
                <FiUser size={18} />
              </div>
              <div>
                <p className="text-xs text-default-400 font-medium">
                  Instructor
                </p>
                <p className="font-semibold text-sm md:text-base text-foreground-700">
                  {courseDetail?.instructor}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-amber-50 dark:bg-amber-950/30 px-3 py-1.5 rounded-lg border border-amber-200/50">
              <FaStar className="text-amber-500 text-sm md:text-base" />
              <span className="font-bold text-sm md:text-base text-amber-700 dark:text-amber-400">
                {courseDetail?.rating}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CourseDetails;
