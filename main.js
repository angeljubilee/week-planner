
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
}

function handleClick(event) {
  $overLay.className = 'overlay';
}

function saveEntry(day, entry) {

}
