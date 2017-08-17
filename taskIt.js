/************************************************

* It should have a place to store activities
	* `var ar = []`
* It should have a way to display activities
	* `console.log("Tasks: " + ar);`
* It should have a way to add new activities
	* `ar.push('listItem');`
* It should have a way to change activities
	* ar[i] = 'newListItem';
* It should have a way to delete activities
	* `ar.splice(i, count);`

************************************************/

var ar = [];

/* v2 deprecated
let saveTasks = (ar) => {
	this.ar = ar;
	return this.ar;
};
*/

// Display tasks
let showTasks = (ar) => {
	this.ar = ar;
	console.log("Activities: " + this.ar);
};

// Add tasks
let addTasks = (ar, newTask) => {
	this.ar.push(newTask);
	showTasks(this.arr);
	return this.ar;
};

// Update tasks
let updateTask = (ar, pos, newVal) => {
	this.ar[pos] = newVal;
	showTasks(this.ar);
	return this.ar;
};

// Delete tasks
let deleteTask = (ar, pos) => {
	this.ar.splice(pos, 1);
	showTasks(this.ar);
	return this.ar;
}

