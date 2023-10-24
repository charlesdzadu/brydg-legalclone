const Feature = () => {
  return (
    <>
      <section className="mt-32  w-full mx-auto max-w-screen-2xl px-5 lg:px-20">
        <div className="text-center flex flex-col items-center">
          <h2 className="text-3xl font-bold text-my-bold dark:text-wite md:text-4xl xl:text-5xl">
            Faire grandir les startups et entreprises
          </h2>
          <p className="mx-auto mt-6 mb-12 md:w-3/4 lg:w-3/5">
            LegalClone est un outil en ligne de gestion de carrières créatives.
            Il vous permet de gérer les tâches chronophages du quotidien pour
            que vous restiez concentrés sur la création.
          </p>
          {/* TAB */}
          <div className="grid grid-cols-3 gap-6 items-center bg-gray-100 mx-auto w-auto   px-2 py-[3px] rounded-full border-gray-200 text-my-text ">
            <button className="bg-white hover:text-my-blue rounded-full py-3 px-4 ">
              {' '}
              Caractéristique 1{' '}
            </button>
            <button className="active:bg-white hover:text-my-blue rounded-full py-3 px-4 ">
              {' '}
              Caractéristique 2
            </button>
            <button className="active:bg-white hover:text-my-blue rounded-full py-3 px-4 ">
              {' '}
              Caractéristique 3
            </button>
          </div>
          {/* CAPTURE  */}
          <div className="mt-32 w-full  flex flex-col md:flex-row items-center gap-10">
            <div className=" md:w-1/2 flex flex-col items-start gap-5 text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-my-bold">
                Make work flow across teams while connecting back to company
                goals
              </h1>
              <p >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
                reprehenderit officia, cupiditate nesciunt impedit animi modi
                pariatur! Earum veritatis accusamus atque perspiciatis totam
                excepturi accusantium. Vero veniam dicta fugit perferendis.
              </p>
              <div className="flex items-center gap-8">
                <div className="border-gray-200 border-solid border-[1px] p-4 rounded-3xl h-20 w-20 ">
                  <img
                    className="w-10 h-10  "
                    src="/icons/community.svg"
                    alt="Community"
                  />
                </div>

                <div className="text-left mt-5">
                  <h2 className="text-lg text-my-bold font-bold">Ensemble comme un</h2>
                  <p>Accusantium nemo perspiciatis delectus atque autem!</p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="border-gray-200 border-solid border-[1px] p-4 rounded-3xl h-20 w-20 ">
                  <img
                    className="w-10 h-10  "
                    src="/icons/intelligence-assistant.svg"
                    alt="assistance icon"
                  />
                </div>
                <div className="text-left">
                  <h2 className="text-lg text-my-bold font-bold">Ensemble comme un</h2>
                  <p>Accusantium nemo perspiciatis delectus atque autem!</p>
                </div>
              </div>
            </div>
            {/* CAPTURE D'ECRAN */}
            <div className="h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20 bg-gray-100 border  ">
              {/* panel 1   */}
                <div className="">
                  <img className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl sm:h-[28rem]  " src="/images/tailus-home.webp" alt="capture d'écran LegalClone" />
                </div>
            </div>
          </div>
        </div>

        {/* CTA  */}

        <div className="mt-32 md:flex gap-12">
          <div className="md:w-5/12 lg:w-1/2">
          <img src="/images/login.webp" alt="ecran de connexion" />
          </div>
           
            <div className="md:w-5/12 lg:w-1/2 flex flex-col gap-8 mb-32">
              <h1 className="text-3xl  font-bold text-my-bold md:text-4xl xl:text-5xl">Development is carried out by passionate developers</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique saepe error id nemo animi ducimus eveniet odio, voluptate, laborum nihil deserunt aspernatur accusantium ratione pariatur tempora, deleniti eum cupiditate quo.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quae?</p>
              <a className="bg-my-blue px-6 py-4 text-white font-bold rounded-full self-start" href="#">Commençons</a>
            </div>
        </div>
        {/* FONCTIONNALITES */}
      </section>
      <section className=" relative mt-32 w-full mx-auto max-w-screen-2xl text-center px-5 ">
        <div className="absolute inset-0 top-32 opacity-50">
        <div className=" bg-gradient-to-br from-my-blue   to-purple-400 blur-[106px]   h-60"></div>
        <div className=" bg-gradient-to-r from-cyan-400  to-sky-300  blur-[106px] h-40 "></div>
        </div>
    
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
                Un assistant virtuel qui s'occupe de vous positionner sur les
                évènements internationaux liés à votre art.
              </p>
            </div>
            {/* FEATURE 3 */}
            <div className="flex flex-col justify-center items-center gap-5 rounded-3xl bg-white border border-gray-100 px-8 py-12 shadow-2xl shadow-gray-600/10">
              <img
                className="w-16 h-16 "
                src="/icons/checklist.svg"
                alt="icon assistance"
              />
              <h1 className="text-2xl font-semibold text-my-bold">Legal</h1>
              <p className="text-base text-gray-600">
                Une checklist des étapes à suivre pour protéger votre oeuvre en
                tous points. De l'ideation à la creation
              </p>
            </div>
            {/* FEATURE 4  */}
            <div className="flex flex-col justify-center items-center gap-5 rounded-3xl bg-white border border-gray-100 px-8 py-12 shadow-2xl shadow-gray-600/10">
              <img
                className="w-16 h-16  "
                src="/icons/community.svg"
                alt="icon community"
              />
              <h1 className="text-2xl font-semibold text-my-bold">Communité</h1>
              <p className="text-base text-gray-600">
                Un mur qui rassemble vos projets publiés sur LC ou sur vos
                plateformes préférées de distribution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Feature
