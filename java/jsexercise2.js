//Write a function that returns your first name. Call it.
let person = {
    sayName: function(){
        return this.lastName;
        }
        }
        let person1 = {
        firstName:"Erik",
        lastName:"Westerberg"
        }
       let x = person.sayName.call(person1);
    document.write( x )
    

    //Write a new function that takes your name as an input. The function should return your first name, plus your last name, as one string.
    function askUser(){
    }
    let name=prompt("whats your name")
    let lastname=prompt("and last name")
    alert("hello " +name + " " + lastname + " your good looking");