var companies = [
	{ name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
	{ name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
	{ name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
	{ name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
	{ name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
	{ name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
	{ name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
	{ name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
	{ name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 }
];

var sortCompanies = companies.sort(function(company1, company2) {
	if (company1.start > company2.start) {
		return 1;
	} else {
		return -1;
	}
});
console.log(sortCompanies);
var sortCompanies = companies.sort((a, b) => {
	a.start > b.start ? 1 : -1;
});
console.log(sortCompanies);

var setAges = [ 18, 19, 20, 21, 60, 61, 62 ];
// ascending
var sortAges = ages.sort((a, b) => {
	a - b;
});
// decending
var sortAges = ages.sort((a, b) => {
	b - a;
});
