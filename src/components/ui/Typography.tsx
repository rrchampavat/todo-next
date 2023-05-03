import { FC } from "react";

interface Typography {
  text: string;
  className?: string;
}

export const TypographyLarge: FC<Typography> = (props) => {
  const { text, className } = props;
  return <div className={`text-lg font-semibold ${className}`}>{text}</div>;
};

export const TypographyH4: FC<Typography> = (props) => {
  const { text, className } = props;

  return (
    <h4 className={`scroll-m-20 font-semibold tracking-tight ${className}`}>
      {text}
    </h4>
  );
};

export const TypographyP: FC<Typography> = (props) => {
  const { text, className } = props;

  return (
    <p className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}>
      {text}
    </p>
  );
};
