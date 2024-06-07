// Local fonts
import localFont from 'next/font/local'

const general = localFont({
  src: [
    {
      path: './GeneralSans/GeneralSans-Extralight.woff2',
      weight: '200',
      style: 'normal'
    },
    {
      path: './GeneralSans/GeneralSans-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: './GeneralSans/GeneralSans-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './GeneralSans/GeneralSans-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './GeneralSans/GeneralSans-SemiBold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: './GeneralSans/GeneralSans-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
  ],
  display: 'swap',
  variable: '--font-general'
})

const grotesk = localFont({
  src: [
    {
      path: './CabinetGrotesk/CabinetGrotesk-Thin.woff2',
      weight: '100',
      style: 'normal'
    },
    {
      path: './CabinetGrotesk/CabinetGrotesk-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: './CabinetGrotesk/CabinetGrotesk-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './CabinetGrotesk/CabinetGrotesk-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './CabinetGrotesk/CabinetGrotesk-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: './CabinetGrotesk/CabinetGrotesk-ExtraBold.woff2',
      weight: '800',
      style: 'normal'
    },
  ],
  display: 'swap',
  variable: '--font-grotesk'
})

export { general, grotesk }