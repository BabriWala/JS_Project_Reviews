const person = [
    {
        image: 'https://www.fakepersongenerator.com/Face/male/male20161086507237702.jpg',
        name: 'Barney O Poston',
        designation: 'Fuel Cell Technician',
        complement: "She had been told time and time again that the most important steps were the first and the last. It was something that she carried within her in everything she did, but then he showed up and disrupted everything. "
    },
    {
        image: 'https://www.fakepersongenerator.com/Face/male/male20161086545386200.jpg',
        name: 'Jeffery D Mason',
        designation: 'Artillery',
        complement: 'Trees. It was something about the trees. The way they swayed with the wind in unison. The way they shaded the area around them. '
    },
    {
        image: 'https://www.fakepersongenerator.com/Face/male/male1085569881256.jpg',
        name: 'Zachery L Quinones',
        designation: 'Chef and Head Cook',
        complement: "Patricia's friend who was here hardly had any issues at all, but she wasn't telling the truth. Yesterday, before she left to go home, she heard that her husband is in the hospital and pretended to be surprised."
    },
    {
        image: 'https://www.fakepersongenerator.com/Face/male/male20171086026923675.jpg',
        name: 'George B Smith',
        designation: 'Mechanical Engineer',
        complement: 'It was a good idea. At least, they all thought it was a good idea at the time. Hindsight would reveal that in reality, it was an unbelievably terrible idea, but it would take another week for them to understand that.'
    },
    {
        image: 'https://www.fakepersongenerator.com/Face/male/male20171086063338989.jpg',
        name: 'Dominic L Storm',
        designation: 'Law Teacher, Postsecondary',
        complement: "There was something beautiful in his hate. It wasn't the hate itself as it was a disgusting display of racism and intolerance. It was what propelled the hate and the fact that although he had this hate, he didn't understand where it came from."
    },
    {
        image: 'https://www.fakepersongenerator.com/Face/male/male20171086007454956.jpg',
        name: 'Paul D Costello',
        designation: 'Locksmith and Safe Repairer',
        complement: "Sometimes it's the first moment of the day that catches you off guard. That's what Wendy was thinking. She opened her window to see fire engines screeching down the street. "
    },
];


const previousBtn = document.querySelector('.previous__btn');
const nextBtn = document.querySelector('.next__btn');
const surpriseBtn = document.querySelector('.surprise__btn');

const personImage = document.querySelector('.person__image');
const personName = document.querySelector('.person__name');
const personDesignation = document.querySelector('.person__designation');
const personComplement = document.querySelector('.person__complement');

let currentPerson = 0;

window.addEventListener('DOMContentLoaded', () => {
    const item = person[currentPerson];
    personImage.src = item.image;
    personName.innerText = item.name;
    personDesignation.innerText = item.designation;
    personComplement.innerText = item.complement;
})

nextBtn.addEventListener('click', () => {
    currentPerson++;
    if(currentPerson > person.length - 1){
        currentPerson = 0;
    }
    showPerson(person[currentPerson]);
});

previousBtn.addEventListener('click', () => {
    currentPerson--;
    if(currentPerson <0){
        currentPerson = person.length - 1;
    }
    showPerson(person[currentPerson]);
});

function showPerson(person) {
    personImage.src = person.image;
    personName.innerText = person.name;
    personDesignation.innerText = person.designation;
    personComplement.innerText = person.complement;
}

surpriseBtn.addEventListener('click', () => {
    showPerson(person[randomPerson()])
})

function randomPerson() {
    return Math.floor(Math.random() * person.length);
}