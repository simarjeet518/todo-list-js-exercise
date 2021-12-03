
const newTask = function(title ,description) {
  const task = {
    title: title,
    description: description,
    complete : false,
    completeTask: function() {
      this.complete = true;
    },
    logTaskState :function() {

      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  };
  return task;
};
const task1 = newTask("Clean cat Litter","take of the shit to litter box");
const task2 = newTask("Do Laundry","From outside ");
const tasks = [task1,task2];
task1.logTaskState();
task1.completeTask();
task1.logTaskState();

console.log(tasks);
