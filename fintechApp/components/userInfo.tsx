"use client";
import { useAuth } from "@/contexts/AuthContext";
import { useUIContext } from "@/contexts/UIContext";
import { useState } from "react";

export const UserInfo = ({ isShortList = true }) => {
  const { user } = useAuth();
  const { openModal, closeModal } = useUIContext();
  const [modal, setModal] = useState<React.ReactNode>(null);
  const handleOpen = () => {
    setModal(
      openModal({
        title: "Create User",
        position: "center",
        className: "max-w-2xl",
        onClose: () => setModal(closeModal()),
        children: (
          <div>
            <input
              className="w-full rounded-lg border p-3"
              placeholder="User name"
            />

            <button className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-white">
              Create
            </button>
          </div>
        ),
      }),
    );
  };
  return (
    <div>
      <button onClick={handleOpen}>Create User</button>

      {modal}
      {isShortList ? <h2 className="mb-5">Welcome, {user?.name} </h2> : ""}
    </div>
  );
};
