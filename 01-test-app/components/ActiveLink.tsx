import { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

interface ActiveLinkProps {
  text: string;
  href: string;
}

export const ActiveLink = ({ text, href }: ActiveLinkProps) => {
  const { asPath } = useRouter();
  return (
    <Link href={href} style={asPath === href ? style : undefined}>
      {text}
    </Link>
  );
};
