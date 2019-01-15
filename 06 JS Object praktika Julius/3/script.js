let Books = [{
        title: 'Think and Grow Rich',
        author: 'Napoleon Hill',
        pages: 238,
        left: 99,
        year: 1937,
        price: 15.25,
        url: 'img/tagr.jpg'
    },
    {
        title: 'Rich Dad Poor Dad',
        author: 'Robert T. Kiyosaki',
        pages: 207,
        left: 2,
        year: 2000,
        price: 19.98,
        url: 'img/poordadrichdad.jpg'
    },
    {
        title: 'The Richest Man in Babylon',
        author: 'Robert T. Kiyosaki',
        pages: 144,
        left: 55,
        year: 2002,
        price: 61.62,
        url: 'img/richmanbabylon.jpg'
    },
    {
        title: 'The Monk Who Sold His Ferrari',
        author: 'Robert T. Kiyosaki',
        pages: 198,
        left: 1,
        year: 1996,
        price: 10.96,
        url: 'img/monkferrari.jpg'
    },
    {
        title: 'The Law of Success',
        author: 'Napoleon Hill',
        pages: 502,
        left: 16,
        year: 1925,
        price: 13.49,
        url: 'img/The_Law_of_Success.jpg'
    },
    {
        title: 'The Secret',
        author: 'Rhonda Byrne',
        pages: 198,
        left: 1,
        year: 2006,
        price: 19.95,
        url: 'img/thesecret.jpg'
    },
    {
        title: 'How to Win Friends and Influence People',
        author: 'Dale Carnegie',
        pages: 291,
        left: 11,
        year: 2011,
        price: 19.95,
        url: 'img/howtowinfriends.jpg'
    },
    {
        title: 'The Power of Habit',
        author: 'Charles Duhigg',
        pages: 371,
        left: 111,
        year: 2012,
        price: 15.30,
        url: 'img/powerofhabit.jpg'
    },
    {
        title: 'Awaken The Giant Within',
        author: 'Tony Robbins',
        pages: 544,
        left: 19,
        year: 1992,
        price: 11.56,
        url: 'img/gianwithin.jpg'
    },
    {
        title: 'The Magic of Thinking Big',
        author: 'David J. Schwartz',
        pages: 228,
        left: 85,
        year: 1959,
        price: 10.75,
        url: 'img/magicofthinkingbig.jpg'
    },
    {
        title: 'Big Magic: Creative Living Beyond Fear',
        author: 'Elizabeth Gilbert',
        pages: 304,
        left: 5,
        year: 2015,
        price: 12.00,
        url: 'img/bigmagic.jpg'
    }
];

let button = document.querySelector('.lookBtn');
let fullBtn = document.querySelector('.fullBtn');
let authorInput = document.querySelector('.author_input');
let titleInput = document.querySelector('.title_input');
let yearInput = document.querySelector('.year_input');
let bookElement = document.querySelector('.book_element');
let resultat = document.querySelector('.results');

fullBtn.addEventListener('click', (e) => {
    Books.forEach(book => {
        resultat.innerHTML += `<div class="row book_element">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${book.url}" alt="" id="book_img">
                    <div class="card-body">
                        <h5 class="">${book.title}</h5>
                        <h6 class="">Book by ${book.author}</h6>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Year: ${book.year}</li>
                        <li class="list-group-item">Pages: ${book.pages}</li>
                        <li class="list-group-item">Price: ${book.price}</li>
                        <li class="list-group-item">Left: ${book.left}</li>
                    </ul>
                </div>
            </div>
`;
    });
});

button.addEventListener('click', (e) => {
    resultat.innerHTML = "";
    let inputs = {
        author: authorInput.value,
        title: titleInput.value,
        year: yearInput.value
    };
    let result = filterArray(inputs);
    if (result.length == 0) {
        resultat.innerHTML = "<div></div>";
    } else {
        result.forEach(book => {
            resultat.innerHTML += `<div class="row book_element">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${book.url}" alt="" id="book_img">
                    <div class="card-body">
                        <h5 class="">${book.title}</h5>
                        <h6 class="">Book by ${book.author}</h6>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Year: ${book.year}</li>
                        <li class="list-group-item">Pages: ${book.pages}</li>
                        <li class="list-group-item">Price: ${book.price}</li>
                        <li class="list-group-item">Left: ${book.left}</li>
                    </ul>
                </div>
            </div>
`;
        });
    }
});


let filterArray = (inputs) => {
    let results = Books.filter(book => {
        return book.author === inputs.author || book.title === inputs.title || book.year == inputs.year;
    });
    return results;
};