import React,{useEffect} from 'react';
import notStyles from './Notification.module.css';

const Notification = ({name,changeAlert,changeName}) => {

  useEffect(()=>{
    const timer = setTimeout(()=>{changeAlert(false); changeName("")},2000);
    return ()=>{
      clearTimeout(timer);
    }
  },[]);

  return(
    <div className={notStyles.alertWrapper}>
      <p className={notStyles.alertText}>{name && name[0].toUpperCase()+name.slice(1)} is already in the list!!!</p>
    </div>
  )
};

export default Notification;

