let btnGet = document.querySelector('.button');
let myTable = document.querySelector('#table');

let employees = [
	{ name: 'John', age: 42, country: 'United States', position: 'CEO'},
	{ name: 'Tom', age: 31, country: 'United Kingdom', position: 'Marketing Execuitive'},
	{ name: 'Brad', age: 25, country: 'Canada', position: 'Sales Execuitive'},
	{ name: 'Mark', age: 33, country: 'Italy', position: 'Sales Execuitive'},
];

let headers = ['Name', 'Age', 'Country', 'Position'];

btnGet.addEventListener('click', () => {
   let table = document.createElement('table');
   let headerRow = document.createElement('tr');

   headers.forEach(headerText => {
     let header = document.createElement('th');
	  let textNode = document.createTextNode(headerText);
	  header.appendChild(textNode);
	  headerRow.appendChild(header);
   });//create headers for table

   table.appendChild(headerRow);
   
   employees.forEach(emp => {
	   let row = document.createElement('tr');

	   Object.values(emp).forEach(text => {
       let cell = document.createElement('td');
       let textNode = document.createTextNode(text);
       cell.appendChild(textNode);
       row.appendChild(cell);
	 });
	 
	 table.appendChild(row);
   });//put data into the table

   myTable.appendChild(table);
});