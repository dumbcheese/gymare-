import React from "react";
import useStyles from "./styles";
import { Link } from "react-router-dom";

function Item({ item }) {
  const classes = useStyles();

  return (
    <div className={classes.indItem}>
      <img className={classes.image} src={item.selectedFile[0]} style={{height:"40vh", objectFit: 'cover'}}></img>
      <div className={classes.aboutItem}>
        <h2 align="center" className={classes.itemName}>
          <b>{item.name}</b>
        </h2>
        <h3 align="center" className={classes.itemPrice}>
        {item.discount > 0 ? (
          <div>
            <del style={{ marginRight: 10, color: "#969696" }}>
              {item.price}KM
            </del>
            <span style={{ fontSize: 16, fontWeight: "bold" }}>
              {" "}
              {((100 - item.discount) / 100) * item.price}KM
            </span>
          </div>
        ) : (
          <span style={{ fontSize: 16, fontWeight: "bold" }}>
            {item.price}KM
          </span>
        )}
        </h3>
      </div>
    </div>
  );
}

export default Item;
