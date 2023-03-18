import { FunctionComponent } from "react";
import { SvgProps } from "../Icon";

const ChevronRightIcon: FunctionComponent<SvgProps> = ({
  className,
  color,
}) => {
  return (
    <svg
      className={className}
      width="1.25em"
      height="1.25em"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 18L14.7874 12.2126V12.2126C14.9048 12.0952 14.9048 11.9048 14.7874 11.7874V11.7874L9 6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronRightIcon;
