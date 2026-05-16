import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";

const PopularCourseCard = ({ popularCourse }) => {
  return (
    <Card className="border">
      <div className="relative w-full aspect-square">
        <Image
          className="rouded-xl object-cover"
          fill
          src={popularCourse?.image}
          alt={popularCourse?.title}
          sizes="(max-width: 768px) 100vw, (max-width:1200px)50vw, 33vw"
        />
      </div>
      <div>
        <h2 className=" font-bold">{popularCourse?.title}</h2>
      </div>
      <div className="flex justify-between">
        {/* instructor */}
        <div className="font-semibold">{popularCourse?.instructor}</div>

        {/* rating */}
        <div className="flex items-center gap-2">
          {/* start */}
          <div className="text-yellow-500">
            <FaStar />
          </div>
          {/* rating number */}
          <div className="font-semibold">{popularCourse?.rating}</div>
        </div>
      </div>

      <Link href={`/courses/${popularCourse.id}`}>
      <Button className={"w-full"}>View Detalis</Button>
      </Link>
    </Card>
  );
};

export default PopularCourseCard;