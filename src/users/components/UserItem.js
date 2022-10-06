import React from "react";
import { Link } from "react-router-dom";
import "./UserItem.css";
import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";

function UserItem(props) {
  return (
    <li>
      <div>
        <Card>
          <Link to={`/${props.id}/places`}>
            <div>
              <Avatar image={props.image} alt={props.alt} />
            </div>
            <div>
              <h2>{props.name}</h2>
              <h3>
                {props.placeCount} {props.placeCount === 1 ? "place" : "places"}
              </h3>
            </div>
          </Link>
        </Card>
      </div>
    </li>
  );
}

export default UserItem;
