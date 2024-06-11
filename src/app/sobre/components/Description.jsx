import Image from 'next/image'

export default function Description() {
  return (
    <div className='flex flex-col lg:flex-row items-center lg:items-end justify-center gap-8 mt-16 lg:mt-[167px]'>
      <div className='w-[400px] h-[406px]  md:w-[400px] md:h-[406px] lg:w-[500px] lg:h-[508px] xl:w-[740px] xl:h-[760px]'>
        <Image 
          src={'/images/Image.png'} 
          alt="" 
          layout='responsive' 
          width={740} 
          height={760} 
          className='object-cover'
        />
      </div>
      <div className=''>
        <h2 className='font-grotesk text-base md:text-xl max-w-[400px] md:max-w-[488px] font-normal'>
          Ajudo empresas e indivíduos a transformar suas ideias em realidade com
          soluções personalizadas. Especializado em criar experiências digitais
          inovadoras, combino design elegante, animações interativas e
          usabilidade intuitiva. Cada projeto é uma oportunidade de explorar
          novos horizontes, sempre colocando a qualidade em primeiro lugar
        </h2>
      </div>
    </div>
  )
}
