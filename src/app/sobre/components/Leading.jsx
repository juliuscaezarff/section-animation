import Image from 'next/image'

export default function Leading() {
  return (
    <div className="flex flex-col items-center justify-center mt-[80px]">
      <h1 className="text-left text-[5vw] font-general font-medium max-w-[350px] md:max-w-[600px] lg:max-w-[1000px] 2xl:max-w-[1330px]">
        Transformando ideias em realidade digital
      </h1>
      <div className="flex items-center justify-center gap-4 mt-16">
        <div className=''>
          <Image src={'/images/Line.png'} alt="" width={1512} height={0} className='w-[62vw]'/>
        </div>
        <Image
          src={'/images/scrolldown.png'}
          alt=""
          width={120}
          height={120}
          className="w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
        />
      </div>
    </div>
  )
}
