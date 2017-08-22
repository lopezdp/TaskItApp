/*****************************************************************

Author: David P. Lopez
Website: http://www.DavidPLopez.com

Purpose: The TaskIt App interface is an activity
	tracker. The goal is to help users become more
	productive by helping to keep users accountible
	for what has to be executed everyday.

License: GNU v3

---

### v5 Requirements

* .showTasks should display .activityText
* .showTasks should tell user if .ar is empty
* .showTasks should show .completed

*****************************************************************/

// Code goes here
// Create an activity class/object
var Activity = {

	ar: [],

	/* v2 deprecated
	let saveTasks = (ar) => {
		this.ar = ar;
		return this.ar;
	};
	*/

	// Display tasks
	showTasks: function () {

		if(this.ar.length === 0){
			console.log("Your tasks are empty!");
			return 0;
		} else {
			console.log("Activities:\n");
			for(let i = 0; i < this.ar.length; i++){
				if(this.ar[i].completed === true){
					console.log("(x)", this.ar[i].activityText);
				} else {
					console.log("( )", this.ar[i].activityText);
				}
			}
		}
	},

	// Add tasks
	addTask: function (activityText) {
		this.ar.push({
			activityText: activityText,
			completed: false
		});
		this.showTasks();
		return this.ar;
	},

	// Update tasks
	updateTask: function (pos, activityText) {
		this.ar[pos].activityText = activityText;
		this.showTasks();
		return this.ar[pos];
	},

	// Delete tasks
	// .splice() not working right
	deleteTask: function (pos) {
		this.ar.splice(pos, 1);
		this.showTasks();
		return this.ar;
	},

	// Toggle completed tasks
	toggleTask: function (pos){
		var activity = this.ar[pos];
		activity.completed = !activity.completed;
		this.showTasks();
		return this.ar;
	},

	// Toggle all tasks
	toggleAll: function (){
		let totalActivities = this.ar.length;
		let completedActivities = 0;

		for(let i = 0; i < totalActivities; i++){
			if (this.ar[i].completed === true) {
				completedActivities++;
			}
		}

		// Case1: If everything true, then make everything false
		if(completedActivities === totalActivities) {
			// Make everything false
			for(let i = 0; i < totalActivities; i++){
				this.ar[i].completed = false;
			}
		} else {
	      // Case2: Otherwise make everything true
	      for(let i = 0; i < totalActivities; i++){
	        this.ar[i].completed = true;
      }
    }
    this.showTasks();
	}
};