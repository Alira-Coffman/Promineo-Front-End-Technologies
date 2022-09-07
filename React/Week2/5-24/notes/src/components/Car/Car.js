import React from 'react'
import style from './Car.module.css'
export default class Car extends React.Component{
    constructor(props)
    {
        super(props);
        this.state ={
            color: 'red'
        }
    }

   
    changeColor = () =>
    {
        this.setState({color: 'blue'});
        
    }

    //make, model, year, 4wd/2wd
    // paragraphStyles = 
    // {
    //     color: this.state.color || 'blue',
    // }

    render(){
        return(
            <>
            
                <h2>I am a {this.props.make} {this.props.model}</h2>
                <p>I was made in {this.props.year}</p>
                <p id='recolor' style={{background:this.state.color}}>I am the color {this.state.color}</p>
                {/* <p id={`${this.state.color === 'blue' ? `${style.recolorBlue}` : `${style.recolorRed}`}`}>I am the color {this.state.color}</p> */}

                <button onClick={this.changeColor}>Change color of car</button>
               {/* {
                this.props.randomArray.map(arrayMember => {
                    return <p key={arrayMember}>{arrayMember}</p>
                })
               }  */}
            </>
        )
    
    }
}