import { FunctionComponent } from "react";
import styles from "./Icon.module.css";
import ChevronRightIcon from "./components/ChevronRightIcon";
import CogIcon from "./components/CogIcon";
import EditIcon from "./components/EditIcon";
import PlusIcon from "./components/PlusIcon";
import TrashIcon from "./components/TrashIcon";
import TickIcon from "./components/TickIcon";

const svgs: { [key: string]: any } = {
  "chevron-right": ChevronRightIcon,
  plus: PlusIcon,
  edit: EditIcon,
  trash: TrashIcon,
  cog: CogIcon,
  tick: TickIcon,
};

interface IconProps {
  name: "chevron-right" | "plus" | "edit" | "trash" | "cog" | "tick";
  color?: string;
}

export interface SvgProps {
  className: string;
  color: string;
}

const Icon: FunctionComponent<IconProps> = ({
  name,
  color = "currentColor",
}) => {
  const Svg = svgs[name];
  if (typeof Svg === "undefined") return null;
  return <Svg className={styles.Icon} color={color} />;
};

export default Icon;
