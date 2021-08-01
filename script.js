// DELETE ELEMENT -----------------------------------------------------

const list = document.getElementById('list');

const listElement = [...list.children]; // create array with elements


// for (let i = 0; i < 5; i++){
// listElement[listElement.length - 1].remove(); // delete element from DOM

// listElement.pop(); // delete element from ARRAY
// }


// for(let i = 0; i < 2; i++){
//     listElement[i].remove();
//     listElement.pop();
//     if(i === 1){
//         listElement[4].remove();
//         listElement.pop();
//     }
// }

// const toBeDeleted = listElement.filter(li => 
//                         li.textContent.endsWith('1') ||
//                         li.textContent.endsWith('2') ||
//                         li.textContent.endsWith('5')
// );

// toBeDeleted.forEach(li => li.remove());

// console.log(listElement);



// ADD ELEMENT --------------------------------------------------------

function createElem (content) { // making element 
    const elem = document.createElement('li');
    elem.textContent = content;
    return elem;
}
const crElem = createElem('item FROM JS'); // elem with content
// list.append(crElem); // add element to UL in HTML (add elem to end)
// list.prepend(crElem); // add elemnt to start

// list.insertBefore(crElem, list.children[0]); // add element to fixed position

// list.after(crElem); // add element after HTML TAG

// list.before(crElem); // add element before HTML TAG

// list.replaceWith(crElem); // delete all info in current tag and write new info

// list.replaceChild(crElem, list.children[4]); // replace element

list.insertAdjacentHTML('beforeend', '<li>INSERTED VIA ADJ</li>');
list.insertAdjacentText('beforeend', '<li>INSERTED VIA ADJ</li>');
list.insertAdjacentElement('beforeend', crElem);
