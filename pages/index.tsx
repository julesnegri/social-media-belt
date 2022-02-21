import type { NextPage } from 'next'
import Link from 'next/link'
import Seo from 'components/Seo'

const Home: NextPage = () => {
  return (
    <div>
      <Seo title='Social Media Belt' description='Social Media Belt' />
      <ul>
        <li>
          <Link href='/app'>
            <a>App</a>
          </Link>
        </li>
        <li>
          <Link href='/devpleno'>
            <a>Tenant devpleno</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
