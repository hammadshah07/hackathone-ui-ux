import Image from "next/image"
import seater from "../../../images/heroSec/seater..png"
export default function Home() {
  return (
    <div className="bg-[#FBEBB5] w-full h-[900px] flex justify-between">
      <div className="text-[64px] w-[440px] h-[192px] pt-[428px] ml-[120px]">
        <p>Rocket single seater</p>
        <p className="text-[24px] w-[128px] pt-10 underline underline-offset-8">Shop Now</p>
      </div>
      <div className="w-[753px] h-[900px]">
        <Image src={seater} alt="sofa" />
      </div>
    </div>
  )
}