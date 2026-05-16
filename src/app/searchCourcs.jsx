"use client";

import { Input } from "@heroui/react";
import { Search } from "lucide-react";

const SearchCourse = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="w-full max-w-md mx-auto mb-6">
      <Input
        size="lg"
        radius="lg"
        placeholder="Search courses..."
        startContent={<Search size={18} />}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchCourse;