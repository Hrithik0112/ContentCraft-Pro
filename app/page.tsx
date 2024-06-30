import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2>Welcome To Reality</h2>
      <Button>Sign In</Button>
    </div>
  );
}
