import Image from "next/image"

const Feature = () => {
  return (
    <>
      <section className="mt-32  w-full mx-auto max-w-screen-2xl px-5 lg:px-20">
        <div className="text-center flex flex-col items-center">
          <h2 className="text-3xl font-bold text-my-bold dark:text-wite md:text-4xl xl:text-5xl">
            Faire grandir les startups et entreprises
          </h2>
          <p className="mx-auto text-xl mt-6 mb-12 md:w-3/4 lg:w-3/5 text-slate-500">
            LegalClone est un outil en ligne de gestion de carrières créatives.
            Il vous permet de gérer les tâches chronophages du quotidien pour
            que vous restiez concentrés sur la création.
          </p>
          {/* TAB */}
          <div className="grid grid-cols-3 gap-6 items-center bg-gray-100 mx-auto w-auto    py-2 px-2 rounded-full border-gray-200 text-my-text ">
            <button className="bg-white hover:text-my-blue rounded-full py-4 px-4  font-bold">
              {' '}
              Protection{' '}
            </button>
            <button className="active:bg-white hover:text-my-blue rounded-full py-3 px-4 ">
              {' '}
              Extensions
            </button>
            <button className="active:bg-white hover:text-my-blue rounded-full py-3 px-4 ">
              {' '}
              Investisseurs
            </button>
          </div>
          {/* CAPTURE  */}
          <div className="mt-32 w-full  flex flex-col md:flex-row items-center gap-10">
            <div className=" md:w-1/2 flex flex-col items-start gap-5 text-left">
              <h1 className="text-2xl md:text-5xl font-bold text-my-bold">
			  Garantissez la Sécurité  et la <br /> Protection de Vos Innovations
              </h1>
              <p  className="text-slate-500">
			  Profitez en toute simplicité grâce de nos service exclusif, qui vous permettent de vous concentrer sur la croissance de votre business. De plus, avec notre outil de demande de brevets, protégez vos précieuses innovations sans tracas ni complexités juridiques. Nous vous offrons la tranquillité d&apos;esprit, vous permettant de bâtir et développer votre entreprise en toute confiance.
              </p>
              <div className="flex items-center gap-8">
                <div className="border-gray-200 border-solid border-[1px] p-4 rounded-3xl h-20 w-20 ">
                  <Image
                    className="w-10 h-10  "
                    src="/icons/community.svg"
                    alt="Community"
					height={40}
					width={40}
                  />
                </div>

                <div className="text-left mt-5">
                  <h2 className="text-lg text-my-bold font-bold">Enregistrement de X</h2>
                  <p className="text-slate-500">Simplifiez l&apos;enregistrement de votre entreprise.</p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="border-gray-200 border-solid border-[1px] p-4 rounded-3xl h-20 w-20 ">
                  <Image
                    className="w-10 h-10  "
                    src="/icons/intelligence-assistant.svg"
                    alt="assistance icon"
					height={40}
					width={40}
                  />
                </div>
                <div className="text-left">
                  <h2 className="text-lg text-my-bold font-bold">Demande de brevet</h2>
                  <p className="text-slate-500">Protégez vos innovations avec des demandes de brevets sans tracas !</p>
                </div>
              </div>
            </div>
            {/* CAPTURE D'ECRAN */}
            <div className="h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20 bg-gray-100 border  ">
              {/* panel 1   */}
                <div className="">
                  <Image className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl sm:h-[28rem]  " src="/images/tailus-home.webp" alt="capture d'écran LegalClone" height={320} width={384} />
                </div>
            </div>
          </div>
        </div>

        {/* CTA  */}

        <div className="mt-32 md:flex gap-12">
          <div className="md:w-5/12 lg:w-1/2">
          <Image src="/images/login.webp"  alt="ecran de connexion" height={800} width={800} />
          </div>

            <div className="md:w-5/12 lg:w-1/2 flex flex-col gap-8 mb-32">
              <h1 className="text-3xl  font-bold text-my-bold md:text-4xl xl:text-5xl">Un manager complet pour votre carrière créative</h1>
              <p className="text-slate-500">Imaginez avoir un allié infaillible pour piloter votre carrière créative vers de nouveaux sommets. Obtenez bien plus qu&apos;un simple outil ; vous avez à votre disposition un manager complet pour votre carrière créative. De la gestion de projets à l&apos;organisation de votre portfolio, cet outil tout-en-un simplifie chaque aspect de votre parcours créatif. Vous êtes en contrôle, et votre succès n&apos;a jamais été aussi à portée de main.</p>
              <p className="text-slate-500">
			  Ce n&apos;est pas seulement un outil, c&apos;est une transformation. Nous vous permettons de rester concentré sur ce qui compte le plus - votre créativité. Créez, gérez, et développez votre carrière avec confiance, tout en protégeant vos idées et vos droits. Un manager complet pour votre carrière créative vous attend, prêt à vous guider vers l&apos;excellence, à chaque étape du processus. Rejoignez-nous pour découvrir comment nous pouvons révolutionner votre carrière créative.
			  </p>
              <a className="bg-my-blue px-6 py-4 text-white font-bold rounded-full self-start transition-all hover:translate-x-1 ease-linear" href="#">Rejoindre Maintenant</a>
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
            Un outil pour concevoir vos projets de l&apos;idéation à leur mise à
            l&apos;échelle.Un manager complet pour votre carrière créative
          </p>

          <div className="mt-16 grid gap-8 sm:mx-auto sm:w-2/3 md:w-full md:grid-cols-2 xl:grid-cols-3">
            {/* FEATURE 1  */}

            {/* FEATURE 2  */}
            <div className="flex flex-col justify-center items-center gap-5 rounded-3xl bg-white border border-gray-100 px-20 py-12 shadow-2xl shadow-gray-600/10">
              <Image
                className="w-16 h-16 "
                src="/icons/intelligence-assistant.svg"
                alt="icon assistance"
				height={64}
				width={64}
              />
              <h1 className="text-2xl font-semibold text-my-bold">
                Clone Assist
              </h1>
              <p className=" text-gray-500 text-lg">
			  Un assistant virtuel qui s&apos;occupe de vous positionner sur les évènements internationaux liés à votre art. Nous surveillons en permanence les opportunités mondiales, les expositions, et les collaborations artistiques, vous permettant de briller à l&apos;échelle internationale. Votre carrière créative mérite une visibilité mondiale, et notre assistant virtuel est votre meilleur allié pour vous y conduire avec succès.
              </p>
            </div>
            {/* FEATURE 3 */}
            <div className="flex flex-col justify-center items-center gap-5 rounded-3xl bg-white border border-gray-100 px-20 py-12 shadow-2xl shadow-gray-600/10">
              <Image
                className="w-16 h-16 "
                src="/icons/checklist.svg"
                alt="icon assistance"
				height={64}
				width={64}
              />
              <h1 className="text-2xl font-semibold text-my-bold">Legal</h1>
              <p className="text-lg text-gray-600">
			  Une checklist complète des étapes à suivre pour protéger votre œuvre sous tous ses aspects. De l&apos;idéation à la création, Nous vous guidons à travers chaque phase cruciale. Assurez-vous que votre travail est sécurisé à tous les niveaux, des droits d&apos;auteur à la propriété intellectuelle. Protégez votre créativité avec notre assistance experte, à chaque étape de votre parcours artistique.
              </p>
            </div>
            {/* FEATURE 4  */}
            <div className="flex flex-col justify-center items-center gap-5 rounded-3xl bg-white border border-gray-100 px-20 py-12 shadow-2xl shadow-gray-600/10">
              <Image
                className="w-16 h-16  "
                src="/icons/community.svg"
                alt="icon community"
				height={64}
				width={64}
              />
              <h1 className="text-2xl font-semibold text-my-bold">Communauté</h1>
              <p className="text-lg text-gray-600">
			  Un mur virtuel qui rassemble harmonieusement tous vos projets publiés sur LC (ou d&apos;autres plateformes de distribution de votre choix). [Nom de la Plateforme] vous offre un espace centralisé pour présenter fièrement votre travail, quelle que soit votre source de publication. Montrez l&apos;étendue de votre créativité en un seul endroit, mettant en avant vos réalisations de manière convaincante et percutante.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Feature
