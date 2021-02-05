import React from "react";
import styles from "./ListItem.module.css";

const ListItem = ({ id, name, number, update, onUpdate, onDelete, selectedContact }) => {
  const updatedClass = update ? styles.updated : styles["not-updated"];
  const textUpdatedClass = update ? styles["text-updated"] : styles["text-not-updated"];

  return (
    <li className={updatedClass}>
      <span className={textUpdatedClass}>
        {name}:{number}
      </span>

      <div className={styles.wrapper}>
        <label
          className={
            selectedContact && selectedContact.id !== id ? styles.inputHide : styles.itemLabel
          }
        >
          {" "}
          Update
          <input
            type="checkbox"
            data-id={id}
            onChange={onUpdate}
            checked={update}
            className={
              selectedContact && selectedContact.id !== id ? styles.inputHide : styles.inputItem
            }
          />
        </label>

        <button
          type="button"
          data-id={id}
          onClick={onDelete}
          className={styles.button}
          disabled={selectedContact && selectedContact.id === id ? true : false}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ListItem;
