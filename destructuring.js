// Example Invocation:
function highestPaid(arr){
    let [a,b,c]=arr
    let max=(
        (a.salary>b.salary)
        ?(a.salary>c.salary?a:c)
        :(b.salary>c.salary?b:c)    
    )
    return max
}


const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(highestPaid(employees)); // Output: { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }
