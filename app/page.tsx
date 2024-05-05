import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center ">
      <div className="">welcome to i18 internationalisation</div>
      <Link href={"/about-us"}>About us</Link>
    </div>
  );
}
