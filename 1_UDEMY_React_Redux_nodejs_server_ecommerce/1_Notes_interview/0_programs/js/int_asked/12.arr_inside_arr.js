//var abc = [[{name:'Rajesh'}],[{name:'Mayank'}]]

function findSubarrayByName(arr, targetName) {
    // Iterate through the outer array
    for (let subarray of arr) {
        // Iterate through the inner array
        for (let element of subarray) {
            // Check if the current element's name matches the target name
            if (element.name.toLowerCase() === targetName.toLowerCase()) {
                // Return the matching subarray
                return subarray;
            }
        }
    }
    // If no matching subarray is found, return null or an appropriate message
    return null;
}

// Example usage:
var abc = [[{name: 'Rajesh'}], [{name: 'Mayank'}]];
var targetName = 'Rajesh';
var result = findSubarrayByName(abc, targetName);

if (result) {
    console.log("Subarray found:", result);
} else {
    console.log("No matching subarray found.");
}
