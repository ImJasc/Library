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
        console.log(library);
        dialog.classList.add('hide');
        dialog.addEventListener('webkitAnimationEnd', function(){
            dialog.classList.remove('hide');
            dialog.close();
            dialog.removeEventListener('webkitAnimationEnd',  arguments.callee, false);
        }, false);
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

