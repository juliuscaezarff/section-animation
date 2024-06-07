import Image from 'next/image'

export default function Home() {
  return (
    <section className="flex flex-col justify-center mx-auto w-full max-w-[1885px] pt-1 px-4">
      <div className="w-full h-[700px]">
        <Image
          src={'/images/image-exemple.png'}
          alt="image"
          width={400}
          height={670}
          className="w-full h-full"
        />
      </div>

      {/* ir diminuindo o tamnho do texto com breakpoints */}
      <div className="flex items-center justify-center w-full h-[230px]">
        <h1 className="text-center text-[220px] 2xl:text-[260px] font-general font-medium ">
          Julius Caesar
        </h1>
      </div>
    </section>
  )
}
