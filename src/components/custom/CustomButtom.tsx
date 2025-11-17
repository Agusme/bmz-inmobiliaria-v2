import { ReactNode } from "react";

interface CustomButtomProps {
  children: ReactNode;
  className?: string
}
function CustomButtom({ children , className}: CustomButtomProps) {
  return (
    <div>
      <button className={`btn text-white bg-red-800 hover:bg-red-900 transition  ${className} `}>{children}</button>
    </div>
  );
}

export default CustomButtom;
