Question: 1
//difference between getElementById, getElementsByClassName
getElementById() retrieves an element with an id
Return a single element
change single element style

getElementsByClassName() is used to get multiple elements of a class with the same name
Return a HTMLCollection
You cannot change the style directly, you have to do it using a Loop

//difference between querySelector, querySelectorAll
You can use querySelector() to get an element, but if there are multiple class or tag names with the same name, the first one is used.
Return a single element

querySelectorAll() will retrieve all elements that match the selector you give it.
Return a NodeList

Question: 1
//create and insert a new element into the DOM

First, you have to set an ID inside the html tag, then in JS, you have to create a new Element with that ID and set inner Text or inner HTML inside it and appendChild inside the new Element that was created first.
In the example:

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <section id="title-Section"></section>
    <script>
      const title = document.getElementById("title-Section");

      let newDiv = document.createElement("div");
      newDiv.innerText = "Hello World";
      // or
      // newDiv.innerHTML = "<h3>New Title</h3>";
      title.appendChild(newDiv);

    </script>

  </body>
</html>

Question: 3
Event Bubbling is a process where an event starts from the target element and propagates upward through its parent elements up to the document.

Question: 4
Event delegation is a very powerful and smart technique in JavaScript. Instead of adding an addEventListener to each child element separately, you add a single listener to a parent element. Then, when a child is clicked, that event bubbles up to the parent and can be handled.

Using event delegation:

1. Code is much faster
2. Code is scalable
3. No problem if the code is large
4. Code is easier to maintain

Question: 5
e.preventDefault()

1. Disables the browser's default behavior.
2. Disables default actions such as opening links, submitting forms, toggling checkboxes, etc.
3. The event bubbles to the parent.
4. Used in general form validation, custom links, drag and drop.

e.stopPropagation()

1. Using this prevents the event from going to the parent.
2. It does not stop the default action.
3. The event stops, it cannot go to the parent at all.
4. Usually used in event delegation, nested clickable elements, modals.
