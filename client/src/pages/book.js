import React, { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

export default function Book() {

    //this is the id for the apartment complex
    const {id} = useParams();
    //use this to navigate to a "tour request submitted successfully" page after submit
    const navigate = useNavigate();

    return (
        <div>book a tour form goes here</div>
    )
}