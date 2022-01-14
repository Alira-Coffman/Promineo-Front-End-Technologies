function startGame() {
    let moveOptions = ["R", "P", "S"];
    /// 0 0
    /// 0 1
    /// 1 0
    /// 1 1

    //Move Variables
    let comp1Move = 0, comp2Move = 0;

    
    comp1Move = generateMove();
    //without function: comp1Move = Math.floor(Math.random() * moveOptions.length);
    comp2Move = generateMove();

    console.log(`Comp1Move: ${moveOptions[comp1Move]} , Comp2Move: ${moveOptions[comp2Move]}`);

    console.log(whoWon(comp1Move, comp2Move));
    
    
}

function generateMove() {
    return Math.floor(Math.random() * 3);
    
}

function whoWon(comp1, comp2) {
    // let moveOptions = ["R", "P", "S"];
    //r = 0, p = 1, s = 2
    if(comp1 == comp2)
        return "tie";
    else if(comp1 == 0 && comp2 == 1)
        return "Comp 2 Wins";
    else if(comp1 == 0 && comp2 == 2)
        return "Comp 1 Wins";
    else if(comp1 == 1 && comp2 == 0)
        return "Comp 1 Wins";
    else if(comp1 == 1 && comp2 == 2)
        return "Comp 2 Wins"
    else if(comp1 == 2 && comp2 == 0)
        return "Comp 2 Wins";
    else
        return "CASE NOT WRITTEN"
    
}