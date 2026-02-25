import Image from "next/image";

export default function Home() {
  return (
    <main className="h-dvh w-full bg-[#f0e6c8]">
      <Image
        src="/crest.webp"
        alt="Van Leer family crest"
        fill
        priority
        className="object-cover"
      />
    </main>
  );
}
