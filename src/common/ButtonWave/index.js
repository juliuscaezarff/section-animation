import Image from 'next/image'
import Link from 'next/link'

import Magnetic from '../Magnetic'

export function ButtonWave({ children }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Magnetic>
        <Link href={'/project'} className="relative w-56 h-56 block">
          <Image
            src="/images/Background.svg"
            alt="aaaa"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              width="220"
              height="220"
              viewBox="0 0 220 220"
              className="absolute"
            >
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="fill-current text-white font-medium text-lg"
              >
                {children}
              </text>
            </svg>
          </div>
        </Link>
      </Magnetic>
    </div>
  )
}
