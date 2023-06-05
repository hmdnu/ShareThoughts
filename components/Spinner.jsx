import spinner from "../public/spinner.svg";
import Image from "next/image";

export default function Spinner({ width, height }) {
  return <Image src={spinner} width={width} height={height} alt="spinner" className="animate-spin" />;
}
