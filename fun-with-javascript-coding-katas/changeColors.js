// declare all variables in the beginning
// white, grey, black
// iterate over collection, change colors and push into new array

let transformedColors =[];
let transformColors = []
let colors = [
{r: 255, g: 255, b:255},
{r: 128, g:128, b: 128},
{r: 0, g:0, b:0},
]

for (let i =0; i <colors.length; i++){
	transformColors ={
		r: Math.round(colors[i].r/2),
		g: Math.round(colors[i].g/2),
		b: Math.round(colors[i].b/2)
	}
	transformedColors.push(transformColors);
}
console.log(transformedColors)

// with map function - reduces run time

let colors = [
{r: 255, g: 255, b:255},
{r: 128, g:128, b: 128},
{r: 0, g:0, b:0},
]
const transformedColors = colors.map(function(transformColor){
	return {
		r: Math.round(transformColor.r/2),
		g: Math.round(transformColor.g/2),
		b: Math.round(transformColor.b/2)
	};
});

console.log(transformedColors)

// with arrow functions
let colors = [
{r: 255, g: 255, b:255},
{r: 128, g:128, b: 128},
{r: 0, g:0, b:0},
]
const transformedColors = colors.map(transformColor => {
	return {
	r: Math.round(transformColor.r/2),
	g: Math.round(transformColor.g/2),
	b: Math.round(transformColor.b/2)
	};
});

console.log(transformedColors)
