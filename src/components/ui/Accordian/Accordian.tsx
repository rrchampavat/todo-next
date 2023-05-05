"use client";

import {
  AccordionContainer,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./index";
import { TypographyMuted } from "../Typography";
import { Button } from "../Button";
import { useRouter } from "next/navigation";
import Icon from "@/components/icon";

const Accordion = (props: Accordion) => {
  const {
    value,
    title,
    description,
    type = "single",
    collapsible = true,
    date,
    btnTxt = "Submit",
    handleClick,
    id,
    icon,
    iconClr,
  } = props;

  const router = useRouter();

  return (
    <AccordionContainer
      type={type}
      collapsible={collapsible}
      className="w-full"
    >
      <AccordionItem value={`item-${value}`}>
        <AccordionTrigger className="hover:no-underline">
          <div className="flex gap-1">
            {title}
            {icon && (
              <Icon
                // name="CheckCircle"
                name={icon}
                color={iconClr}
                size={18}
                className="mt-1"
              />
            )}
          </div>
        </AccordionTrigger>
        <AccordionContent className={`max-h-72 overflow-auto noscrollbar`}>
          {description}
          <div className="flex sticky bottom-0 bg-secondary p-2 justify-between items-center mt-2">
            {btnTxt && (
              <Button
                size={"sm"}
                onClick={() => handleClick || router.push(`/tasks/${id}`)}
              >
                {btnTxt}
              </Button>
            )}

            {date && (
              <TypographyMuted
                text={date}
                className="text-end text-xs font-bold italic mr-2"
              />
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    </AccordionContainer>
  );
};

export default Accordion;
