import Link from 'next/link'
import React from 'react'

export default function Content() {
  return (
    <div className='bg-[#4E4E5A] py-8 px-12 h-full w-full flex flex-col justify-between'>
        <Section1 />
        <Section2 />
    </div>
  )
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  )
}

const Section2 = () => {
  return (
    <div className="flex justify-between items-end text-[#CECCD7]">
      <h1 className="text-[8vw] leading-[0.8] mt-10">Vamos Juntos Criar</h1>
      <p>©copyright</p>
    </div>
  )
}

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-20 text-[#CECCD7]">
      <div className="flex flex-col gap-2">
        <p>Início</p>
        <p>Projetos</p>
        <p>Sobre</p>
        <p>Contato</p>
      </div>
      <div className="flex flex-col gap-2">
        <Link href={"https://www.linkedin.com/in/julius-caezar/"} target="_blank">Whatsaap</Link>
        <p>Linkedin</p>
      </div>
    </div>
  )
}
