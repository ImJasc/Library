const library = [
    {
        "title": "Mistborn",
        "author": "Brandon Sanderson",
        "genre": "High Fantasy",
        "read": "yes"
    },
    {
        "title": "The Way of Kings",
        "author": "Brandon Sanderson",
        "genre": "High Fantasy",
        "read": "yes"
    }
]

function book(title, author, genre, read){
    this.title = title,
    this.author = author,
    this.genre = genre,
    this.read = read
}

function addBookToLibrary(){
    
}

//user interface


const dialog = document.querySelector("dialog");
const addButton = document.querySelector("button#button");

addButton.addEventListener("click", showDialog =>{
    dialog.showModal();
})

dialog.addEventListener("click", ({ target: dialog }) => {
    if (dialog.nodeName === "DIALOG") {
        dialog.classList.add('hide');
        dialog.addEventListener('webkitAnimationEnd', function(){
            dialog.classList.remove('hide');
            dialog.close();
            dialog.removeEventListener('webkitAnimationEnd',  arguments.callee, false);
    }, false);
    }
});