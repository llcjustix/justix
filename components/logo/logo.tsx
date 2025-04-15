interface LogoProps {
  color?: "white" | "black";
}

const Logo = ({ color = "black" }: LogoProps) => (
  <div className={`relative text-3xl font-extrabold text-${color}`}>
    {process.env.NEXT_PUBLIC_WEBSITE_NAME}
  </div>
);

export default Logo;
