const students =[
    {id:21,name:'blood'},
    {id:22,name:'cholod'},
    {id:23,name:'golod'}
];
 
const names = students.map(s=>s.name);
const ids = students.map(s=> s.id);
const bigger = students.filter(students=> students.id>21);
const biggerOne = students.find(students=> students.id>21);

console.log(names,ids,bigger,biggerOne);