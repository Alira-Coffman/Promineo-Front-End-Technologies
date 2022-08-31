import React from "react";
// import './Navigation.module.css'
import style from './Navigation.module.css'

export class Navigation extends React.Component{
    render()
    {
       return <ol id={`${style.navigation}`}>
        <li>Home</li>
        <li>about</li>
        <li>contact</li>
        </ol>
    }
}

//Home, about, contact