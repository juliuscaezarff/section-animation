import Link from 'next/link'
import React from 'react'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'

export default function Content() {
  return (
    <div className='bg-[#141516] py-8 px-12 h-full w-full flex flex-col justify-between'>
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
      <Link href={"/"} className="text-[8.04vw] leading-[0.8] mt-10">Vamos Juntos Criar</Link>
      <p>©copyright</p>
    </div>
  )
}

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-20 text-[#CECCD7]">
      <div className="flex flex-col gap-2">
      <h3 className='mb-2 uppercase text-[#ffffff80]'>Navegação</h3>
        <p>Início</p>
        <p>Projetos</p>
        <p>Sobre</p>
        <p>Contato</p>
      </div>
      <div className="flex flex-col gap-2">
      <h3 className='mb-2 uppercase text-[#ffffff80]'>Links</h3>
        <Link className='flex items-center gap-1 font-General font-semibold text-xl' href={"https://www.linkedin.com/in/julius-caezar/"} target="_blank"><ArrowTopRightIcon /> Whatsaap</Link>
        <Link className='flex items-center gap-1 font-General font-semibold text-xl' href={"/"}><ArrowTopRightIcon /> Linkedin</Link>
      </div>
    </div>
  )
}
