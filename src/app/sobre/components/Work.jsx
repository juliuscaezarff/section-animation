import Image from 'next/image'

export default function Work() {
  return (
    <div className='mt-[167px] mx-auto w-full max-w-[1885px] px-8 pb-32 lg:pb-48'>
      <h1 className="text-[40px] lg:text-[64px] text-start font-grotesk mx-auto w-full max-w-[1885px] 2xl:px-32">Eu ajudo você em...</h1>
      <div className='flex flex-col gap-5 lg:gap-[110px] lg:flex-row lg:items-center lg:justify-center mt-10 lg:mt-20'>
        <div className='flex flex-col w-[318px h[267px] mt-8'>
          <p className='text-base font-grotesk text-gray-500'>01</p>
          <Image
            src={'/images/Line.png'}
            alt=""
            width={280}
            height={0}
            className="mt-4 w-full"
          />
          <h1 className='font-grotesk font-medium text-3xl lg:text-[40px] mt-5'>Design</h1>
          <p className='text-[18px] lg:text-xl font-grotesk font-normal max-w-[390px] lg:max-w-[445px] mt-6'>
            Lorem ipsum dolor sit amet. Sed quibusdamunde cumque et esse quas et
            dolorum necessitatibus ad autem provident qui provident molestiae
            non saepe reiciendis!
          </p>
        </div>
        <div className='flex flex-col w-[318px h[267px] mt-8'>
          <p className='text-base font-grotesk text-gray-500'>02</p>
          <Image
            src={'/images/Line.png'}
            alt=""
            width={280}
            height={0}
            className="mt-4 w-full"
          />
           <h1 className='font-grotesk font-medium text-3xl lg:text-[40px] mt-5'>Criação</h1>
          <p className='text-[18px] lg:text-xl font-grotesk font-normal max-w-[390px] lg:max-w-[445px] mt-6'>
            Lorem ipsum dolor sit amet. Sed quibusdamunde cumque et esse quas et
            dolorum necessitatibus ad autem provident qui provident molestiae
            non saepe reiciendis!
          </p>
        </div>
        <div className='flex flex-col w-[318px h[267px] mt-8'>
          <p className='text-base font-grotesk text-gray-500'>03</p>
          <Image
            src={'/images/Line.png'}
            alt=""
            width={280}
            height={0}
            className="mt-4 w-full"
          />
           <h1 className='font-grotesk font-medium text-3xl lg:text-[40px] mt-5'>Desenvolvimento</h1>
          <p className='text-[18px] lg:text-xl font-grotesk font-normal max-w-[390px] lg:max-w-[445px] mt-6'>
            Lorem ipsum dolor sit amet. Sed quibusdamunde cumque et esse quas et
            dolorum necessitatibus ad autem provident qui provident molestiae
            non saepe reiciendis!
          </p>
        </div>
      </div>
    </div>
  )
}
