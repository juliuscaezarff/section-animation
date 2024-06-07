import { ButtonWave } from "@/common/ButtonWave";

export default function Description() {
  return (
    <section className="flex items-center justify-center gap-48 mt-[288px]">
      <div className="">
        <p className="mx-auto max-w-[982px] font-general text-[40px] dark:text-gray-400">
          Proporcionando o destaque de marcas com expertise, inovação e design
          magistral. Definindo o novo padrão de excelência, juntos.
        </p>
      </div>

      <div>
        <ButtonWave children={"sobre"}/>
      </div>
    </section>
  )
}
