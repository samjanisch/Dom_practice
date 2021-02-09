const container = document.querySelector('#container');

const p = document.createElement('p');

p.style.color = 'red';
p.textContent = "Hey I'm red!";
container.appendChild(p);

const h3 = document.createElement('h3');

h3.style.color = 'blue';
h3.textContent = "I'm a blue h3!" 
container.appendChild(h3);

const div = document.createElement('div');
div.classList.add('div');

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
div.appendChild(h1)

const p2 = document.createElement('p');
p2.textContent = "Me Too!"
div.appendChild(p2)

container.appendChild(div);

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    alert("Hello World");
})

function alertFunction() {
    alert("You did it!");
}

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});