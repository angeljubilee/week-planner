/* global weekData */
var $form = document.querySelector('form');
var $addEntry = document.querySelector('.add-entry');
var $overLay = document.querySelector('.overlay');

$form.addEventListener('submit', handleSubmit);
$addEntry.addEventListener('click', handleClick);

function handleSubmit(event) {
  event.preventDefault();
  var $elements = $form.elements;
  var $day = $elements.day.value;
  var $time = $elements.time.value;
  var $description = $elements.description.value;
  $overLay.className = 'overlay hidden';
  // console.log('day', $day, 'time', $time, 'description', $description);
  var entry = {
    time: $time,
    description: $description
  };

  saveEntry($day, entry);
  document.querySelector('.no-entries').className = 'hidden';
}

function handleClick(event) {
  $overLay.className = 'overlay';
}

function saveEntry(day, entry) {
  var i = dayIndex(day);
  weekData.days[i].push(entry);
}

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
