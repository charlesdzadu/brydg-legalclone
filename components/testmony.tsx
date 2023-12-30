import Image from 'next/image'
const Testmony = () => {
  return (
    <>
      <div className="mx-auto px-5 my-12 md:my-40  sm:px-12 xl:max-w-6xl">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold dark:text-white text-my-bold">
			Ils nous font confiance
		  </h1>
          <p className="mt-6 mx-auto md:w-3/4 lg:w-3/5 dark:text-gray-300 text-slate-500">

			Chaque jour, nous aidons des milliers d&apos;entrepreneurs à créer et développer leur entreprise. Découvrez leurs histoires et rejoignez la communauté LegalClone.
          </p>
        </div>
        <div className="grid  mt-12 gap-8 md:grid-cols-2">
          {/* ENTREPRISE 1 */}
          <div className="rounded-3xl border border-gray-100 bg-white p-8  shadow-2xl shadow-gray-600/10 sm:col-span-2 sm:px-12 lg:col-span-1 lg:row-span-2">
            <div className="flex flex-col space-y-6 md:space-y-8">
              <Image
                className="h-12 w-auto mr-auto"
                src="/icons/airbnb.svg"
                alt="Logo de client "
				height={48}
				width={48}
              />
              <p className="text-my-text text-base md:text-xl md:leading-loose mt-10 ">
                <span className="font-serif">&quot;</span>Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Dolores qui sapiente repellat
                accusantium sed quis praesentium beatae accusamus dolore
                aspernatur asperiores earum sit, necessitatibus impedit
                deserunt! Unde sit ipsum in!
                <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Expedita, consequatur.
                <span className="font-serif">&quot;</span>
              </p>
              <div className="flex items-center gap-3 text-my-text mt-10">
                <Image
                  className="h-12 w-12 rounded-full"
                  src="/images/avatar-1.webp"
                  alt="photo de clein"
				  height={48}
				  width={48}
                />
                <div>
                  <h3 className="font-semibold">John DOE </h3>
                  <p>Product Designer</p>
                </div>
              </div>
            </div>
          </div>
          {/* ENTREPRISE 2  */}
          <div className="rounded-3xl border border-gray-100 bg-white p-8  shadow-2xl shadow-gray-600/10 ">
            <div className="flex flex-col space-y-6 md:space-y-8">
              <Image
                className="h-12 w-auto mr-auto"
                src="/icons/airbnb.svg"
                alt="Logo de client "
				height={48}
				width={48}
              />
              <p className="text-my-text text-base">
                <span className="font-serif">&quot;</span>Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Dolores qui sapiente repellat
                 .
                <span className="font-serif">&quot;</span>
              </p>
              <div className="flex items-center gap-3 text-my-text">
                <Image
                  className="h-12 w-12 rounded-full"
                  src="/images/avatar-1.webp"
                  alt="photo de client"
				  height={48}
				  width={48}
                />
                <div>
                  <h3 className="font-semibold">John DOE </h3>
                  <p>Product Designer</p>
                </div>
              </div>
            </div>
          </div>
          {/* ENTREPRISE 3 */}
          <div className="rounded-3xl border border-gray-100 bg-white p-8  shadow-2xl shadow-gray-600/10 ">
            <div className="flex flex-col space-y-6 md:space-y-8">
              <Image
                className="h-12 w-auto mr-auto"
                src="/icons/airbnb.svg"
                alt="Logo de client "
				height={48}
				width={48}
              />
              <p className="text-my-text text-base " >
                <span className="font-serif">&quot;</span>Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Dolores qui sapiente repellat
                accusantium.
                <span className="font-serif">&quot;</span>
              </p>
              <div className="flex items-center gap-3 text-my-text">
                <Image
                  className="h-12 w-12 rounded-full"
                  src="/images/avatar-1.webp"
                  alt="photo de clein"
				  height={48}
				  width={48}
                />
                <div>
                  <h3 className="font-semibold">John DOE </h3>
                  <p>Product Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testmony
