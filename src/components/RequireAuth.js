import { Navigate, useLocation } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import About from "./aboutpage/About"

const RequireAuth=()=>{
    const {auth}=useAuth()
    const location=useLocation()

    // return(
    //     auth?.index?.email
    //     ?<About/>
    //     :<Navigate to='/logreg' state={{form: location}} replace/>
        
    // )
}

export default RequireAuth