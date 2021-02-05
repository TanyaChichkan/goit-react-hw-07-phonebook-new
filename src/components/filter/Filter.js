import React from "react";
import { connect } from "react-redux";

import { filterContacts } from "../../redux/actions/contactsActions";
import { getFilter } from "../../redux/selectors/contactsSelectors";

import styles from "./Filter.module.css";

const Filter = ({ filter, filterContacts }) => {
  const handleChange = (e) => {
    filterContacts(e.target.value);
  };

  return (
    <div className={styles.filter}>
      <label>
        Find contacts by name
        <input type="text" value={filter} onChange={handleChange} className={styles.filterInput} />
      </label>
      <br />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: getFilter(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterContacts: (value) => {
      dispatch(filterContacts(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
