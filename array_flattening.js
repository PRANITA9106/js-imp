function flattenArray(nestedArray, depth) {
    
    function flatten(arr, d) {
        return arr.reduce((acc, val) => {
            if (Array.isArray(val) && d > 0) {
                acc.push(...flatten(val, d - 1));
            } else {
                acc.push(val);
            }
            return acc;
        }, []);
    }

    
    const maxDepth = depth !== undefined ? depth : Infinity;

    
    if (!Array.isArray(nestedArray) || nestedArray.length === 0) {
        return [];
    }

    if (maxDepth === 0) {
        return nestedArray;
    }

    return flatten(nestedArray, maxDepth);
}


console.log(flattenArray([1, [2, [3, [4, 5]]]], 2)); // Output: [1, 2, 3, [4, 5]]
console.log(flattenArray([1, [2, [3, [4, 5]]]]); // Output: [1, 2, 3, 4, 5]
console.log(flattenArray([1, [2, [3, [4, 5]]]], 0)); // Output: [1, [2, [3, [4, 5]]]]
console.log(flattenArray([])); // Output: []
