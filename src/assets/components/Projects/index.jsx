import { IoRestaurant, IoLogoGithub } from 'react-icons/io5'
import { TiWeatherPartlySunny } from 'react-icons/ti'
import RFT from '../../../../public/ReactFocusTimer.svg'
export default function Projects() {
  return (
    <>
      <div
        id="projects"
        className="scroll-mt-20 w-screen px-2  md:px-0 text-center flex flex-col items-center justify-center"
      >
        <h1 className="text-7xl md:text-8xl font-bold text-semiblack">
          My projects
        </h1>
        <p className="text-center my-8 text-lightgrey text-xl">
          Focusing in Front End, i have a lot of study stuff that i pratice
          everything i’m learning.
          <br /> These are the most important, but you can find all in my Github
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-2 lg:gap-8">
          <div className=" p-4 flex w-64 flex-col justify-center items-center  border-2 border-semiblack">
            <IoRestaurant size={124} color="#242424" />
            <div className="flex mt-4 flex-col gap justify-start w-full items-start">
              <h4 className="text-semiblack font-bold">Restaurant Site</h4>
              <p className="text-start text-lightgrey">
                My first monetized project for a restaurant
              </p>
              <div className="flex gap-4 mt-6">
                <button className="border px-5 py-1 border-semiblack">
                  <span>Visit</span>
                </button>
                <button className="border w-9 flex justify-center items-center border-semiblack">
                  <IoLogoGithub size={26} />
                </button>
              </div>
            </div>
          </div>
          <div className=" p-4 flex w-64 flex-col justify-center items-center  border-2 border-semiblack">
            <img className="h-32" src={RFT} alt="" />
            <div className="flex mt-4 flex-col gap justify-start w-full items-start">
              <h4 className="text-semiblack font-bold">React Focus Timer</h4>
              <p className="text-start text-lightgrey">
                Here i’ve worked with React for the first time
              </p>
              <div className="flex gap-4 mt-5">
                <button className="border px-5 py-1 border-semiblack">
                  <span>Visit</span>
                </button>
                <button className="border w-9 flex justify-center items-center border-semiblack">
                  <IoLogoGithub size={26} />
                </button>
              </div>
            </div>
          </div>
          <div className=" p-4 flex w-64 flex-col justify-center items-center  border-2 border-semiblack">
            <TiWeatherPartlySunny size={124} color="#242424" />
            <div className="flex mt-4 flex-col gap justify-start w-full items-start">
              <h4 className="text-semiblack font-bold">Weather App</h4>
              <p className="text-start text-lightgrey">
                I’ve used an API with Fetch for the first time.
              </p>
              <div className="flex gap-4 mt-6">
                <button className="border px-5 py-1 border-semiblack">
                  <span>Visit</span>
                </button>
                <button className="border w-9 flex justify-center items-center border-semiblack">
                  <IoLogoGithub size={26} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
