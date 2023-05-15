import React from 'react';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



// // useGet
export const UseReduxGet = (LinkGet , TypeNameGet ,msg) => {

    const Get = createAsyncThunk(
        TypeNameGet,
        async (_, thunkAPI) => {
          const { rejectWithValue } = thunkAPI;
          try {
            const res = await fetch(LinkGet);
            const data = await res.json();

            // MsgGlloball(msg)

            return data;
          } catch (errorCommintsPost) {
            const error = rejectWithValue(errorCommintsPost.message)
            return error;
          }
        }
      );



    return [Get]
}






// useInsert
export const UseReduxInsert = (LinkInsert , TypeNameInsert , msg ) => {
    const Insert = createAsyncThunk(
        TypeNameInsert,
        async (data, thunkAPI) => {
          // console.log([data])
          // console.log(data)
          const { rejectWithValue ,getState } = thunkAPI;
          try {
            const addLesson = await fetch(LinkInsert, { method: "POST", body: data, })
            const Data = addLesson.json();
            if ( TypeNameInsert === "PaymentConfirmation/insertPaymentConfirmation"){
              const GetDataInState = getState().UserFulterArry.UserFulterArry.user_name
              console.log(GetDataInState)
              CreateRoom(GetDataInState)
            }
            // if (TypeNameInsert === "LessonsName/insertlesson"){
            //   const GetDataInState = getState().subjects.subjects
            //   const slugLesson = data.slug
            //   const arr3 = GetDataInState.filter(itm => itm.id=== Data.Subject )
            //   console.log(arr3)
            //   console.log(arr3[0])
            //   console.log(arr3[0].slug)
            //   window.location.href = `/Corses/${arr3[0].slug + arr3[0].id}/${Data.slug}`;
            //   console.log(Data)
            // }
            // if (TypeNameInsert === "LibBooksName/insertLibBook"){
            //   // window.location.href = `/Corses/Library_books`;
            //   console.log("Corses/Library_books")
            // }
            // if (msg){
            //   MsgGlloball(msg)
            // }    
            console.log(Data)  
            return Data
      
      
          } catch (errorLesson) {
            return rejectWithValue(errorLesson.message);
          }
        }
      );


    return [Insert]
}





// edit data api
export const UseReduxEdiet = (LinkEdiet , TypeNameEdiet , msg ) => {

    const Ediet = createAsyncThunk(
        TypeNameEdiet,
        async (data, thunkAPI) => {
          const ArryData = [...data]
          // console.log(ArryData)
          const GetId=ArryData[2][1]
          const id = GetId + '/'
          // console.log(id + "iiiiiiiiiiiiiiiiiiiiiiiii")
          const { rejectWithValue , getState} = thunkAPI;
          try {
            const EidetLessonFetch = await fetch(LinkEdiet + id , { method: "PUT", body: data, })
            const Data = EidetLessonFetch.json();


            // if (TypeNameEdiet === "LessonsName/Edietlesson"){
            //   const GetDataInState = getState().subjects.subjects
            //   const arr3 = GetDataInState.filter(itm => itm.id=== Data.Subject )
            //         window.location.href = `/Corses/${arr3[0].slug + arr3[0].id}/${Data.slug}`;
            // }





            // if (msg){
            //   MsgGlloball(msg)
            // }

            console.log(Data)
            return Data;
          } catch (errorLesson) {
            return rejectWithValue(errorLesson.message);
          }
        }
      );
    
        return [Ediet]
    }




// edit data api
export const UseReduxDelete = (LinkDelete , TypeNameDelete , msg) => {

// Delete data api
 const Delete = createAsyncThunk(
    TypeNameDelete,
    async (id, thunkAPI) => {
      const { rejectWithValue ,getState } = thunkAPI;
      try {
        const Deletdata = await fetch(LinkDelete + id , { method: "DELETE", })
        // if (msg){
        //   MsgGlloball(msg)
        // }  
        return id
      } catch (errorLesson) {
        return rejectWithValue(errorLesson.message);
      }
    }
  );
    
    
        return [Delete]
    }




