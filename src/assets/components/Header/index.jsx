import { useState, useEffect } from 'react'
import { IoMoon, IoSunny } from 'react-icons/io5'

import GsLogo from '../../Icons/GsLogo'

export default function Header() {
  const [theme, setTheme] = useState('light')
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])
  function handleThemeSwitch() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  function handleMenu() {
    const menuUl = document.querySelector('.menulist')
    menuUl.classList.toggle('-right-80')
    menuUl.classList.toggle('right-0')
  }
  return (
    <>
      <div className="w-screen backdrop-blur fixed border-b-2 border-b-semiblack dark:border-b-nicewhite dark:text-nicewhite h-20 items-center justify-between flex px-8">
        <GsLogo size={64} />
        <button
          onClick={handleMenu}
          className="flex md:hidden flex-col gap-1 absolute right-8 z-50 top-8"
        >
          <div className="w-8 h-1 bg-semiblack dark:bg-nicewhite"></div>
          <div className="w-8 h-1 bg-semiblack dark:bg-nicewhite"></div>
          <div className="w-8 h-1 bg-semiblack dark:bg-nicewhite"></div>
        </button>
        <ul className="flex transition-all z-40 menulist flex-col border-l border-l-semiblack dark:border-l-nicewhite md:border-0 md:flex-row md:static absolute w-2/4 h-screen md:h-auto top-0 md:bg-transparent bg-nicewhite md:dark:bg-transparent dark:bg-semiblack px-4 md:px-0 py-10 md:py-0 -right-80 md:justify-end justify-center items-end gap-10">
          <li className=" text-lg md:mx-0">
            <a href="#about">About</a>
          </li>
          <li className=" text-lg md:mx-0">
            <a href="#projects">Projects</a>
          </li>
          <li className=" text-lg md:mx-0">
            <a href="#contact">Contact</a>
          </li>
          <li className=" text-lg md:mx-0">
            <button onClick={handleThemeSwitch}>
              {theme === 'dark' ? (
                <IoMoon size={24} color="#f9f9f9" />
              ) : (
                <IoSunny size={24} color="#242424" />
              )}
            </button>
          </li>
        </ul>
      </div>
    </>
  )
}
