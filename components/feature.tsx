const Feature = () => {
  return (
    <>
      <section className="mt-32  w-full mx-auto max-w-screen-2xl px-5">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-my-bold dark:text-wite md:text-4xl xl:text-5xl">
            Faire grandir les startups et entreprises
          </h2>
          <p className="mx-auto mt-6 mb-12 md:w-3/4 lg:w-3/5">
            LegalClone est un outil en ligne de gestion de carrières créatives.
            Il vous permet de gérer les tâches chronophages du quotidien pour
            que vous restiez concentrés sur la création.
          </p>
          <a
            className=" mx-auto mt-12 mb-12  rounded-full border bg-my-blue border-gray-200  text-white dark:border-opacity-60 px-8 py-4 lg:text-lg  font-semibold "
            href="#"
          >
            {' '}
            Commencer
          </a>
        </div>
      </section>
      <section className=" relative mt-64 w-full mx-auto max-w-screen-2xl text-center px-5 ">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 from-20% via-cyan-400 via-30% to-sky-300 to-90% blur-[106px] h-40"></div>
        <div className="relative">
          <h1 className=" font-bold text-my-bold text-3xl md:text-4xl xl:text-5xl ">
            Notre mission ? Gérer vos créations !
          </h1>
          <p className="mt-4 lg:mt-6 mx-auto  md:w-3/4 lg:w-3/5">
            Un outil pour concevoir vos projets de l'idéation à leur mise à
            l'échelle.Un manager complet pour votre carrière créative
          </p>
         
          <div className="mt-16 grid gap-8 sm:mx-auto sm:w-2/3 md:w-full md:grid-cols-2 xl:grid-cols-4">
             {/* FEATURE 1  */}
            <div className="flex flex-col  items-center gap-5 rounded-3xl bg-white border border-gray-100 px-8 py-12 shadow-2xl shadow-gray-600/10">
              <img
                className="w-16 h-16  "
                src="/icons/project.svg"
                alt="icon project"
              />
              <h1 className="text-2xl font-semibold text-my-bold">
                Project composer
              </h1>
              <p className="text-base text-gray-600">
                Un outil pour concevoir vos projets de l'idéation à leur mise à
                l'échelle.
              </p>
            </div>
            {/* FEATURE 2  */}
            <div className="flex flex-col justify-center items-center gap-5 rounded-3xl bg-white border border-gray-100 px-8 py-12 shadow-2xl shadow-gray-600/10">
              <img
                className="w-16 h-16 "
                src="/icons/intelligence-assistant.svg"
                alt="icon assistance"
              />
              <h1 className="text-2xl font-semibold text-my-bold">
              Clone Assist
              </h1>
              <p className="text-base text-gray-600">
              Un assistant virtuel qui s'occupe de vous positionner sur les évènements internationaux liés à votre art.
              </p>
            </div>
            {/* FEATURE 3 */}
            <div className="flex flex-col justify-center items-center gap-5 rounded-3xl bg-white border border-gray-100 px-8 py-12 shadow-2xl shadow-gray-600/10">
              <img
                className="w-16 h-16 "
                src="/icons/checklist.svg"
                alt="icon assistance"
              />
              <h1 className="text-2xl font-semibold text-my-bold">
              Legal
              </h1>
              <p className="text-base text-gray-600">
              Une checklist des étapes à suivre pour protéger votre oeuvre en tous points.
              De l'ideation à la creation
              </p>
            </div>
            {/* FEATURE 4  */}
            <div className="flex flex-col justify-center items-center gap-5 rounded-3xl bg-white border border-gray-100 px-8 py-12 shadow-2xl shadow-gray-600/10">
              <img
                className="w-16 h-16  "
                src="/icons/community.svg"
                alt="icon community"
              />
              <h1 className="text-2xl font-semibold text-my-bold">
              Communité
              </h1>
              <p className="text-base text-gray-600">
              Un mur qui rassemble vos projets publiés sur LC ou sur vos plateformes préférées de distribution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Feature
