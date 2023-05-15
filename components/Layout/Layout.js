import Head from "next/head";
import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from './Footer';
import Navbar from './Navbar';
import 'react-toastify/dist/ReactToastify.css';

import { getUserFulterArry, getUserList } from "../Store/redux/Account/UserListSlice";
import { getRooms } from "../Store/redux/Chats/RoomsSlice";
import { fetchMessages } from "../Store/redux/Chats/messageSlice";
import { UseGETNEWMSG } from "../Chat3/ContentChatRoom/_BodyChat/Use_Col_Fun/Use_GET_NEW_MSG";
import IndexChatRoom from "../Chat3/IndexChatRoom";
import Toast from "./ToastContainer";
import { BasUrl } from "../Store/redux/GlobalLinks/GlobalLinks";

const Layout = (props) => {
    const {UserFulterArry} = useSelector((state) => state.UserFulterArry);
    const {activeChat} = useSelector((state) => state.activeChat);

    // console.log(UserFulterArry)

    const Despatch = useDispatch();
    useEffect(() => {
      Despatch(getUserList());
      Despatch(fetchMessages(activeChat));
      Despatch(getUserFulterArry(UserFulterArry));
      // Despatch(getMessage());
      Despatch(getRooms());


      

    }, [Despatch]);
   
    // console.log(activeChat)

    



  // start authTokens

    let [authTokens, setAuthTokens] = useState()
    let [loading, setLoading] = useState(true)
    useEffect(() => {
      setAuthTokens(localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    }, []);

    let updateToken = async () => {
      if (authTokens?.refresh){
        let response = await fetch(`${BasUrl}/api/token/refresh/`, {
          method:'POST',
          headers:{
              'Content-Type':'application/json'
          },
          body: JSON.stringify({'refresh':authTokens?.refresh})
      })
      

      let data = await response.json()
      
      if (response.status === 200){
          setAuthTokens(data)
          localStorage.setItem('authTokens', JSON.stringify(data))
          // console.log('refreshToken')

      }else{
          logoutUser()
          console.log('logged out')
      }

      if(loading){
          setLoading(false)
          // console.log('loadiiiiiiing')
      }
    }
  }


  let logoutUser = () => {
    setAuthTokens(null)
    // setUser(null)
    localStorage.removeItem('authTokens')
  }


  useEffect(()=> {
    // localStorage.removeItem('authTokens')

      if(loading){
        updateToken()
      }

      let fourMinutes = 1000 * 60 * 4

      let interval =  setInterval(()=> {
          if(authTokens){
            updateToken()
          }
      }, fourMinutes)
      return ()=> clearInterval(interval)

  }, [authTokens, loading])
  // end authTokens

  const {GetMessages,Get_Notification} = UseGETNEWMSG()


  const {RoomsArry} = useSelector((state) => state.RoomsArry);

  useEffect(() => {
    for (let i = 0; i < RoomsArry.length; i++) {
      GetMessages(RoomsArry[i].name , activeChat === null ? 0 : activeChat);
    }
  }, [activeChat , RoomsArry]);

  // console.log("authTokens",authTokens)



    return (
      <div className='' style={{background:"none" , marginTop:"64px"}}>
        <Toast/>
    <div className="">
        <input type="checkbox" id="chatBoxview" className="modal-toggle" />
        <div className="modal">
          <IndexChatRoom />
        </div>
      </div>
        {/* <Navbar /> */}
          {props.children}
          { UserFulterArry && (
                <>
                  <input type="checkbox" id="RoomChat" className="modal-toggle" />
                  <div className="modal" style={{opacity:"1" , backgroundSize:"100% , 100vh", backgroundRepeat:"no-repeat"}}>
                  </div>
 
                </>
              )}
        <Footer  />
      </div>
    );
}

export default Layout;

