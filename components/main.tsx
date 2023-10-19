import Line from '@/components/line'
const Main = () => {
  return (
    <>
      <div>
        <div className="w-full mx-auto max-w-screen-2xl flex flex-col px-5 pt-16 items-center">
          <div className=" flex w-full">
            <Line />
            <div className='w-full'>
                    <h1>Je suis le hero section</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
