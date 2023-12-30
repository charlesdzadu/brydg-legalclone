const Footer = () => {
  return (
    <>
      <div className="flex flex-col gap-4 text-center py-10 mt-24">

        <div className="flex flex-col gap-2 md:flex-row md:justify-between   w-full mx-auto max-w-screen-2xl px-5">
        <div>
		<h1 className="w-full md:w-5/12 text-2xl font-semibold text-my-bold text-left">
            LegalClone{' '}
          </h1>
        </div>
        <p>©LegalClone 2023 </p>
        <p>Tous droits réservés</p>
      </div>
      </div>
    </>
  )
}
export default Footer
