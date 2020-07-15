// NESTED OBJECTS
// check all the comma separated values of properties
var dog = {
   name: "Banjo",
   species: "phyllum cordata",
   weight: 25,
   size: 12,
   eats: ["chicken", "meat", "bones"],
   owner: {
      firstName: "Jack",
      lastName: "Jones",
   contactDetails: {   
      landLine: 12345,
      mobile: 678910
     },
   },
   dogBmi: function() {
      return this.weight / this.size
   }
}
// ACCESS - assign variable - dot notation and string in bracket notation
var contactDogOwner = dog.owner.contactDetails["mobile"]
{
	function workingWithObjects(){
		let 
		var dog ={name: "Ginger", breed: "German Shephard"}
		return dog["breed"]
	}
}

// the square brackets are not to be confused with an array 1:08 KODIRI
// when used with an object, it is an access method for the key of the name/property of the object
// worth rewatching Kodiri useful for debugging

// NESTED OBJECTS IN ARRAYS

var musicCatalog = [
 {
	genre: "hip-hop",
	language:"french",
	artists: [
	"maitre-gims", 
	"sexion-d'assaut", 
	"tsr-crew", 
	"flavien-berger"
	],
	parisBased: false
},

{
    genre: "rap",
	language:"english",
	artists: [
	"woo-tang-warriors", 
	"puff-daddy", 
	"beastie-boys" 
	],
 }	
];

// ACCESS - assign variable - bracket notation & array keys/ dot notation

var djRekhaChoice = musicCatalog[0].artists[1]

// CODE CHALLENGE 2:03:50
// 20:03:20 COPY THE original OBJECT
// AND RETURN UPDATED VALUE
// remove empty properties with no values
// if the property is artists
// add new artists to the end of the array
// return a new object
// NOTE: watch the comma separated props-value 
// naming convention of props has to be camelCase - no hyphens
// you can make your props strings
// ids have to be numbers no alphabets
//  when calling them in the function all props are strings/ ids numbers

var musicCatalog = {
	
	123:{
	genre: "hip-hop",
	playingAt: "TV5",
	language:"french",
	artists: [
	"maitre-gims", 
	"sexion-d'assaut", 
	"tsr-crew", 
	"flavien-berger"
	],
	basedInParis: true
  },

    223:{
    genre: "rap",
    playingAt: "",
	language:"english",
	artists: [
	"woo-tang-warriors", 
	"puff daddy", 
	"beastie boys" 
	],
	basedInAmerica: true
 },	

    332:{
    genre: "bangra-beats",
     playingAt: "Baisakhi Festival",
	language:"punjabi",
	artists: [
	"daler mehdi", 
	"apache indian", 
	"the bangramuffins" 
	],
	basedInPunjab: false
 },	

    423:{
    genre: "jazzy-blues",
    playingAt: "jazz-fm",
	language:"",
	artists: []
 }	

}

// CHALLENGE SOLUTION
var musicCatalogCopy = JSON.parse(JSON.stringify(musicCatalog))

function updateDjRekhaChoice(id, prop, value){
	 if (value === "") {
		  delete musicCatalog[id][prop];
	} else if (prop === "artists") {
	      musicCatalog[id][prop] = musicCatalog[id][prop] || [];
	      musicCatalog[id][prop].push(value);
	} else {
          musicCatalog[id][prop] = value;
	}
		return musicCatalog;
}

console.log (updateDjRekhaChoice(332, "artists", "dhol-explosion"))
console.log (updateDjRekhaChoice(423, "artists", "watanabe"))
