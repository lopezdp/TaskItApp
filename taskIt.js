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

// Code goes here
// Create an activity class/object
var Activity = {

	ar: ['item1', 'item2'],

	/* v2 deprecated
	let saveTasks = (ar) => {
		this.ar = ar;
		return this.ar;
	};
	*/

	// Display tasks
	showTasks: function () {
		let arStr = "";
		for(let i = 0; i < this.ar.length; i++){
			if(i === (this.ar.length - 1)){
				arStr += (this.ar[i]);
			}
			else{
				arStr += (this.ar[i] + ", ");
			}
		}
		console.log("Activities: " + arStr);
		return this.ar;
	},

	// Add tasks
	addTask: function (newTask) {
		this.ar.push(newTask);
		this.showTasks();
		return this.ar;
	},

	// Update tasks
	updateTask: function (pos, newVal) {
		this.ar[pos] = newVal;
		this.showTasks();
		return this.ar;
	},

	// Delete tasks
	deleteTask: function (pos) {
		this.ar.splice(pos, 1);
		this.showTasks();
		return this.ar;
	}
};


