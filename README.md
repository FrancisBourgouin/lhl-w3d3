#W3D2 - Lecture

## Browser Engine

- Each browser has its own JavaScript engine

| Chrome | Firefox      | Edge   | Safari |
| :----- | :----------- | :----- | :----- |
| V8     | Spidermonkey | Chakra | Nitro  |

- Each browser has also its own rendering engine

**Web browsers rely on layout engines to parse HTML into a DOM.**

| Chrome | Firefox | Edge      | Safari |
| :----- | :------ | :-------- | :----- |
| Blink  | Gecko   | Edge HTML | WebKit |

- [Browsers: Rendering Engines & JS Engines](https://medium.com/@acparas/browsers-rendering-engines-js-engines-bea42b77a182)

- There is a comparison of the different layout engines on [Wikipedia](<https://en.wikipedia.org/wiki/Comparison_of_layout_engines_(Document_Object_Model)>). It's pretty boring, but it does describe the supported features for each version of the DOM in each layout engine.

## The DOM (Document Object Model)

- Whenever a page is loaded into a browser, it creates a Document Object Model where each HTML element is an object with properties that can be accessed and manipulated with a programming language such as JavaScript.

- The html document is parsed by the browser rendering engine.

- The document is converted into the DOM. This means that each element, starting at the root, is represented by an object or node in a tree structure.

  - The following steps happen:
    1. HTML is received
    2. HTML tags are converted to tokens
    3. tokens are converted to Nodes
    4. Nodes are converted to the DOM

- The DOM is used to modify the content, structure or style of the document.

![Dom Tree](./DOM-model.svg)

Source: wikipedia - https://en.wikipedia.org/wiki/Document_Object_Model

- use `console.dir(document)` in devtools to display the DOM in a document

## DOM + JS

It is a JavaScript API that allows us to manipulate the DOM and create dynamic HTML.

- JavaScript can add, change, and remove all the HTML elements and attributes in the page.
- JavaScript can change all the CSS styles in the page.
- JavaScript can react to all existing events in the page.
- JavaScript can create new events in the page.

### Window Object

- A global variable representing the browser window than can be access with JavaScript

- Getting the size the browser window:

```javascript
window.innerHeight;
window.innerWidth;
window.outerHeight;
window.outerWidth;
```

- Navigating

```javascript
window.location.href = 'http://www.amazon.ca';
window.history.back();
window.history.forward();
```

- There is currently no standard for the window object implementation. However, there is a [working draft of the CSS Object Model](https://drafts.csswg.org/cssom-view/)

-[MDN Window](https://developer.mozilla.org/en-US/docs/Web/API/Window)

#### window.navigator

- Getting information about the browser

- The Navigator interface represents the state of the browser. This interface isn't used very often. One useful feature of the navigator object is access to the browsers geolocation functionality. These objects are available in the global scope of JavaScript running the in the browser (these wouldn't be availabe in Node).

```
navigator.userAgent

navigator.geolocation.getCurrentPosition(function(geo) {
  console.log(geo.coords.latitude + ', ' + geo.coords.longitude);
});
```

#### window.document

- The document interface represents a web page loaded into a window. This is the entry point into the content of the web application. Since our focus is on DOM manipulation, we will find ourselves using the document object quite a bit.

Let's say that we have the following HTML that has been parsed and now exists as the DOM tree.

```html
<html>
  <head>
    <title>JavaScript for the Client</title>
  </head>
  <body>
    <div id="container">
      <div class="fields"><input name="add" /> <button>Add</button></div>
    </div>
  </body>
</html>
```

- global object that give a reference to the document contained in the browser window and allows us to use methods to manipulate the DOM:

##### document methods to find DOM elements

```javascript
document.getElementById;
document.getElementsByTagName;
document.getElementsByName;
document.querySelector;
document.querySelectorAll;
document.getElementByClassName;
```

- Return either the first element or a collection of elements
- Selector can be HTML element, class or pseudo-class, id, or attribute

_Examples_

```javascript
// returns the specific div element with the id 'container'
document.getElementById('container');

// returns a list of elements that have the class 'fields'
document.getElementsByClassName('fields');

// returns a list of elements that have the name attribute with a value of 'add'
document.getElementsByName('add');

// returns a list of the elements that have the tag 'button'
document.getElementsByTagName('button');
```

##### Creating an Element

- createElement and appendChild:

```javascript
document.createElement('element');
parentElement.appendChild(childElement);
```

- Update Existing Content

  - textContent - Text in the HTML
  - innerText - text as it appears visually ( not fully supported by all browser)
  - innerHTML - Text rendered as HTML

```javascript
const parentElement = document.querySelector('section.result');
const newElement = document.createElement('p');
newElement.innerText = 'No result';
newElement.style.color = 'red';
parentElement.appendChild(newElement);
```

[MDN Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)

## Events

The browser supports a lot of different events. We use this interface to listen for certain events that happen so we can react to them.

Today we will focus on DOM events, but there are many others. You can use events to implement features that rely on drag and drop, clipboard behaviour, and Gamepad support.

Any of these events seem interesting?

- click
- focus, blur
- keyup, keydown
- mouseup, mousedown, mouseover, mousemove
- scroll
- select

### Monitor Events

```javaScript
monitorEvents(document.body, "click");
unmonitorEvents(document.body);
```

### Add an Event Listener

JavaScript can listen to a particular event on a DOM element:

```javascript
const submitBtn = document.querySelector('input[type="submit"]');
submitBtn.addEventListener('click', function(event) {
  event.preventDefault(); // prevents the default submit behavior
  console.log('Clicking the search button');
});
```

Another event that we can use is the 'DOMContentLoaded' event. The DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

There is a lot more information available in the `event` object that is passed to the callback. The details are well documented on [MDN click Event](https://developer.mozilla.org/en-US/docs/Web/Events/click).

```javascript
document.addEventListener('DOMContentLoaded', function(event) {
  console.log('The DOM is loaded!');
});
```

Events are a very important in building complex user interaction in your web applications. It is important to review the documentation and get an overall understanding of the available events. No one expects you to remember them all, especially not the details. It is however important to know what is possible when interacting with the browser.

[MDN Events](https://developer.mozilla.org/en-US/docs/Web/Events)

## Bonus

When we handle events sometimes we want to ensure that they are not handled any further. In the example today we had a button that was part of a form. We only want to handle the click event on the button, and don't want to submit the form.

We can cancel events. Using the `Event.preventDefault()` method we can tell the browser that we are happy to do all the necessary work when the event is triggered.

[MDN Event.preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
