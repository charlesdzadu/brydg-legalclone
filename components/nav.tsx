const Nav = () => {
  return (
    <>
      <div className="flex justify-between items-center py-10 text-my-primary font-semibold">
        <h1 className="text-xl">LegalClone </h1>
        <ul className="flex gap-10 items-center ">
          <li>
            <a href="#">Accueil </a>
          </li>

          <li>
            <a href="#">A propos </a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
        </ul>
        <a className="border-[1px] border-solid border-my-secondary px-6 py-2 shadow-sm shadow-my-secondary" href="#">Rejoingnez nous</a>
      </div>
    </>
  )
}

export default Nav
