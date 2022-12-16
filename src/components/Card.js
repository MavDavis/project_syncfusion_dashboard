import React from "react";
import card1 from "../assets/card1.png";
import { AiFillStar } from "react-icons/ai";

export default function Card(props) {
  return (
      <div className="card">
        <img src={props.obj.Img} alt="" />
        <p className="p">
          <span className="icon">
            <AiFillStar />
          </span>
        {props.obj.rating} <span className="sp2"> {props.obj.reviewCount} {props.obj.country}</span>
        </p>
        <p className="p2 gray">{props.obj.title}</p>
        <p className="p1">From ${props.obj.price} / <span className="sp2">person</span></p>
      </div>
  );
}
