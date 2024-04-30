import Marquee from "react-fast-marquee";
import "./main.css";

export default function Main() {
  return (
    <div className="total">
      <Marquee play={true} speed={100} delay={2}>
        <img src="/public/dark/awwwards-dark.svg" alt="" />
        <img src="/public/dark/clutch-dark.svg" alt="" />
        <img src="/public/dark/clutch-rating-dark.svg" alt="" />
        <img src="/public/dark/deloitte-dark.svg" alt="" />
        <img src="/public/dark/vintage-dark.svg" alt="" />
        <img src="/public/dark/vintage-dark.svg" alt="" />
      </Marquee>
    </div>
  );
}
