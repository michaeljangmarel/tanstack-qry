import React from 'react'
import { useNavigate } from 'react-router-dom';

const SampleMiddleware = ({children}) => {
    
    const navigator = useNavigate();
    const role = localStorage.getItem("roleAdmin");

    if (role === "Admin") {
        return children ;
    }else {
      navigator("/")
    }
}

export default SampleMiddleware