import Image from "next/image";
import img from '../../public/vercel.svg'
export default function Home() {
  return (
    <>
      <div>Root</div>
      <Image
        src={img}
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
    </>
  );
}
