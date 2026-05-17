"use client";

import React from "react";
import { Card, CardBody, Avatar, Button, Chip } from "@heroui/react";
import { Star, Briefcase, Award, ArrowUpRight } from "lucide-react";

export default function InstructorCard({ instructor }) {
  const {
    name,
    designation,
    organization,
    experience,
    bio,
    avatar,
    skills,
    rating,
  } = instructor;

  return (
    <Card className="w-full p-4 border border-zinc-800 bg-zinc-950/90 backdrop-blur-md text-white shadow-xl rounded-2xl hover:border-purple-500/50 transition-all duration-300">
      <CardBody className="flex flex-col items-center text-center gap-4 p-2">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md opacity-60 group-hover:opacity-100 transition duration-300"></div>
          <Avatar
            src={avatar}
            className="w-24 h-24 text-large border-2 border-zinc-900 relative"
            isBordered
            color="secondary"
          />
        </div>

        <div className="space-y-1">
          <h3 className="text-xl font-bold tracking-tight text-zinc-100 line-clamp-1">
            {name}
          </h3>
          <p className="text-xs font-medium text-purple-400 flex items-center justify-center gap-1">
            <Briefcase size={12} />{" "}
            <span className="line-clamp-1">{designation}</span>
          </p>
          <p className="text-xs text-zinc-400">at {organization}</p>
        </div>

        <div className="flex gap-2 justify-center w-full my-0.5">
          <div className="flex items-center gap-1 bg-zinc-900 px-2.5 py-1 rounded-xl border border-zinc-800">
            <Star size={14} className="text-amber-400 fill-amber-400" />
            <span className="text-xs font-semibold">{rating}</span>
          </div>
          <div className="flex items-center gap-1 bg-zinc-900 px-2.5 py-1 rounded-xl border border-zinc-800">
            <Award size={14} className="text-purple-400" />
            <span className="text-xs font-semibold">{experience} Exp</span>
          </div>
        </div>

        <p className="text-xs text-zinc-400 line-clamp-3 min-h-[48px]">
          &ldquo;{bio}&rdquo;
        </p>

        <div className="flex flex-wrap gap-1 justify-center min-h-[56px] items-center">
          {skills?.map((skill, index) => (
            <Chip
              key={index}
              variant="flat"
              avatar={
                <span className="pl-1 text-purple-400 font-bold text-[10px]">
                  #
                </span>
              }
              className="bg-purple-500/10 text-purple-300 border border-purple-500/20 text-[10px] h-6 px-1.5"
            >
              {skill}
            </Chip>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
