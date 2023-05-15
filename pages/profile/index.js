import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import EditProfile from "../../components/Add/EditProfile/EditProfile";
import Imguserprofile from "../../components/Profile/imguserprofile/imguserprofile";

import Stat from "../../components/Profile/Stat";

const Index = ({}) => {
  const {UserFulterArry} = useSelector((state) => state.UserFulterArry);
  return (
    <>


      <main class="profile-page bg-w">
        <section class="relative block" style={{height: "500px"}}>
          <div
            class="absolute top-0 w-full h-full bg-center bg-cover"
            style={{backgroundImage: "url(https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80)"}}>
            <span
              id="blackOverlay"
              class="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{height: "70px"}}
          >
        
          </div>
        </section>
        <section class="relative py-16 bg-w">

          <div class="container mx-auto px-4 ">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64 bg-w">
              <div class="px-6">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div class="relative">
                      <img
                        alt="..."
                        src="./assets/img/team-2-800x800.jpg"
                        class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                        style={{maxWidth: "150px"}}
                      />
                    </div>
                  </div>
                  <label htmlFor="pupeditprofile"  class="fa-solid fa-gear fs-33 p-5 cursor-pointer col-or z-30  p-abs left-0"></label>

                </div>
                <div class="text-center mt-12 lg:relative lg:-top-52 -top-40 p-rel">
                <Imguserprofile />
                  <h3 class="text-4xl font-semibold leading-normal mb-2 text-gray-800 ">
                    {UserFulterArry&&UserFulterArry.first_name} {UserFulterArry&&UserFulterArry.LastName}
                  </h3>
                  <p>{UserFulterArry&&UserFulterArry.about}</p>
<Stat/>

{/* The button to open modal */}

{/* Put this part before </body> tag */}
<input type="checkbox" id="pupeditprofile" className="modal-toggle" />
<div className="modal">
  <div className="modal-box w-11/12 max-w-5xl">

  <EditProfile/>


  </div>
</div>
        </div>

              </div>
            </div>
          </div>
        </section>
      </main>

     

    


    </>
  );
};

export default Index;
