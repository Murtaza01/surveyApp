import { ImSpinner2 } from "react-icons/im";
export default function Loading({ message }) {
  return (
    <div className=" h-screen capitalize font-heading center flex-col gap-3 text-primary bg-background">
      <p>{message}</p>
      <ImSpinner2 className=" text-lg animate-spin" />
    </div>
  );
}
