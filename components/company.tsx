const Company = () =>{
    return(
        <>
            <div className="w-full mx-auto max-w-screen-2xl px-5 sm:px-20 mt-12 py-8 border-y border-gray-100 text-center dark:border-gray-800 md:py-12 xl:mt-20">
                <h1 className="text-my-text dark:text-white uppercase text-sm">Utilisées par les plus grosses entreprises </h1>

                <div className="flex flex-wrap gap-6 items-center justify-center brightness-75 contrast-200 grayscale dark:brightness-200 dark:contrast-0 sm:justify-between lg:gap-20 mt-8 ">
                    <img className="h-8 w-auto lg:h-10 lg:w-auto" src="/icons/airbnb.svg" alt="company logo" />
                    <img className="h-8 w-auto lg:h-10 lg:w-auto" src="/icons/coty.svg" alt="company logo" />
                    <img className="h-8 w-auto lg:h-10 lg:w-auto" src="/icons/ge.svg" alt="company logo" />
                    <img className="h-8 w-auto lg:h-10 lg:w-auto" src="/icons/lilly.png" alt="company logo" />
                    <img className="h-8 w-auto lg:h-10 lg:w-auto" src="/icons/microsoft.svg" alt="company logo" />
                    
                </div>
            </div>
        </>
    )
} 

export default Company