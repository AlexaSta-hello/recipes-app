import { Link } from "react-router-dom"
import errorImage from "../assets/no-food-found.png" 

const Error = ({message, explanation}) => {
  return (
    <div className="not-found-container">
        <img src={errorImage} alt="" className="not-found-image" />
        <h1 className="not-found-header">{message ? message : "Oh no!"}</h1>
        <p>{explanation ? explanation : "Something went wrong"}</p>
        <Link to="/" className="go-back-link">Go Back</Link>
    </div>
  )
}

export default Error