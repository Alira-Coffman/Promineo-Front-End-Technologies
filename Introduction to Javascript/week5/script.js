// Animals in a shelter
class Animal{
    constructor(name, breed){
        this.name = name;
        this.breed = breed;
    }
}
class SpeciesType {
    constructor(speciesName){
        this.speciesName = speciesName;
        this.animals = [];
    }
    addAnimal(animal){
        if(animal instanceof Animal){
            this.animals.push(animal);
        } else{
            throw new Error (`Argument is not valid`);
        }
    }
}
class Menu {
    constructor(){
        this.species = [];
        this.selectedSpecies = null;
    }
    start(){
        let selection = this.mainMenuOptions();
        while(selection != 0){
            console.log('I AM IN SWITCH, ',typeof(selection))
            switch(selection){
                case '1': 
                    this.createSpecies();
                break;
                case '2': this.ViewSpecies()
                break;
                case '3': this.removeSpecies()
                break;
                case '4': this.viewAllSpecies()
                break;
                default: selection = 0
            }
            selection = this.mainMenuOptions();
            console.log(selection)
        }
        alert ('Have a purrfect day');
    }
    mainMenuOptions(){
        return prompt(`
        0) Exit
        1) Create Species Class
        2) View Species Class
        3) Remove Species Class
        4) View All Species Classes`)
    }
    speciesMenuOptions(){
        return prompt(`
        0) Go Back
        1) Enter Animal
        2) Delete Animal
        ${speciesInfo}`);
    }
    createAnimal(){
        let name = prompt('Enter name for animal');
        let breed = prompt('Enter breed for animal');
        this.selectedSpecies.animals.push(new Animal(name, breed));
    }
    deleteAnimal(){
        let index = prompt('Enter index of animal to delete:');
        if(index > -1 && index < this.selectedSpecies.animals.length){
            this.selectedSpecies.animals.splice(index, 1);
        }
    }
    createSpecies(){
        let species = prompt('Enter Species name:');
        this.species.push(new SpeciesType(species));
    }
    ViewSpecies(){
        let index = prompt('Enter index of species to view:');
        if(index > -1 && index < this.species.length){
            this.selectedSpecies = this.species[index];
            let description = 'Species: ' + this.selectedSpecies.name + '\n'
            for(let i = 0; i < this.selectedSpecies.animals.length; i++){
                description += i + ')' + this.selectedSpecies.animals[i].name + '-' +
                this.selectedSpecies.animals[i].position + '\n';
            }
            let selection = this.showSpeciesMenu(description);
            switch(selection){
                case 1: this.createAnimal();
                break;
                case 2: this.deleteAnimal();
            }
        }
    }
    viewAllSpecies(){
        let speciesString = '';
        for(let i= 0; i < this.species.length; i++);{
            speciesString += i + ') ' + this.species[i].name + '\n';
        }
        alert(speciesString);
    }
}
let menu = new Menu();
menu.start();