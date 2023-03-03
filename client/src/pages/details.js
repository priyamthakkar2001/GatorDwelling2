import React, { useState } from "react";
import useService from '../services/detailService';

export default function Details() {

    const [dwelling, loading] = useService();

    return (
        <div/>
    )
}