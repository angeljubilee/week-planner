/* global weekData */
var $form = document.querySelector('form');
var $addEntry = document.querySelector('.add-entry');
var $overLay = document.querySelector('.overlay');
var $weekRow = document.querySelector('.week');
$weekRow.addEventListener('click', handleDays);
$form.addEventListener('submit', handleSubmit);
$addEntry.addEventListener('click', handleClick);

function handleSubmit(event) {
  event.preventDefault();
  var $elements = $form.elements;
  var $day = $elements.day.value;
  var $time = $elements.time.value;
  var $description = $elements.description.value;
  $overLay.className = 'overlay hidden';
  var entry = {
    time: $time,
    description: $description
  };

  saveEntry($day, entry);
  document.querySelector('.no-entries').className = 'hidden';
}
function handleDays(event) {
  var index = dayIndex(event.target.textContent);
  if (weekData.days[index].length === 0) {
    return;
    // console.log("you have no entries!")
  }
  addEntry(weekData.days[index]);
}

function addEntry(entry) {
  var $tableRow = document.querySelector('tbody').children;

  for (var i = 0; i < entry.length; i++) {
    $tableRow[i].cells[0].textContent = entry[i].time;
    $tableRow[i].cells[1].textContent = entry[i].description;
  }
}

function handleClick(event) {

  $overLay.className = 'overlay';
}

function saveEntry(day, entry) {
  var i = dayIndex(day);
  weekData.days[i].push(entry);
}

// function addData(entry)
// {

// }

function dayIndex(day) {
  switch (day) {
    case 'Sunday':
      return 0;
    case 'Monday':
      return 1;
    case 'Tuesday':
      return 2;
    case 'Wednesday':
      return 3;
    case 'Thursday':
      return 4;
    case 'Friday':
      return 5;
    case 'Saturday':
      return 6;
  }
}
