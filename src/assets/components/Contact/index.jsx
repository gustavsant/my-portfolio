import GithubLogo from '../../Icons/GithubLogo'
import LinkedinLogo from '../../Icons/LinkedinLogo'
import WppLogo from '../../Icons/WppLogo'
import MailLogo from '../../Icons/MailLogo'
import { useState } from 'react'
export default function Contact() {
  const [isHover, setIsHover] = useState('hidden')

  function handleOnClick() {
    if (isHover === 'hidden') {
      setIsHover(
        'floating absolute transition-all p-2 -bottom-16 bg-nicewhite dark:bg-semiblack border border-semiblack dark:border-nicewhite'
      )
    } else {
      setIsHover('hidden')
    }
  }

  return (
    <>
      <div
        id="contact"
        className="dark:text-nicewhite text-semiblack md:mt-0 mt-14 text:semiblack snap-center flex text-center justify-center items-center flex-col h-screen w-screen"
      >
        <h1 className="font-bold md:text-8xl text-5xl">Get in touch</h1>
        <p className="text-lightgrey my-7 text-xl">
          Feel free to connect with me, i would love to hear what you have to
          say
        </p>
        <div className="flex flex-wrap px-8 md:px-0 justify-center items-center gap-7">
          <a href="https://github.com/gustavsant" target={'_blank'}>
            <button className="h-24 w-24 flex p-4 justify-center items-center border border-semiblack dark:border-nicewhite">
              <GithubLogo />
            </button>
          </a>
          <a href="https://www.linkedin.com/in/gustavsant" target={'_blank'}>
            <button className="h-24 w-24 flex p-4 justify-center items-center border border-semiblack dark:border-nicewhite">
              <LinkedinLogo />
            </button>
          </a>
          <a href="https://wa.me/5584987420405" target={'_blank'}>
            <button className="h-24 w-24 flex p-4 justify-center items-center border border-semiblack dark:border-nicewhite">
              <WppLogo />
            </button>
          </a>

          <button
            onClick={handleOnClick}
            className="h-24 relative w-24 flex p-4 justify-center items-center border border-semiblack dark:border-nicewhite"
          >
            <MailLogo />
            <div className={isHover}>
              <p className="text-[11px]">Click to copy</p>
              <span>gustavosant3301@gmail.com</span>
            </div>
          </button>
        </div>
      </div>
    </>
  )
}
