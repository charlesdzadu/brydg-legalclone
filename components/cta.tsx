import Image from 'next/image'

const Cta = () => {
  return (
    <>
      <div className=" bg-gray-100 border border-gray-200 w-full mx-auto max-w-screen-2xl px-5 sm:px-20 pt-20 lg:text-left lg:items-start  font-custom rounded-3xl">
        <div className=" flex flex-col gap-10 lg:gap-20 lg:flex-row items-center  ">
          <div className="lg:w-[55%]">
            <h1 className="text-my-bold text-3xl md:text-4xl xl:text-5xl font-bold  dark:text-white">
			Rejoignez-nous pour Débloquer le potentiel de votre entreprise
            </h1>
            <p className="mt-12  text-lg sm:text-xl    text-my-text dark:text-gray-300">
			Nous sommes bien plus qu&apos;un outil, c&apos;est un compagnon essentiel pour les esprits créatifs. Rejoignez notre communauté pour découvrir comment nous vous guidons à travers chaque étape de votre parcours artistique. Protégez vos idées, promouvez votre travail, et réalisez vos rêves créatifs sans limites.
            </p>
            <div className=" relative mt-10 flex items-center justify-between p-6 border-my-primary bg-white border-2 shadow-md rounded-full dark:border-white/10">
              <div className="flex items-center gap-4">
                <Image
                  className="w-6 h-6"
                  src="/icons/envelope.svg"
                  alt="envelope"
				  height={24}
				  width={24}
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
                className="bg-my-blue absolute right-4 py-[3px]  px-6 lg:py-3 rounded-full font-semibold text-my-primary transition-all hover:translate-x-1 ease-linear"
              >
                <span className="hidden md:block">Rejoindre maintenant </span>
                <span className="block md:hidden">
                  <Image
                    className="w-8 h-8 text-white"
                    src="/icons/send.svg"
                    alt="send icon"
					height={32}
					width={32}
                  />
                </span>
              </button>
            </div>
          </div>
          <Image className="lg:w-[45%]" src="/images/login.webp" alt="team" height={500} width={500} />
        </div>
      </div>
    </>
  )
}

export default Cta
