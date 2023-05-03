"use client";

import Icon from "@/components/icon";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import React from "react";

const AddBtn = () => {
  const router = useRouter();

  return (
    <Button
      className="fixed bottom-0 right-0 mb-5 text-secondary bg-primary px-2 py-2 mr-5 rounded-full shadow-xl hover:scale-105 duration-300"
      type="button"
      onClick={() => router.push("/add-task")}
    >
      <Icon name="Plus" className="" color="#F0F5F9" />
    </Button>
  );
};

export default AddBtn;
