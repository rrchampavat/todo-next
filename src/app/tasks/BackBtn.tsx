"use client";

import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

const BackBtn = () => {
  const router = useRouter();
  return <Button onClick={() => router.replace("/")}>Go Back</Button>;
};

export default BackBtn;
