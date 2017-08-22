# TaskIt App System Requirements

**Purpose:** The TaskIt App interface is an activity tracker. The goal is to help users become more productive by helping to keep users accountible for what has to be executed everyday.

---

### v1 Requirements

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


### v2 Requirements

* It should have a way to display activities
	* `console.log("Tasks: " + ar);`

* It should have a way to add new activities
	* `ar.push('listItem');`

* It should have a way to change activities
	* ar[i] = 'newListItem';

* It should have a way to delete activities
	* `ar.splice(i, count);`


### v4 Requirements

* Activity.addTask should add objects
* Activity.updateTask should change the activityText property
* Activity.toggleCompleted should change the completed property

### v5 Requirements

* .showTasks should display .activityText
* .showTasks should tell user if .ar is empty
* .showTasks should show .completed

### v7 Requirements

* The should be a "Display Tasks" button and a "Toggle All"
	button in the app.
* Clicking "Display Tasks" should run Activity.showTasks().
* Clicking "Toggle All" should run Activity.toggleAll().

