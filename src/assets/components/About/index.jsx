import CV from '../../../assets/GustavoRodriguesDaSilvaSantana.pdf'
export default function About() {
  return (
    <>
      <div
        id="about"
        className="snap-center dark:text-nicewhite text-semiblack flex px-2 md:px-0 text-center justify-center flex-col items-center h-screen w-screen"
      >
        <h1 className="font-bold  mb-7 mt-20 md:mt-0 text-5xl md:text-8xl text-center">
          Who i am?
        </h1>
        <p className="text-lightgrey md:leading-normal text-lg md:text-xl mb-16">
          I’m Gustavo Santana, a 20 years old{' '}
          <span className="dark:text-tomato text-nicegreen">
            Front End Developer
          </span>{' '}
          from Brazil!
          <br /> Currently raising my skills in{' '}
          <span className="dark:text-tomato text-nicegreen">
            Web and Mobile
          </span>{' '}
          development.{' '}
        </p>
        <div className="flex gap-7 md:flex-row flex-col">
          <a
            href={CV}
            className="border border-semiblack dark:border-nicewhite px-7 py-2"
            download
          >
            <span className="font-extralight text-xl">Download CV</span>
          </a>
        </div>
      </div>
    </>
  )
}
