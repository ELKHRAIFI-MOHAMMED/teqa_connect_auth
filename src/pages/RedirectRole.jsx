// src/pages/RedirectRole.jsx
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import Loader from "../components/misc/Loader";

export default function RedirectRole() {
  const { user, redirectByRole } = useContext(AuthContext);

  useEffect(() => {
    if (user) redirectByRole();
  }, [user]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader />
    </div>
  );
}
