import React from "react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  className?: string;
  link?: string;
  targetBlank?: boolean;
  internal?: boolean;
  onHover?: boolean;
};

const A = ({
  className,
  link,
  children,
  targetBlank,
  internal = false,
  onHover
}: Props) => {
  return (
    <>
      {internal ? (
        <Link href={link}>
          <span className={className} rel="noopener noreferrer">
            {children}
          </span>
        </Link>
      ) : onHover ? (
        <span className={className} rel="noopener noreferrer">
          {children}
        </span>
      ) : (
        <a
          href={link}
          className={className}
          rel="noopener noreferrer"
          target={targetBlank && "_blank"}
        >
          {children}
        </a>
      )}
    </>
  );
};

export default A;
