function flattenObject(nestedObject) {
    const result = {};

    function flatten(obj, prefix = '') {
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                const newKey = prefix ? `${prefix}.${key}` : key;
                if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                    flatten(obj[key], newKey);
                } else {
                    result[newKey] = obj[key];
                }
            }
        }
    }

    flatten(nestedObject);
    return result;
}

const input = {
    user: {
        info: {
            name: "Alice",
            age: 25
        },
        preferences: {
            theme: "dark",
            notifications: true
        }
    },
    status: "active"
};

console.log(flattenObject(input));
/*
Expected output:
{
  "user.info.name": "Alice",
  "user.info.age": 25,
  "user.preferences.theme": "dark",
  "user.preferences.notifications": true,
  "status": "active"
}
*/
