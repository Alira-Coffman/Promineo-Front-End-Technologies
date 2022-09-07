import React from "react";
import Car from "./Car/Car";
import CarFunctional from "./Car/CarFunctional";

export default class Garage extends React.Component{
    render()
    {
        const cars = [{name: 'car1',make:'GMC', model:'SAFARI' ,year:'2002'}, {name: 'car2',make:'Ford', model:'Ranger' ,year:'2018'}]
        return(
            <>
            {/* {
                cars.map(car =>
                {
                  return <p key={car.name}>
                  <Car make={car.make} model={car.model} year={car.year} />
                  </p>  
                })


            } */}

           
                {
                    cars.map(car =>
                    {
                        return <CarFunctional {...car} key={car.name}/>
                    })
                }

            </>
        )

    }
}