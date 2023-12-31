import Image from "next/image";

const Nav = () => {
  return (
    <>
      <div className="w-full px-4 lg:px-20 flex justify-between bg-white/80 backdrop-blur items-center py-5 text-my-text  border-[1px] border-gray-100 fixed inset-x-0 z-10 mx-auto max-w-screen-2xl">
        <h1 className="text-3xl font-bold text-my-bold">LegalClone </h1>
        <div className="flex gap-5 lg:gap-10 items-center">
          <ul className="hidden lg:flex gap-10 items-center text-lg">
            <li className="hover:text-my-blue">
              <a href="#">Accueil </a>
            </li>

            <li className="hover:text-my-blue">
              <a href="#a-propos">A propos </a>
            </li>
            <li className="hover:text-my-blue">
              <a href="#services">Services</a>
            </li>
          </ul>
          <a
            className=" transition-all hover:translate-x-1 ease-linear hidden lg:block border-[1px] border-solid text-my-blue border-gray-200 px-6 py-2 bg-my-primary rounded-full text-lg font-semibold "
            href="#"
          >
            Rejoignez nous
          </a>
          <div className="rounded-full w-10 h-10 flex items-center justify-center border-gray-200 border-[1px] bg-my-primary ">
            <Image
              className="w-4 h-4 transition-all trasition-1000 ease-linear hover:rotate-[-120deg] hover:fill-black "
              src="/icons/moon.svg"
              alt="moon"
			  height={16}
			  width={16}
            />
          </div>
          <Image className="lg:hidden w-8 h-8" src="/icons/menu.svg" alt="hamburger menu"
		  		height={32}
				width={32}
		   />
        </div>
      </div>
    </>
  )
}

export default Nav
