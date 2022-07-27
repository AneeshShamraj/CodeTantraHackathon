import React from 'react'
import Card from "./Components/Card";
import useFetch from "./useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";



const Home = () => {
  const { meet, isPending } =useFetch('http://localhost:3000/api/events/all')

  return (
    <div>
      {isPending && <div>Loading...</div>}
      <div className="container">
       { meet && <Card meet={meet}/> }
       <Link to="/form"><FontAwesomeIcon icon={faCirclePlus} className="home-add"/></Link>
      </div>
    </div>
  )
}

export default Home
