import React from "react";
import card1 from "../assets/card1.png";
import { AiFillStar } from "react-icons/ai";

export default function Card(props) {
  let badgeText;
  if(props.obj.openSpots === 0){
    badgeText = 'Sold out'
  }else if (props.obj.country == 'online'){
    badgeText = 'Online'
  }else{
    badgeText = ''
  }
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.obj.Img} alt="" />
        {badgeText.length && <div className="sold">{badgeText}</div>}
      </div>
      <p className="p">
        <span className="icon">
          <AiFillStar />
        </span>
        {props.obj.rating}{" "}
        <span className="sp2">
          {" "}
          {props.obj.reviewCount} {props.obj.country}
        </span>
      </p>
      <p className="p2 gray">{props.obj.title}</p>
      <p className="p1">
        From ${props.obj.price} / <span className="sp2">person</span>
      </p>
    </div>
  );
}
