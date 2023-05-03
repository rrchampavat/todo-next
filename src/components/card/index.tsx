import React from "react";
import Icon from "../icon";
import styles from "./style.module.css";
import { TypographyH4, TypographyP } from "../ui/Typography";

const Card = (props: Card) => {
  const { task, buttons, handleClick } = props;

  const { title, description, isCompleted, created_at } = task;

  return (
    <div
      className="shadow-lg hover:shadow-2xl hover:scale-105 bg-card p-5 my-2 md:m-2  rounded-md ease-in duration-200 max-h-62"
      onClick={handleClick}
    >
      <div className="flex justify-between">
        <div className="flex items-center">
          <TypographyH4 text={title} />
          <Icon
            name="CheckCircle"
            color={isCompleted ? "green" : "red"}
            size={18}
            className="ml-2"
          />
        </div>

        <button className="flex space-x-2" type="button">
          {buttons?.map((icon, id) => (
            <Icon
              key={id}
              name={icon?.name}
              size={icon?.size}
              color={icon?.color}
              strokeWidth={icon?.strokeWidth}
              handleClick={icon?.handleClick}
            />
          ))}
        </button>
      </div>

      <TypographyP text={description} className={styles.description} />
    </div>
  );
};

export default Card;
