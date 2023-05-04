"use client";

import Icon from "@/components/icon";
import { TypographyLarge } from "@/components/ui/Typography";

export default function Loading() {
  return (
    <div className="w-screem h-screen flex justify-center items-center space-x-2">
      <Icon
        name="Loader"
        color="#52616B"
        className="animate-spin duration-1000"
      />
      <TypographyLarge text="Loading" />
    </div>
  );
}
