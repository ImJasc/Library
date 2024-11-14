const library = []

class book {
    constructor(title, author, genre, read) {
        this.title = title,
        this.author = author,
        this.genre = genre,
        this.read = read;
    }
}

function addBookToLibrary(){
    clearLibrary();
    library.forEach(book =>{
        createCard(book);
    });
}

function createCard(book){
    const grid = document.querySelector("div#body");
    const card = document.createElement("div");
    const cardTitle = document.createElement("p");
    const cardGenre = document.createElement("p");
    const cardAuthor = document.createElement("p");
    const cardisRead = document.createElement("button");

    card.classList.add("card");
    cardTitle.classList.add("cardInfo");
    cardGenre.classList.add("cardInfo");
    cardAuthor.classList.add("cardInfo");
    cardisRead.classList.add("btnCard");

    if(book.read===true){
        cardisRead.classList.add("read");
        cardisRead.innerText = "Read"
    }else{
        cardisRead.classList.add("notRead");
        cardisRead.innerText = "Not read"
    }

    cardTitle.innerHTML = book.title;
    cardGenre.innerHTML = book.genre;
    cardAuthor.innerHTML = book.author;

    card.appendChild(cardTitle);
    card.appendChild(cardGenre);
    card.appendChild(cardAuthor);
    card.appendChild(cardisRead);
    grid.appendChild(card);
}

function clearLibrary(){
    const library = document.querySelector("div#body");
    library.innerHTML ="";
}

const dialog = document.querySelector("dialog");
const addButton = document.querySelector("button#button");
const submitButton = document.querySelector("button#submit");
const addBookForm = document.querySelector("form#newBook");

addButton.addEventListener("click", showDialog =>{
    addBookForm.reset();
    dialog.showModal();
})

dialog.addEventListener("click", closeModal);

submitButton.addEventListener("click", submit);

function submit (e){
    if(addBookForm.checkValidity() === true){
        e.preventDefault();
        const title = document.querySelector("input#title").value;
        const author = document.querySelector("input#author").value;
        const genre = document.querySelector("input#genre").value;
        const isRead = document.querySelector("input#read").checked;
        library.push(new book(title, author, genre, isRead));
        dialog.classList.add('hide');
        dialog.addEventListener('webkitAnimationEnd', function(){
            dialog.classList.remove('hide');
            dialog.close();
            dialog.removeEventListener('webkitAnimationEnd',  arguments.callee, false);
        }, false);
        addBookToLibrary();
    }else{
        addBookForm.reportValidity();
    }
}

function closeModal({ target: dialog }){
    if (dialog.nodeName === "DIALOG") {        
        dialog.classList.add('hide');
        dialog.addEventListener('webkitAnimationEnd', function(){
            dialog.classList.remove('hide');
            dialog.close();
            dialog.removeEventListener('webkitAnimationEnd',  arguments.callee, false);
        }, false);
    }
}

