// PROVIDED: COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// Store Text Strings in variables
// degree hex '\xB0'
var storyText = 'It was 94\xB0 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'
var insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
var insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
var insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
	// create a new random story each time the button is pressed and the function is run
  var newStory = storyText;
	// the result in each case will be a random item out of each array it is called on
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

	// replace the three placeholders in the newStory string — :insertx:, :inserty:, and :insertz: — with the strings stored in xItem, yItem, and zItem.
  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);
  newStory = newStory.replace(':insertx:', xItem);

	// replace Bob with name input
	if(customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replace('Bob', name);

  }

  if(document.getElementById("uk").checked) {
		// 1 stone = 0.071429 pounds -- concatenate ' stone' onto end of Math.round result
    var weight = Math.round(300*0.07142857) + ' stone';
		// replace 94 with F->C -- (F-32)*(5/9)=C
		var temperature =  Math.round((94-32) * (5/9)) + '\xB0' + ' centigrade';
		// replace original with temp and weight values
		newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);

  }
	// set textContent equal to newStory var
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
