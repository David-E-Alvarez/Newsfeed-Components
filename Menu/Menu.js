/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  [x]The function takes an array as its only argument.

  [x]Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  [x]Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  [x]Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  []Step 5: return the menu component.

  []Step 6: add the menu component to the DOM.
  
*/
const menuButton = document.querySelector('.menu-button');
const header = document.querySelector('.header');
function createMenu(menuItemsArr){
  //elements
  const menu = document.createElement('div');
  const ulElement = document.createElement('ul');
  for(var i = 0; i < menuItemsArr.length; i++){
    const li = document.createElement('li');
    li.textContent = menuItemsArr[i];
    ulElement.appendChild(li);
  }

  // const li1Element = document.createElement('li');
  // const li2Element = document.createElement('li');
  // const li3Element = document.createElement('li');
  // const li4Element = document.createElement('li');
  // const li5Element = document.createElement('li');
  // const li6Element = document.createElement('li');
  //assign array values to elements
  
  // li2Element.textContent = menuItems[1];
  // li3Element.textContent = menuItems[2];
  // li4Element.textContent = menuItems[3];
  // li5Element.textContent = menuItems[4];
  // li6Element.textContent = menuItems[5];
  //element structure
  menu.appendChild(ulElement);
  // ulElement.appendChild(li2Element);
  // ulElement.appendChild(li3Element);
  // ulElement.appendChild(li4Element);
  // ulElement.appendChild(li5Element);
  // ulElement.appendChild(li6Element);
  //element classes
  menu.classList.add('menu');
 //set text content
  menuButton.addEventListener('click', event => {
    console.log("event: " + event);
    menu.classList.toggle('menu--open');
  })
  return menu;
}




header.append(createMenu(menuItems));





