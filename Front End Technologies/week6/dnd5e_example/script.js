//get classes and create a list on the index page //get
//select a class, name character, post call to save that.  //post
//Get characters that have been created and they can delete , update the names of charater //get call & delete & put

//OPTIONAL: Weapons!

let dndAPI = 'https://www.dnd5eapi.co/api/classes';
let crudCrud = 'https://crudcrud.com/api/892891bdac4341809ae765aa185dba04/characters';


//oop vs functional? 

//holds info for a single character
class Character
{
    constructor(name, url, classData)
    {
        this.name = name;
        this.url = url;
        this.classData = classData; //revist
    }
}

// class Items()
// {

// }

//HOLDS A LIST OF CHARACTERS
class CharacterList
{
    constructor(name)
    {
        this.name = name; //campaign name
        this.characters = [];
    }

    addCharacter(character)
    {
        this.characters.push(new Character(character.name, character.url, character.classData));
    }
    //splices
    removeCharacter(id)
    {
        //TODO
    }
}

//get calls
class CharacterService
{
    static dndAPI = 'https://www.dnd5eapi.co/api/classes';
    static crudCrud = 'https://crudcrud.com/api/892891bdac4341809ae765aa185dba04/characters';


    //get list of all classes available 
    static getClassList()
    {
        $.ajax({ 
            url: this.dndAPI, 
            type: 'GET', 
            dataType: 'json', 
            success: function(response) {
              // Do what ever with the response here
              console.log(response);
          
              // or save it for later. 
             return response;
            } 
          });
    }

    //get user created character list that is stored in crudcrud
    static getUserCharacterList()
    {
        $.ajax({ 
            url: this.crudCrud, 
            type: 'GET', 
            dataType: 'json', 
            success: function(response) {
              // Do what ever with the response here
              console.log(response);
          
              // or save it for later. 
             return response;
            } 
          });
    }

    //get information on a specific class
    //character is name of the character user selected.
    static getClassInfo(character)
    {
        $.ajax({ 
            url: `${this.dndAPI}/${character}`, 
            type: 'GET', 
            dataType: 'json', 
            success: function(response) {
              // Do what ever with the response here
              console.log(response);
          
              // or save it for later. 
             return response;
            } 
          });
    }

    //POST : add a character to the character list in crudcrud
    static addCharacterToList(character)
    {
        console.log(character)
        return $.post(this.crudCrud, character);
    }

    //delete a character




}


CharacterService.getClassList()
let testInfo = CharacterService.getClassInfo('bard');
console.log(testInfo)
CharacterService.getUserCharacterList();

let myBard = new Character('Test1', 'bard' )
let myList = new CharacterList('myList')

myList.addCharacter(myBard)

CharacterService.addCharacterToList(myBard);

