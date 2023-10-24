const Cta = () => {
  return (
    <>
      <div className=" bg-gray-100 border border-gray-200 w-full mx-auto max-w-screen-2xl px-5 sm:px-20 pt-20 lg:text-left lg:items-start  font-custom">
        <div className=" flex flex-col gap-10 lg:gap-20 lg:flex-row items-center  ">
          <div className="lg:w-[55%]">
            <h1 className="text-my-bold text-3xl md:text-4xl xl:text-5xl font-bold  dark:text-white">
              One step to improve your workflow
            </h1>
            <p className="mt-12  text-lg sm:text-xl font-thin  text-my-text dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              nulla dolor aliquam, repellat iure sit reprehenderit
              necessitatibus
            </p>
            <div className=" relative mt-10 flex items-center justify-between p-6 border-my-primary bg-white border-2 shadow-md rounded-full dark:border-white/10">
              <div className="flex items-center gap-4">
                <img
                  className="w-6 h-6"
                  src="/icons/envelope.svg"
                  alt="envelope"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Votre adresse mail "
                  className="outline-none  bg-inherit"
                />
              </div>

              <button
                type="submit"
                title="Start buying"
                className="bg-my-blue absolute right-4 py-[3px]  px-6 lg:py-3 rounded-full font-semibold text-my-primary"
              >
                <span className="hidden md:block">Travaillons </span>
                <span className="block md:hidden">
                  <img
                    className="w-8 h-8 text-white"
                    src="/icons/send.svg"
                    alt="send icon"
                  />
                </span>
              </button>
            </div>
          </div>
          <img className="lg:w-[45%]" src="/images/login.webp" alt="team" />
        </div>
      </div>
    </>
  )
}

export default Cta
