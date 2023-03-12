import { FunctionComponent } from "react";
import ChevronRightIcon from "./components/ChevronRightIcon";
import PlusIcon from "./components/PlusIcon";

const svgs: { [key: string]: any } = {
  "chevron-right": ChevronRightIcon,
  plus: PlusIcon,
};

interface IconProps {
  name: "chevron-right" | "plus";
  color?: string;
}

export interface SvgProps {
  color: string;
}

const Icon: FunctionComponent<IconProps> = ({
  name,
  color = "currentColor",
}) => {
  const Svg = svgs[name];
  if (typeof Svg === "undefined") return null;
  return <Svg color={color} />;
};

export default Icon;
