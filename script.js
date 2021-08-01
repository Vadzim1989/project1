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
    elem.href = 'https://google.com';
    elem.textContent = content;
    return elem;
}
const crElem = createElem('item FROM JS'); // elem with content
const crElemCopy = crElem.cloneNode(true); // deep clone (without TRUE, copy just an element)
// list.append(crElem); // add element to UL in HTML (add elem to end)
// list.prepend(crElem); // add elemnt to start

// list.insertBefore(crElem, list.children[0]); // add element to fixed position

// list.after(crElem); // add element after HTML TAG

// list.before(crElem); // add element before HTML TAG

// list.replaceWith(crElem); // delete all info in current tag and write new info

// list.replaceChild(crElem, list.children[4]); // replace element

// list.insertAdjacentHTML('beforeend', '<li>INSERTED VIA ADJ</li>');
// list.insertAdjacentText('beforeend', '<li>INSERTED VIA ADJ</li>');
// list.insertAdjacentElement('beforeend', crElem);

// list.append(crElem);
// list.prepend(crElemCopy);


// const card = document.getElementById('card');
// const a = createElem('A FROM JS');

// const btn1 = card.getElementsByTagName('button')[0]; //get 
// const btn2 = card.children[card.children.length - 1];
// const btn3 = card.querySelector('button');

// card.insertBefore(a, btn1);

// WORKS WITH EVENTS --------------------------------------------------

// console.dir(list);

// list.onclick = function() {
//     console.log('click happened');
// }

// list.onmouseenter = function() {
//     console.log('mouse entered');
// }

const btn = document.getElementById('btn');

const btnClick = () => {
    listElement[listElement.length - 1].remove();
    listElement.pop();
}

btn.addEventListener('click', btnClick);

// btn.ondblclick = () => {
//     console.log('DBL click');
// }

// btn.oncontextmenu = function() {
//     console.log('context menu');
// }

// list.onmousemove = () => {
//     console.log('mouse move');
// }

// list.onmousedown = () => {
//     console.log('mouse down');
// }

// list.onmouseup = () => {
//     console.log('mouse up');
// }

// window.onresize = () => {
//     console.log('window resize');
// }



list.addEventListener('click', () => {
    console.log('click');
});

const listadd = () => {
    console.log('click2');
}

list.addEventListener('click', listadd);

list.removeEventListener('click', listadd);


// -------------------------------------------------------------------

// const clickHandler = function(){ // function
//     console.log(this.textContent);
// }

const clickHandler = (event) => { // ver.2 with () =>
    console.log(event.target.textContent);
}

listElement.forEach((li) => {
    li.addEventListener('click', clickHandler);
})