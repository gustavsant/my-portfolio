export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 bg-nicewhite dark:bg-semiblack text-semiblack dark:text-nicewhite justify-center items-center w-screen h-screen">
        <p className="font-semibold text-xl">Hello! My name is</p>
        <h1 className="text-4xl md:text-8xl font-bold ">GustavSant</h1>
        <p className="text-xl font-semibold">
          But you can call me{' '}
          <span className="text-nicegreen dark:text-tomato">Gus.</span>
        </p>
        <a
          href="#about"
          className="px-4 py-2 border mt-10 border-semiblack text-semiblack dark:border-nicewhite dark:text-nicewhite"
        >
          Know me!
        </a>
      </div>
    </>
  )
}
