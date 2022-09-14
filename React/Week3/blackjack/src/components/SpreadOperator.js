

const SpreadOperator = () => {

    const dogs = [
        {name: 'Arya', ages: 2 , color: 'White/Brown'},
        {name: 'Koda', ages: 3 , color: 'Brown/Black'
        },
        {name: 'Spot', ages: 10 , color: 'Brown/White'},
        {name: 'Luna', ages: .5 , color: 'Brown/White'},
       
        
    ]

    function bark(dog1, dog2, dog3) {
        console.log('Dog1 is ', dog1.name);
        console.log('Dog2 is ', dog2.name);
        console.log('Dog3 is ', dog3.name);
      }

      let person = { 
        age: 47 ,
        last: 'Smith', 
        first: 'John', 
        
      }
      let { first, last } = person;
      
    return(
        <>
        {first} {last}
        <button onClick={bark(...dogs)}>Click</button>
        </>
    )
}



export default SpreadOperator