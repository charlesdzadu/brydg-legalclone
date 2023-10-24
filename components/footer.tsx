const Footer = () => {
  return (
    <>
    <div className="flex flex-col gap-4  py-10">
    <div className=" w-fullflex flex-col gap-4  md:flex-row md:justify-between w-full mx-auto max-w-screen-2xl px-5 ">
        <h1 className="w-full md:w-5/12 text-2xl font-semibold text-my-bold">
          LegalClone{' '}
        </h1>
        <div className="flex flex-col md:flex-row md:justify-between md:w-7/12 w-full mt-10">
          <ul>
            <li>
              <a href="#">Accueil</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">A propos </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between   w-full mx-auto max-w-screen-2xl px-5">
        <div></div>
        <p>©LegalClone 2023 </p>
        <p>Tous droits réservés</p>
      </div>
    </div>
      
    </>
  )
}
export default Footer
