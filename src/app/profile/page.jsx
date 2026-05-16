"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarFallback, Card } from "@heroui/react";
import { UpdateUserModal } from "../components/UpdateUserModal";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  return (
    <div>
      <Card className="mx-w-96 mx-auto flex flex-col items-center border mt-5 ">
        <Avatar className="h-20 w-20">
          <Avatar.Image
            alt={user?.name}
            src={user?.image}
            referrerPolicy="no-reffer"
          />
          <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
        </Avatar>
        <h2 className="text-xl font-bold">{user?.name}</h2>
        <p>Name: {user?.name}</p>
        <p>email: {user?.email}</p>
        <UpdateUserModal />
      </Card>
    </div>
  );
};

export default ProfilePage;
