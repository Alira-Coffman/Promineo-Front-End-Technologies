import React from 'react';
import AddButton from './AddButton';
import SubtractButton from './SubtractButton';


let e = React.createElement;
class Buttons extends React.Component {
    constructor()
    {
        super();
        this.state = {count: 1}
    }
    toggleValue = () => {
        console.log('toggle')
        this.state.count === 0 ? this.setState({count: 1}) : this.setState({count: 0})
    }
    render() {
        return <div className='container'>
        <h1>Count: <span className='bage bg-secondary'>{this.state.count}</span></h1> 

        <button onClick={this.toggleValue}>Toggle</button>
        <div>
            <AddButton />
            <SubtractButton />
        </div>
    </div>
       
      }
}
export default Buttons

