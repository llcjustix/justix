import { IconType } from "@/types/utils";

const CheckIcon: IconType = (props) => (
  <svg
    width={props?.size || "31"}
    height={props?.size || "31"}
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="15.5" cy="15.5" r="15.041" fill="#2ED06E" />
    <path
      d="M13.973 19.3359L10.4736 15.5253L11.9054 14.1543L14.0733 16.5131L19.1945 11.6641L20.527 13.137L13.973 19.3359Z"
      fill="white"
    />
  </svg>
);

export default CheckIcon;
