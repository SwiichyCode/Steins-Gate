import { useEffect, useState } from "react";
import { User } from "@/types/user";

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState<User>();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  return currentUser || null;
};
