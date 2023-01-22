import Logo from '../../../../public/GsLogo.svg'
export default function Header() {
  return (
    <>
      <div className="w-screen backdrop-blur fixed border-b-2 border-b-semiblack h-20 items-center justify-between flex px-8">
        <img src={Logo} alt="GustavSant logo" />
        <ul className="md:flex hidden gap-10">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#">Theme</a>
          </li>
        </ul>
      </div>
    </>
  )
}
