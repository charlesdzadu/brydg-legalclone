const Hero = () => {
  return (
    <>
      <div className="w-full mx-auto max-w-screen-2xl px-5 sm:px-20 pt-40 flex flex-col items-center text-center lg:text-left lg:items-start  font-custom">
        <h1 className="text-[#00325E] text-5xl sm:text-6xl lg:text-7xlfont-bold  dark:text-white">
          Design, Build,{' '}
          <span className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-my-blue to-purple-400">
            Scale
          </span>
        </h1>

        <div className=" flex flex-col gap-10 lg:gap-20 lg:flex-row items-center  ">
          <div className="lg:w-[55%]">
            <p className="mt-12  text-lg sm:text-xl font-thin  text-my-text dark:text-gray-300">
              Computers used to be magical. But much of that magic has been lost
              over time, replaced by subpar tools and practices that slow teams
              down and hold great work back.
            </p>
            <div className=" relative mt-10 flex items-center justify-between p-6 border-my-primary border-2 shadow-md rounded-full dark:border-white/10">
              <div className="flex items-center gap-4">
                <img className="w-6 h-6" src="/icons/envelope.svg" alt="envelope" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Votre adresse mail "
                  className="outline-none "
                />
              </div>

              <button type="submit" title="Start buying" className="bg-my-blue absolute right-4 py-2  px-6 lg:py-3 rounded-full font-semibold text-my-primary"><span className="hidden md:block">Travaillons </span>
              <span className="block md:hidden">
                <img className="w-8 h-8 text-white" src="/icons/send.svg" alt="send icon" /></span></button>
            </div>
            <div className="mt-12">
                  <p>La plus talentueuse <span className="text-my-blue underline  pointer"><a href="#">Equipe</a></span></p>
                  <div className="flex items-center mt-5"> 
                    <img className=" w-10 h-10 rounded-full" src="/images/avatar.webp" alt="user" />
                    <img className="border-my-primary border-4 border-solid ml-[-8px] w-12 h-12 rounded-full" src="/images/avatar-1.webp" alt="user" />
                    <img className="border-my-primary border-4 border-solid ml-[-8px] w-12 h-12 rounded-full" src="/images/avatar-2.webp" alt="user" />
                    <img className="border-my-primary border-4 border-solid ml-[-8px] w-12 h-12 rounded-full" src="/images/avatar-3.webp" alt="user" />
                    <img className="border-my-primary border-4 border-solid ml-[-8px] w-12 h-12 rounded-full" src="/images/avatar-4.webp" alt="user" />
                    
                  </div>
                </div>
          </div>
          <img className="lg:w-[45%]" src="/images/team.svg" alt="team" />
        </div>
        
      </div>
    </>
  )
}

export default Hero
