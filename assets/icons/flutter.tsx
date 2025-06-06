import { IconType } from "@/types/utils";

const FlutterIcon: IconType = (props) => (
  <svg
    fill="#000000"
    width={props?.size || "24"}
    height={props?.size || "24"}
    viewBox="0 0 24 24"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Flutter icon</title>
    <path d="M14.314 0L2.3 12 6 15.7 21.684.012h-7.357L14.314 0zm.014 11.072l-6.471 6.457 6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.371z" />
  </svg>
);

export default FlutterIcon;
