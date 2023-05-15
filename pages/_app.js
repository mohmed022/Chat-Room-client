import Layout from "../components/Layout/Layout"
import "../styles/globals.css"
import "../styles/StyleAcc.css"
import "../styles/MyFromwork/background-color.css"
import "../styles/MyFromwork/border-radius.css"
import "../styles/MyFromwork/border.css"
import "../styles/MyFromwork/d-flex.css"
import "../styles/MyFromwork/font-size.css"
import "../styles/MyFromwork/height.css"
import "../styles/MyFromwork/lib_video.css"
import "../styles/MyFromwork/Loding.css"
import "../styles/MyFromwork/Rootfromwork.css"
import "../styles/MyFromwork/shadow.css"
import "../styles/MyFromwork/text.css"
import "../styles/MyFromwork/transform.css"
import "../styles/MyFromwork/width.css"
import "../styles/MyFromwork/Main.css"
import "../styles/MyFromwork/parent_ChatRoom.css"

import { Provider, useSelector } from 'react-redux'
import Store from '../components/Store/Store'
import "animate.css/animate.min.css";
import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }) {

  return (
    <Provider store={Store}>
      <Layout >
         <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
