// Container
const container = document.querySelector('#container');

// div
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

// Paragraph
const para = document.createElement('p');
container.appendChild(para)
para.textContent = "Hey I'm red!";
para.style.cssText = 'color: red';

// h3
const headThree = document.createElement('h3');
container.appendChild(headThree);
headThree.textContent = "I'm a blue h3!";
headThree.style.cssText = 'color: blue';

// 2nd div
const newDiv = document.createElement('div');
newDiv.setAttribute('style', 'border: 5px solid; background-color: pink;');

// newDiv h1
const newHeader = document.createElement('h1');
newDiv.appendChild(newHeader);
newHeader.textContent = "I'm in a div";

// newDiv p
const newPara = document.createElement('p');
newPara.textContent = "ME TOO!";
newDiv.appendChild(newPara);

container.appendChild(newDiv);