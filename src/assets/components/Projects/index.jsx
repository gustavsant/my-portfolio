import GithubLogo from '../../Icons/GithubLogo'
import RestaurantLogo from '../../Icons/RestaurantLogo'
import WeatherLogo from '../../Icons/WheaterLogo'
import TimerLogo from '../../Icons/TimerLogo'
import ToDo from '../../Icons/ToDo'

const projects = [
  {
    name: 'Restaurant Site',
    link: 'https://www.gustavsant.github.io/restaurant-landing-page',
    repo: 'https://github.com/gustavsant/restaurant-landing-page',
    desc: 'My first monetized project for a restaurant',
    icon: <RestaurantLogo size={180} />,
  },
  {
    name: 'React Focus Timer',
    link: 'https://gustavsant.github.io/react-focus-timer/',
    repo: 'https://github.com/gustavsant/react-focus-timer',
    desc: 'Here i’ve worked with React for the first time',
    icon: <TimerLogo size={182} />,
  },
  {
    name: 'Weather App',
    link: 'https://gustavsant.github.io/My-Weather-App/',
    repo: 'https://github.com/gustavsant/My-Weather-App',
    desc: 'I’ve used an API with Fetch for the first time.',
    icon: <WeatherLogo size={180} />,
  },
  {
    name: 'To Do List',
    link: 'https://gustavsant.github.io/comfy-to-do/',
    repo: 'https://github.com/gustavsant/comfy-to-do',
    desc: 'A CRUD concept based project.',
    icon: <ToDo size={180} />,
  },
]

export default function Projects() {
  function ProjectContainer({ name, link, repo, desc, icon }) {
    return (
      <div className=" p-4 flex w-64 flex-col justify-center items-center  border-2 border-semiblack dark:border-nicewhite">
        {icon}
        <div className="flex mt-4 flex-col gap justify-start w-full items-start">
          <h4 className=" font-bold">{name}</h4>
          <p className="text-start text-lightgrey">{desc}</p>
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => window.open(`${link}`)}
              className="border px-5 py-1 border-semiblack dark:border-nicewhite"
            >
              <span>Visit</span>
            </button>
            <button
              onClick={() => window.open(`${repo}`)}
              className="border w-9 flex justify-center items-center border-semiblack dark:border-nicewhite"
            >
              <GithubLogo size={25} />
            </button>
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      <div
        id="projects"
        className="scroll-mt-20 md:mt-0 mt-14 w-screen px-2 dark:text-nicewhite text-semiblack md:px-0 text-center flex flex-col items-center justify-center"
      >
        <h1 className="text-5xl md:text-8xl font-bold">My projects</h1>
        <p className="text-center my-8 text-lightgrey text-lg md:text-xl">
          Focusing in Front End, i have a lot of study stuff that i pratice
          everything i’m learning.
          <br /> These are the most important, but you can find all in my Github
        </p>
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-2 lg:gap-8">
          {projects.map((project) => {
            return (
              <ProjectContainer
                name={project.name}
                link={project.link}
                repo={project.repo}
                desc={project.desc}
                icon={project.icon}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
