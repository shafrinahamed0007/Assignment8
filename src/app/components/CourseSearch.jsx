"use client";
import { Description, Label, SearchField } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";

const CourseSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (value) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        <SearchField
          name="search"
          defaultValue={searchParams.get("search") || ""}
          onChange={handleSearch}
        >
          <Label>Search your course</Label>
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input
              className="w-[280px]"
              placeholder="Ex: Complete Web Development..."
            />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>
      </div>
    </div>
  );
};

export default CourseSearch;
