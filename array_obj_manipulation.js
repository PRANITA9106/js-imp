function filterAdults(users) {
    return users.filter(user => user.age >= 18);
}

function mapUserNames(users) {
    return users.map(user => user.name);
}

function groupUsersByCity(users) {
    return users.reduce((acc, user) => {
        if (!acc[user.city]) {
            acc[user.city] = [];
        }
        acc[user.city].push(user);
        return acc;
    }, {});
}

// Example
const users = [
    { id: 1, name: "Alice", age: 17, city: "New York" },
    { id: 2, name: "Bob", age: 25, city: "Los Angeles" },
    { id: 3, name: "Charlie", age: 30, city: "New York" },
    { id: 4, name: "Diana", age: 22, city: "Chicago" }
];

// Testing the functions
console.log(filterAdults(users)); 
// Output: [{ id: 2, name: "Bob", age: 25, city: "Los Angeles" }, { id: 3, name: "Charlie", age: 30, city: "New York" }, { id: 4, name: "Diana", age: 22, city: "Chicago" }]

console.log(mapUserNames(users)); 
// Output: ["Alice", "Bob", "Charlie", "Diana"]

console.log(groupUsersByCity(users)); 
/* Output:
{
  "New York": [{ id: 1, name: "Alice", age: 17, city: "New York" }, { id: 3, name: "Charlie", age: 30, city: "New York" }],
  "Los Angeles": [{ id: 2, name: "Bob", age: 25, city: "Los Angeles" }],
  "Chicago": [{ id: 4, name: "Diana", age: 22, city: "Chicago" }]
}
*/

