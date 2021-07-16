/* exported data */

var weekData = {
  days: [[], [], [], [], [], [], []],
  editing: null
};
  // days =[0-6] sunday thorugh saturday

var prevData = localStorage.getItem('weekly-planner-storage');
if (prevData !== null) {
  weekData = JSON.parse(prevData);
}

window.addEventListener('beforeunload', storeData);

function storeData(event) {
  var dataJSON = JSON.stringify(weekData);
  localStorage.setItem('weekly-planner-storage', dataJSON);
}
