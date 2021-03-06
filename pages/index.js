import getCMSStaticProps from '../lib/get-cms-static-props'
import withCMSPage from '../lib/with-cms-page'
import CMS from '../lib/cms'

import Header from '../components/header'
import Footer from '../components/footer'
import PostPreviews from '../components/post-previews'

import styles from '../styles/main.module.css'

import { containerStyle } from '../config/constants'

const Page = withCMSPage(() => {
  return <>
    <div className={containerStyle}>
      <Header/>
      <PostPreviews/>
    </div>
    <Footer/>
  </>
})

export default Page

export async function getStaticProps() {
  const props = await getCMSStaticProps(Page)
  return { props, unstable_revalidate: 5 }
}
