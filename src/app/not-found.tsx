import Icon from "@/components/icon";
import { TypographyLarge, TypographyP } from "@/components/ui/Typography";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex space-x-2">
        <Icon name="AlertTriangle" color="orange" />
        <TypographyLarge text="Not Found" />
      </div>
      <TypographyP className="mb-5" text="Could not find requested resource" />
    </div>
  );
}
