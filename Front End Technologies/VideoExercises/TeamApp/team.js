//This is the members class
class Member{
    constructor(name,position){
        this.name =name;
        this.position = position;
    }
}

//teams class
class Team {
    constructor(id,name) {
        this.id = id;
        this.name = name;
        this.members = [];
    }
    //add a member to team
    addMember(member)
    {
        this.members.push(member);
    }
    //remove a member from team
    deleteMember(member)
    {
        let index= this.members.indexOf(member);
        this.members.splice(index,1);
    }
}


let teams = []; //helps draw
let teamId = 0;  //id assigned to team and is incremented each time

//Event Listener - function that will create it. 
//action is a function, id is the element you want event listener on


onClick('new-team', () => {
    teams.push(new Team(teamId++, getValue('new-team-name')));
    drawDom();
});
function onClick(id, action)
{
    console.log(' onClick - running');
    let element = document.getElementById(id);
    element.addEventListener('click', action);
    return element;
}

//gets value from an element. Takes in passed in id.
function getValue(id)
{
    console.log('gettingValue - running');
    return document.getElementById(id).value;
}

//
function drawDom() 
{
    console.log('drawdom - running');
    let teamDiv = document.getElementById('teams');
    clearElement(teamDiv);
    //In the video he does not place let in the loop. This is needed. 
    for(team of teams){
        let table = createTeamTable(team);
        let title = document.createElement('h2');
        title.innerHTML = team.name;
        title.appendChild(createDeleteTeamButton(team));
        teamDiv.appendChild(title);
        teamDiv.appendChild(table);
        console.log('well ',team);

        //In the video he does not place let in the loop. This is needed. 
        for(member of team.members){
            createMemberRow(team,table, member);
        }
    }
}

function createMemberRow(team, table, member)
{
    console.log('createMebmerRow - running');
    let row = table.insertRow(2); 
    row.insertCell(0).innerHTML = member.name;
    row.insertCell(1).innerHTML = member.position;

    let actions = row.insertCell(2);
    actions.appendChild(createDeleteRowButton(team, member));

}

function createDeleteRowButton(team, member){
    console.log('Create Delete Row btn running');

    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        let index = team.members.indexOf(member);
        team.members.splice(index,1);
        drawDom();
    }
    return btn;
}

function createDeleteTeamButton(team)
{
    console.log('Create Delete Team Running');
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Delete Team';
    btn.onclick = () => {
        let index = teams.indexOf(team);
        teams.splice(index,1);
        drawDom();
    }
    return btn;
}


function clearElement(element)
{
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}
function createTeamTable(team)
{
    let table = document.createElement('table');
    table.setAttribute('class', 'table table-dark table-striped');
    let row = table.insertRow(0);
    let nameColumn = document.createElement('th');
    let positionColumn = document.createElement('th');
    nameColumn.innerHTML = 'Name';
    positionColumn.innerHTML = 'Position';
    row.appendChild(nameColumn);
    row.appendChild(positionColumn);

    let formRow = table.insertRow(1);
    let nameTh = document.createElement('th');
    let positionTh = document.createElement('th');
    let createTh = document.createElement('th');
    let nameInput = document.createElement('input')
    nameInput.setAttribute('id', `name-input-${team.id}` );
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('class', 'form-control');

    let positionInput = document.createElement('input')
    positionInput.setAttribute('id', `position-input-${team.id}` );
    positionInput.setAttribute('type', 'text');
    positionInput.setAttribute('class', 'form-control');

    let newMemberButton = createNewMemberButton(team);
    nameTh.appendChild(nameInput);
    positionTh.appendChild(positionInput);
    createTh.appendChild(newMemberButton);

    formRow.appendChild(nameTh);
    formRow.appendChild(positionTh);
    formRow.appendChild(createTh);

    return table;

}
function createNewMemberButton(team)
{
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Create';
    btn.onclick = () => {
        console.log('triggering');
        team.members. push(new Member(getValue(`name-input-${team.id}`),getValue(`position-input-${team.id}`)));
        drawDom();
    };
    return btn;
}
