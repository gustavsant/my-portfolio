export default function Home() {
  return (
    <>
      <div className="flex flex-col bg-nicewhite justify-center items-center w-screen h-screen">
        <p className="font-semibold text-semiblack text-xl">
          Hello! My name is
        </p>
        <h1 className="text-6xl md:text-8xl font-bold text-semiblack">
          GustavSant
        </h1>
        <p className="text-xl font-semibold text-semiblack">
          But you can call me <span className="text-nicegreen">Gus.</span>
        </p>
        <a
          href="#about"
          className="px-4 py-2 border mt-10 border-semiblack text-semiblack"
        >
          Know me!
        </a>
      </div>
    </>
  )
}
