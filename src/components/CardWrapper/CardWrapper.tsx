import React from "react";

interface CardWrapperProps {
  children: React.ReactNode;
  classNames?: string;
}

export default function CardWrapper(props: CardWrapperProps) {
  const { classNames = "flex-column" } = props;

  return <div className={`card-wrapper ${classNames}`}>{props.children}</div>;
}
