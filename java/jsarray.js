newArray = [6, 66, 666]
newArray[1]

public class App {
    public static void main(String [] args) {
        int bucky[] = {3,4,5,6};
        change(bucky);
        for(int y:bucky)
        System.out.println(y);
        
    }
    
    public static void change (int x[]){
        for(int counter = 0; counter < x.length; counter++)
        x[counter]+=5;
    }
    
}

public class Mango {
    public static void main(String [] args) {
        int marks[] = {22,44,55,99,88};
        int marks2[] = new int[5];
        
      System.arraycopy(marks,0, marks2, 0, marks.length);
      
     
        System.out.println("mark1");
        for(int counter = 0; counter < marks.length; counter ++){
            System.out.println(marks[counter]);
        }
        System.out.println("mark2");
        for(int counter = 0; counter < marks.length; counter ++){
            
        }
    }
}

public class Mango {
    public static void main(String [] args) {
       coach1[] = {"tomas", "kajsa", "noel", "faraz"}
       coach2[] = {}
        
      System.arraycopy(coach1,0, coach2, 0, coach1.length);
      
     
        System.out.println("coach1");
        for(int i = 0; i < coach1.length; i++){
            System.out.println(coach1[i]);
        }
        System.out.println("coach2");
        for(int i = 0; 1 < coach2.length; i ++){
            System.out.println(coach2[2]);
            
        }
    }
}

coach = ["tomas", "farez", "noel", "kalle"]

  coach2 = [];

  for (let i = 0; i < coach.length; i++) {
    coach2.push(musicians[i]);
  }


  function sayName(){
    return this.firstName + " " + this.lastName;
    }
    
    var person1 = {
    firstName:"Erik",
    lastName:"Westerberg"
    }
    x = person.sayName.call(person1)
    document.write( x ) 
    undefined


    var name=prompt("whats your name")
    var lastname=prompt("and last name")
    alert("hello " +name + " " + lastname + " your good looking");