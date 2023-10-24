const Footer = () => {
  return (
    <>
      <div className="flex flex-col gap-4 text-center py-10">
        <div className=" flex flex-col gap-4  md:flex-row md:justify-between md:items-start w-full mx-auto max-w-screen-2xl px-5 ">
          <h1 className="w-full md:w-5/12 text-2xl font-semibold text-my-bold">
            LegalClone{' '}
          </h1>
          <div className="flex flex-col gap-2 md:flex-row md:justify-between md:w-7/12 w-full ">
            <ul>
              <li>
                <a className="font-semibold text-my-text " href="#">Accueil</a>
              </li>
            </ul>
            <ul>
              <li>
                <a className="font-semibold text-my-text " href="#">A propos </a>
              </li>
            </ul>
            <ul>
              <li>
                <a className="font-semibold text-my-text " href="#">Services</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:justify-between   w-full mx-auto max-w-screen-2xl px-5">
        <div>
            <img src="" alt="" />
            Social media
        </div>
        <p>©LegalClone 2023 </p>
        <p>Tous droits réservés</p>
      </div>
      </div>
    </>
  )
}
export default Footer
