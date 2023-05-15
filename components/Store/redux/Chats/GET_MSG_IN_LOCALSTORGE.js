import React from "react";
import { useSelector } from "react-redux";
export const GETMSGINLOCALSTORGE = async () => {
    const { activeChat } = useSelector((state) => state.activeChat);
    const [initialState, setinitialState] = useState(initialState);
    const getMessagesFromLocalStorage = async () => {
      return await JSON.parse(localStorage.getItem(activeChat)) || [];
    };
    getMessagesFromLocalStorage()
  
    return [initialState];
  };
  