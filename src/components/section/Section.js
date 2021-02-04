import React from 'react';
import {section} from './Section.module.css';

const Section = ({children}) => {
  return(
  <section className={section}>{children}</section>
  )
};

export default Section;


