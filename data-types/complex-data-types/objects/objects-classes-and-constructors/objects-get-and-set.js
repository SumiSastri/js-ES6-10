//  the get and set methods help you change values in an object

var dog = {
   name: "Banjo",
   species: "phyllum cordata",
   weight: 25,
   size: 12,
   eats: ["chicken", "meat", "bones"],
   owner: {
      firstName: "Jack",
      lastName: "Jones",
      phoneNumber: 12345
      fullName: function(){
         return this.firstName + this.lastName;
      }
   },
   dogBmi: function() {
      return this.weight / this.size
   },
}

// javascript getters and setters return better data quality
// because of simpler syntax and an equal syntax for methods and props
var dog = {
   name: "Banjo",
   species: "phyllum cordata",
   weight: 25,
   size: 12,
   eats: ["chicken", "meat", "bones"],
   owner: {
      firstName: "Jack",
      lastName: "Jones",
      phoneNumber: 12345
      get fullName(){
         return this.firstName + this.lastName;
      }
   },
   set dogBmi() {
      return this.weight / this.size;
   },
   set species(){
   	return this.species.toUpperCase();
   }
}