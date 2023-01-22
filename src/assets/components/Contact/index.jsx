import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoWhatsapp,
  IoMailOutline,
} from 'react-icons/io5'
export default function Contact() {
  return (
    <>
      <div
        id="contact"
        className="snap-center flex text-center justify-center items-center flex-col h-screen w-screen"
      >
        <h1 className="font-bold text-8xl text-semiblack">Get in touch</h1>
        <p className="text-lightgrey my-7 text-xl">
          Feel free to connect with me, i would love to hear what you have to
          say
        </p>
        <div className="flex flex-wrap px-8 md:px-0 justify-center items-center gap-7">
          <button className="h-24 w-24 flex justify-center items-center border border-semiblack">
            <IoLogoGithub size={62} color="#242424" />
          </button>
          <button className="h-24 w-24 flex justify-center items-center border border-semiblack">
            <IoLogoLinkedin size={62} color="#242424" />
          </button>
          <button className="h-24 w-24 flex justify-center items-center border border-semiblack">
            <IoLogoWhatsapp size={62} color="#242424" />
          </button>
          <button className="h-24 w-24 flex justify-center items-center border border-semiblack">
            <IoMailOutline size={62} color="#242424" />
          </button>
        </div>
      </div>
    </>
  )
}
