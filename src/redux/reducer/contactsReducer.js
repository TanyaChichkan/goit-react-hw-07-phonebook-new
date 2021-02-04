import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact,deleteContact, setError, setLoading,updateContact,filterContacts, resetSelected,addToSelected,changeContact,getContacts} from '../actions/contactsActions';

const initialArray=[];

const initialState={
  contacts: initialArray,
  isLoading:false,
  error:"",
  selectedContact:null,
}

// ==============================================Redux Toolkit==============================================

const contactsReducer = createReducer({...initialState},{
  [addContact]:(state,action)=>{
      return {...state,contacts:[...state.contacts,action.payload]};
  },

  [setLoading]:(state)=>{
    return {...state,isLoading:!state.isLoading}
  },

  [setError]:(state,action)=>{
    return{...state,error:action.payload}
  },

  [deleteContact]:(state,action)=>{
    return {...state,contacts:[...state.contacts.filter(contact=>contact.id !== action.payload)]};
  },

  [updateContact]:(state,action)=>{
    return {...state,contacts:[...state.contacts.map(contact=>contact.id===action.payload ?
    {...contact, update: !contact.update} : contact)]}
  },

  [resetSelected]:(state,action)=>{
    return{...state,selectedContact:null}
  },

  [addToSelected]:(state,action)=>{
    if(state.contacts.find(contact=>contact.id === action.payload)){
      return {...state,selectedContact:{...state.contacts.find(contact=>contact.id === action.payload)}}
    }else {
      return state
    }
  },

  [changeContact]:(state,action)=>{
    return{...state,contacts:[...state.contacts.map(item=>item.id===action.payload.id ?
          {...item,name:action.payload.name, number: action.payload.number,update:false}:{...item})]}
  },

  [getContacts]:(state,action)=>{
    return{...state,contacts:[...action.payload]}
  }
});

const filterReducer = createReducer("",{
  [filterContacts]:(state,action)=>{
    return state=action.payload
  }
});

export const rootReducer=combineReducers({
  contactsArr: contactsReducer,
  filterValue: filterReducer,
})


