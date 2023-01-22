import { SiCoffeescript } from 'react-icons/si'
export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row text-center justify-center items-center gap-2 border-t-2 border-semiblack w-screen h-24">
      <span>Made by me using React, Tailwind and some coffee</span>{' '}
      <SiCoffeescript color="#242424" />
    </div>
  )
}
