import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import IndexChatRoom from "../components/Chat3/IndexChatRoom";
import Loding from "../components/Loding/Loding";
import Account from '../components/Account/Account';


const Index = () => {
 const {UserFulterArry , isLoadingUser , errorUser} = useSelector((state) => state.UserFulterArry);
 useEffect(() => {
  console.log("UserFulterArry",UserFulterArry.LastName)

 }, [UserFulterArry])
 
//  access
  return (
    <div>
      {isLoadingUser ? <Loding h={"100vh"} w={"100%"}/> 
      : UserFulterArry.user_name ? <IndexChatRoom/> 
      : <Account/>}
    </div>
  );
};

export default Index;






















// const Index = ({ auth}) => {
//   const {UserFulterArry} = useSelector((state) => state.UserFulterArry);
//   const handleButtonClick = (e) => {
//     window.scrollTo(e, window.innerHeight);
//   };
//   return (
//     <>
//       <Head>
//          {/* <html dir="rtl" /> */}
//          <title>Home</title>
//          <meta property="og:title" dir="rtl" lang="ar" content="My page title" key="title" />
//       </Head>
//       <div className='div-hero min-h-screen '  style={{ backgroundImage: `url("./homebg.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center', width: "100%" }}>
//          <div class="circles block">
//            <div onClick={()=>{handleButtonClick(100)}} class="circle"></div>
//            <div onClick={()=>{handleButtonClick(200)}} class="circle"></div>
//            <div onClick={()=>{handleButtonClick(300)}} class="circle"></div>
//            <div onClick={()=>{handleButtonClick(400)}} class="circle"></div>
//            <div onClick={()=>{handleButtonClick(500)}} class="circle"></div>
//          </div>
//          <Hero />
//          <Values/>
//          <SubscriptionSteps />
//          <ViewUn type={UserFulterArry&&UserFulterArry.is_staff} user={UserFulterArry&&UserFulterArry} auth={auth}/>
//          <Student />
//          <MoreInfoModal/>
//     </div> 
//     </>
//   );
// };

// export default Index;
