import { Button } from "@/components/ui/button";
import mayaS from "../../../images/heroSec/Asgaard sofa 1.png";
import Image from "next/image";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { FaTimes } from "react-icons/fa"; // Importing the FaTimes icon from react-icons
import Link from "next/link";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="border rounded border-[#9F9F9F] w-[120px] h-[40px]" variant="outline">
          AddCart
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between h-full">
        <div>
          <SheetHeader>
            <SheetTitle>Shopping Cart</SheetTitle>
            <hr className="border-l-2 w-[400px] border-black" />
          </SheetHeader>
          <div className="flex pt-5 justify-between">
            <div className="flex">
              <Image src={mayaS} alt="Maya Sofa" className="w-[90px] h-[90px] border rounded-md bg-[#FBEBB5]" />
              <div className="ml-4 flex flex-col justify-center">
                <p className="text-[20px]">Asgaard Sofa</p>
                <p className="text-[12px]">
                  1 x <span className="text-[#B88E2F]">Rs.250,000,00</span>
                </p>
              </div>
            </div>
            <div className="flex items-center text-[14px]">
              <FaTimes className="inline ml-2 cursor-pointer" size={14} />
            </div>
          </div>
        </div>
        <SheetFooter className="mt-4 flex justify-between">
          <SheetClose asChild>
            <Link href="/cart">
              <Button className="bg-white text-black border rounded-2xl">View Cart</Button>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/checkout">
              <Button className="bg-white text-black ml-2 border rounded-2xl">Checkout</Button>
            </Link>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
