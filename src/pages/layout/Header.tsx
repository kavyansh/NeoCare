import NeoCareLogo from "/assets/logos/NeoCareLogo.jpeg";
import Navbar from "./Navbar";
import AskIcon from "/assets/icons/askIcon.svg";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="h-[132px] w-screen p-10px flex justify-center items-center gap-1 relative">
      <img src={NeoCareLogo} className="w-[189px] h-[108px]" />
      <Navbar />
      <Button
        variant="primary"
        className="flex w-fit h-fit gap-2 text-white justify-center items-center"
      >
        <img src={AskIcon} />
        <span className="">ASK DR. SOOD</span>
      </Button>
    </div>
  );
}
