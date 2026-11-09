"use client";

import { ReactNode } from "react";
import { buttonClasses, Size, Variant } from "../ui/Button";
import { useQuote } from "./QuoteProvider";

interface Props {
  children?: ReactNode;
  service?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
}

const QuoteButton = ({ children = "Begär offert", service, variant, size, className }: Props) => {
  const { openQuote } = useQuote();
  return (
    <button
      type="button"
      onClick={() => openQuote(service)}
      className={buttonClasses({ variant, size, className })}
    >
      {children}
    </button>
  );
};

export default QuoteButton;
