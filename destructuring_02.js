// Example Invocation:
function destructuringToSwap(arr){
     [arr[2],arr[1],arr[0]]=[arr[0],arr[1],arr[2]];
    return arr
}


const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(destructuringToSwap(employees)); 
/* Output: [
    { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 },
    { name: 'Jane Smith', age: 28, department: 'Finance', salary: 60000 },
    { name: 'John Doe', age: 30, department: 'HR', salary: 50000 }
 ]*/
