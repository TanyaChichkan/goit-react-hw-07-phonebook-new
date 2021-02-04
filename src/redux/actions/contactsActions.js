import { createAction } from '@reduxjs/toolkit';

// ==========================Redux Tollkit===========================================

export const addContact=createAction("ADD_CONTACT");

export const setLoading=createAction("SET_LOADING");

export const setError=createAction("SET_ERROR");

export const deleteContact = createAction("DELETE_CONTACT");

export const updateContact=createAction("UPDATE_CONTACT");

export const filterContacts=createAction("FILER_CONTACT");

export const changeAlert = createAction("CHANGE_ALERT");

export const resetSelected = createAction("RESET_SELECTED");

export const addToSelected = createAction("ADD_TO_SELECTED");

export const changeContact = createAction("CHANGE_CONTACT");

export const getContacts = createAction("GET_CONTACTS");

// ====================================Redux===========================================

// export const deleteCamp = createAction("@bootCamps/deleteCamp");
// export const setFilter = createAction("@bootCamps/setFilter");
// export const setAlert = createAction("@bootCamps/setALERT");
// export const addNewCamp = createAction("@bootCamps/adNewCamp",(data)=>({
//     payload:{...data, id: uuidv4()
// },
// }));

// const ADDCONTACT = "ADD_CONTACT";
// const DELETECONTACT = "DELETE_CONTACT";
// const FILTERCONTACT = "FILER_CONTACT";
// const UPDATECONTACT = "UPDATE_CONTACT";
// const CHANGEALERT = "CHANGE_ALERT";
// const RESETSELECTED = "RESET_SELECTED";
// const ADDTOSELECTED = "ADD_TO_SELECTED";
// const CHANGECONTACT = "CHANGE_CONTACT";
// const CHEKUPDATEDITEMS="CHECK_UPDATED_ITEMS";
// const GETCONTACTS = "GET_CONTACTS";

// export const addContact=(contact)=>{
//   return{
//     type: ADDCONTACT,
//     payload: {...contact, id:uuidv4(),update:false}
//   }
// };

// export const updateContact=(id)=>{
//   return{
//     type:UPDATECONTACT,
//     payload:id
//   }
// }

// export const deleteContact=(id)=>{
//   return{
//     type:DELETECONTACT,
//     payload:id
//   }
// }

// export const filterContacts=(value)=>{
  //   return{
  //     type:FILTERCONTACT,
  //     payload:value
  //   }
  // }

  // export const changeAlert=()=>{
    //   return{
    //     type:CHANGEALERT
    //   }
    // }

    // export const resetSelected=()=>{
    //   return{
    //     type:RESETSELECTED
    //   }
    // }


// export const addToSelected=(id)=>{
//   return{
//     type:ADDTOSELECTED,
//     payload:id
//   }
// }

// export const changeContact=(contact)=>{
//   return{
//     type:CHANGECONTACT,
//     payload:contact
//   }
// }

// export const getContacts=()=>{
//   return{
//     type:GETCONTACTS
//   }
// }

// ============================================================================








