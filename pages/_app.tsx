import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import LayoutApp from '@/components/Layout/LayoutApp'
import LayoutTenant from '@/components/Layout/LayoutTenant'
import LayoutPublic from '@/components/Layout/LayoutPublic'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { pathname } = router
  let Layout = LayoutPublic
  if (pathname.indexOf('/app') === 0) {
    Layout = LayoutApp
  }
  if (pathname.indexOf('/[slug]') === 0) {
    Layout = LayoutTenant
  }
  // pathname:
  // - app
  // - slug
  // - ...

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
