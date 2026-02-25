import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-dvh flex items-center justify-center bg-[#f0e6c8]">
      <Image
        src="/crest.webp"
        alt="Van Leer family crest"
        width={1456}
        height={816}
        priority
        className="w-full max-w-4xl h-auto"
      />
    </main>
  );
}
