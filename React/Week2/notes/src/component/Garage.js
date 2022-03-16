import React from "react"
import Car from './Car'
class Garage extends React.Component{
    render()
    {
        const carname = 'GMC';
        return(
            <div>
                <h1>Who lives in my garage?</h1>
                <Car brand={carname} />
            </div>
        )
    }
}
export default Garage;