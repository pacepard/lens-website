import React from "react";
import Link from "next/link";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

const Button = ({ href, children, variant = "primary" }: ButtonProps) => {
  const baseStyle =
    "w-full py-3 rounded-lg text-center font-medium transition";
  const styles = {
    primary: `${baseStyle} bg-green-600 text-white hover:bg-green-700`,
    secondary: `${baseStyle} bg-gray-200 text-gray-800 hover:bg-gray-300`,
  };

  if (href) {
    return (
      <Link href={href} className={styles[variant]}>
        {children}
      </Link>
    );
  }

  return <button className={styles[variant]}>{children}</button>;
};

export default Button;
