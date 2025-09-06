import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
// import { PagesProgressBar } from 'next-nprogress-bar'
// import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar';
import NextProgress from "next-progress";


export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <>
      <NextProgress delay={300} options={{ showSpinner: false }} />
      <Component {...pageProps} />
      {/* <ProgressBar
        height="4px"
        color="#fffd00"
        options={{ showSpinner: false }}
        shallowRouting
      /> */}
    </>
  )
}
