import React, {useState, useEffect} from 'react';
import styles from './Form.module.css';
import {changeContact,resetSelected} from '../../redux/actions/contactsActions';
import {addContactOperations,changeContactsOperations} from '../../redux/operations/contactsOperations';
import {connect} from 'react-redux';
import Notification from '../notification/Notification';


const initialState={
  name:"",
  number:"",

}

const Form = ({addContact,alertFlag,selectedContact,changeContact,resetSelected,contacts}) => {

  const [state,setState] = useState({...initialState});
  const[alert,setAlert]=useState(false);
  const[doubledName,setDoubledName]=useState("");
  const buttonActive =state.name && state.number? false:true;

  useEffect(()=>{
   selectedContact ? setState({...selectedContact}) : setState({...initialState});
  },[selectedContact]);

  const handleChange=e=>{
    const {name,value} = e.target;
    setState(prev=>({...prev,[name]:value}))
  }

  const handleSubmit=e=>{
    e.preventDefault();

    if(selectedContact){
    changeContact(state);
    } else {
      if(contacts.some(contact=>contact.name.toLowerCase() === state.name.toLowerCase())){
        setAlert(true);
        setDoubledName(state.name);
      } else {
        addContact(state);
      }
    }

    setState({...initialState});
    // resetSelected();
  }

  return(
    <>
    {alert &&  <Notification name={doubledName} changeAlert={setAlert} changeName={setDoubledName}/>}

    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}> Name
        <input type="text" value={state.name} name="name" onChange={handleChange} className={styles.input}/>
      </label>

      <label className={styles.label}> Number
        <input type="text" value={state.number} name="number" onChange={handleChange} className={styles.input}/>
      </label>

     <button type="submit" disabled={buttonActive} className={styles.formButton}>{selectedContact ? "Save contact" : "Add contact"}</button>

    </form>
    </>
  )
};

const mapStateToProps=(state)=>{
  return {
    alertFlag:state.contactsArr.alert,
    contacts: state.contactsArr.contacts,
    selectedContact:state.contactsArr.selectedContact
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    addContact: (contact)=>{
      dispatch(addContactOperations(contact))
    },

    changeContact: (contact)=>{
      dispatch(changeContactsOperations(contact))
    },

    resetSelected:()=>{
      dispatch(resetSelected())
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form);

