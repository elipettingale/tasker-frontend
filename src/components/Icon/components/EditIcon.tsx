import { FunctionComponent } from "react";
import { SvgProps } from "../Icon";

const EditIcon: FunctionComponent<SvgProps> = ({ className, color }) => {
  return (
    <svg
      className={className}
      width="1.25em"
      height="1.25em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EditIcon;
