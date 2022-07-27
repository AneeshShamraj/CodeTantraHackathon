import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import {Link} from 'react-router-dom'
const Card = ({ meet,parent }) => {

  return (
    <>
      {meet.map((data) => (
        <div className="card" key={data._id}>
          <div className="card-header">
            <h4 className="card-date">
              <h3 className="date">{moment(data.date).utc().format("DD")}</h3>
              <h4 className="date">{moment(data.date).utc().format("MMM")}</h4>
            </h4>
            <h3 className="card-title">{data.eventName}</h3>
          </div>
            <Link to={`/events/${data._id}`}>
          <div className="card-details">
            <h3 className="card-venue">{data.venue}</h3>
            <p className="card-add">{data.address}</p>
            {
            
            parent === "Sceduled" ? <div className="scheduled"><FontAwesomeIcon icon={faXmark} className="sceduled-cross"/><FontAwesomeIcon icon={faCheck} className="card-cross" />  </div>: <FontAwesomeIcon icon={faPencil} className="card-edit" />
            }
          </div>
            </Link>
        </div>
      ))}
    </>
  );
};

export default Card;

// <div className='card grid-item' key={data._id}>
// <div className="card-header">
// <h4 className='card-date'><span className='date'>3 MAY</span></h4>
// <h3 className='card-title'>Meet title</h3>
// </div>
//   <div className="card-details">
//   <h3 className="card-venue">Water mill</h3>
//   <p className="card-add">Test address</p>
//   <FontAwesomeIcon icon={faPencil}  className='card-edit'/>
//   </div>
// </div>
