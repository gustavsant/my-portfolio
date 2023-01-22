export default function About() {
  return (
    <>
      <div
        id="about"
        className="snap-center flex px-2 md:px-0 text-center justify-center flex-col items-center h-screen"
      >
        <h1 className="font-bold mb-7 mt-20 md:mt-0 text-8xl text-center text-semiblack">
          Who i am?
        </h1>
        <p className="text-lightgrey leading-8 md:leading-normal text-xl mb-16">
          I’m Gustavo Santana, a 20 years old{' '}
          <span className="text-nicegreen">Front End Develope</span>r from
          Brazil!
          <br /> Currently raising my skills in{' '}
          <span className="text-nicegreen">
            Web and Mobile
          </span> development.{' '}
        </p>
        <div className="flex gap-7 md:flex-row flex-col">
          <a
            href="../../../../public/Gustavo Rodrigues da Silva Santana.pdf"
            className="border border-semiblack px-7 py-2"
            download
          >
            <span className="font-extralight text-xl">Download CV</span>
          </a>
        </div>
      </div>
    </>
  )
}
