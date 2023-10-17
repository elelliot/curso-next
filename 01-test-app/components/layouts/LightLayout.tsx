import { ReactNode } from "react";

interface LightLayoutProps {
  children: ReactNode;
}

export const LightLayout = ({ children }: LightLayoutProps): JSX.Element => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>Light Layout</h3>
      <div>{children}</div>
    </div>
  );
};
