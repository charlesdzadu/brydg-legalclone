const Feature = () => {
    
  return (
    <>
      <section className="mt-32 w-full mx-auto max-w-screen-2xl px-5">
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-my-bold dark:text-wite md:text-4xl xl:text-5xl">
              Faire grandir les startups et entreprises
            </h2>
            <p className="mx-auto mt-6  md:w-3/4 lg:w-3/5">
              Une équipe en pleine croissance ne signifie pas nécessairement des
              difficultés de croissance. Confidentialité et outil adapté à
              chaque étape de votre parcours - LegalClone - taille de
              l'entreprise
            </p>
            <div
              
              className=" mx-auto mt-12 mb-12 grid w-auto grid-cols-3 items-center gap-x-1 overflow-hidden rounded-full border bg-gray-100 border-gray-200 p-2 text-my-text dark:border-opacity-60  dark:bg-my-bold dark:text-my-primary sm:w-max "
            >
              
              <button
               
                className="   rounded-full py-3 px-4 hover:text-my-blue bg-white "
              > First tab  </button>
              <button
                
                className="  rounded-full py-3 px-4 hover:text-my-blue "
              >Second tab</button>
              <button
              
                className="   rounded-full py-3 px-4 hover:text-my-blue "
              >Third tab</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Feature
