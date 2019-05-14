const checkboxEvt = event => {
  // event object contains all the properties on this event
  // event.target is the element that the event was triggred on

  // current element is event.target or use this
  // Getting the parent element (li) to apply the style on
  const parentEl = event.target.parentElement;

  // toggle the line-throught
  const lineToggle =
    parentEl.style.textDecoration === 'line-through' ? 'none' : 'line-through';

  // let lineToggle;
  // if (parentEl.style.textDecoration === 'line-through') {
  //   lineToggle = 'none';
  // } else {
  //   lineToggle = 'line-through';
  // }

  parentEl.style.textDecoration = lineToggle;
};

// detect the click on the checkboxes

// get the elements
const checkboxes = document.getElementsByClassName('todo-check');

// Whenever a check is clicked, we want to

// create a loop to add the event listeners
for (const checkbox of checkboxes) {
  checkbox.addEventListener('click', checkboxEvt);
}

const createTodo = content => {
  // <li class="list-group-item">
  //   <input type="checkbox" class="todo-check" name="walk-dog" id="walk-dog">
  //     Walk the dog
  // </li>

  // creating a new li element
  const liEl = document.createElement('li');

  // Add the class to it
  liEl.className = 'list-group-item';

  // Add the content to this li
  liEl.innerText = ` ${content}`;

  // Add the checkbox
  //   <input type="checkbox" class="todo-check" name="walk-dog" id="walk-dog">

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.className = 'todo-check';
  checkbox.setAttribute(
    'name',
    content
      .split(' ')
      .join('')
      .toLowerCase()
  );
  checkbox.id = content
    .split(' ')
    .join('-')
    .toLowerCase();

  // Inserting the checkbox right before the text
  liEl.insertBefore(checkbox, liEl.firstChild);

  // return the liEl
  return liEl;
};

// Catch the submission of the form

// Get the form element
const addTodoFrm = document.getElementById('add-todo-frm');

// Add an event listener on the form element
addTodoFrm.addEventListener('submit', function(event) {
  // stopping the form to being submitted
  event.preventDefault();

  // Grab the content of the input
  const inputContent = event.target.elements.addtodo;

  // Create a new li element with a checkbox
  const newLi = createTodo(inputContent.value);

  // Add an event listener of the newLi
  newLi.firstChild.addEventListener('click', checkboxEvt);

  // append newLi to the ul
  const parentUl = document.getElementById('todo-list');
  parentUl.appendChild(newLi);

  // Reset the value of the input box
  inputContent.value = '';
});

// Grab the content of the input box

// Create a new checkbox element out of thin air

// Add it to the page
