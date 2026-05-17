import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa6';

const InstructorCard = ({instructor}) => {
  return (
    <div>
      <Card className="border">
            <div className="relative w-full aspect-square">
              <Image
                className="rouded-xl object-cover"
                fill
                src={instructor?.avatar}
                alt={instructor?.title}
                sizes="(max-width: 768px) 100vw, (max-width:1200px)50vw, 33vw"
              />
            </div>
            <div>
              <h2 className=" font-bold">{instructor?.title}</h2>
            </div>
            <div className="flex justify-between">
              {/* instructor */}
              <div className="font-semibold">{instructor?.instructor}</div>
      
              {/* rating */}
              <div className="flex items-center gap-2">
                {/* start */}
                <div className="text-yellow-500">
                  <FaStar />
                </div>
                {/* rating number */}
                <div className="font-semibold">{instructor?.rating}</div>
              </div>
            </div>
      
           
          </Card>
    </div>
  );
};

export default InstructorCard;