/*
https://www.w3schools.com/js/js_hoisting.asp
https://www.geeksforgeeks.org/javascript-hoisting/

*/

var a;            // Declaration is hoisted and initialized to undefined
console.log(a);   // Logs undefined
a = 10;           // Assigns 10 to a
console.log(a);   // Logs 10

/*
When the JavaScript interpreter processes the code, it goes through two main phases: 
the creation phase and the execution phase.

Creation Phase

In the creation phase, the JavaScript interpreter scans the code for variable 
and function declarations. For var declarations, it creates the variable in the
memory and sets its initial value to undefined. It does not execute any code during this phase,
so no assignments or executions are done.

During this phase, the interpreter "hoists" variable and function declarations to the top of their containing scope.

For the given code, this is what happens in the creation phase:

The interpreter encounters var a; and hoists it to the top of its scope, initializing it to undefined.

Execution Phase

In the execution phase, the interpreter executes the code line by line in the order it appears.

For the given code, this is what happens in the execution phase:

The interpreter executes console.log(a);. Since a was declared and initialized to undefined during the creation phase, it logs undefined.
The interpreter then executes a = 10;, assigning the value 10 to a.
The interpreter executes console.log(a);, and since a now holds the value 10, it logs 10.
*/