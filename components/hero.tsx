import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <div className="w-full mx-auto max-w-screen-2xl px-5 sm:px-20 pt-40 flex flex-col items-center text-center lg:text-left lg:items-start  font-custom">

        <div className=" flex flex-col gap-10 lg:gap-20 lg:flex-row items-start  ">
          <div className="lg:w-[55%]">
		  <h1 className="text-[#00325E] text-5xl sm:text-6xl lg:text-7xl font-bold  dark:text-white">
          Think, Build,{' '}
          {/* <span className="font-bold text-transparent  bg-clip-text bg-gradient-to-r from-my-blue to-purple-400">
            Scale
          </span> */}
		  <span className="relative">
				<span className="relative bg-gradient-to-r from-my-blue to-purple-400 bg-clip-text text-transparent dark:from-primaryLight dark:to-secondaryLight md:px-2">Scale</span>
			</span>
			<br />
		  <span className='text-8xl'>Your Business</span>
        </h1>
            <p className="  mt-8 text-lg sm:text-xl   text-my-text dark:text-gray-300">
            Passez à l&apos;action dès aujourd&apos;hui ! Créez un compte pour découvrir comment notre plateforme peut simplifier votre parcours entrepreneurial. Protégez vos idées, suivez votre progression et rejoignez une communauté dynamique d&apos;entrepreneurs. Votre réussite commence ici.
            </p>
            <div className=" relative mt-10 flex items-center justify-between p-6 border-my-primary border-2 shadow-md rounded-full dark:border-white/10">
              <div className="flex items-center gap-4">
                <Image className="w-6 h-6" src="/icons/envelope.svg" alt="envelope"
				height={24}
				width={24}
				 />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Votre adresse mail "
                  className="outline-none "
                />
              </div>

              <button type="submit" title="Start buying" className="bg-my-blue absolute right-4 py-2  px-6 lg:py-3 rounded-full font-semibold text-my-primary transition-all hover:translate-x-1 ease-linear"><span className="hidden md:block">Travaillons </span>
              <span className="block md:hidden">
                <Image className="w-8 h-8 text-white" src="/icons/send.svg" alt="send icon"
				height={32}
				width={32}
				 /></span></button>
            </div>
            <div className="mt-12">
                  <p>Nous créons des <span className="text-my-blue underline  pointer"><a href="#">Sucess Stories</a></span></p>
                  <div className="flex items-center mt-5">
                    <Image className=" w-10 h-10 rounded-full" src="/images/avatar.webp" alt="user"
					height={40}
					width={40}
					 />
                    <Image className="border-my-primary border-4 border-solid ml-[-12px] w-12 h-12 rounded-full" src="/images/avatar-1.webp" alt="user" height={48} width={48} />
                    <Image className="border-my-primary border-4 border-solid ml-[-20px] w-12 h-12 rounded-full" src="/images/avatar-2.webp" alt="user" height={48} width={48} />
                    <Image className="border-my-primary border-4 border-solid ml-[-20px] w-12 h-12 rounded-full" src="/images/avatar-3.webp" alt="user" height={48} width={48} />
                    <Image className="border-my-primary border-4 border-solid ml-[-20px] w-12 h-12 rounded-full" src="/images/avatar-4.webp" alt="user" height={48} width={48} />

                  </div>
                </div>
          </div>
          <Image className="lg:w-[45%]" src="/images/team.svg" alt="team"  height={500} width={500} />
        </div>

      </div>
    </>
  )
}

export default Hero
