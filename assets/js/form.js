//Array that will hold Blog objects
let blogPost = []

//HTML form
const form = document.getElementById('form')

//removes defualt form HTML functions and calls gather blog function on form submit

form.onsubmit = function (e) {
        e.preventDefault();
        gatherBlog()
}


//Adds current localstorage content to the blogpost array so it isn't overwritten
function checkLocalStorage() {
    let storedPost = JSON.parse(localStorage.getItem('blog'))
    if (storedPost !== null) {
        blogPost = storedPost;
    }
}

//Gathers form fields and stores in local storage
function gatherBlog() {
    const authName = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    //checks if any fields are empty
    if (authName === '' || title === '' || content === '') {
        alert('Please fill out all areas!')
        return
    } else {
        //addding blogs to local storage, resets form fields, and redirects to the blogs page
        blogPost.push({ authName, title, content })
        localStorage.setItem('blog', JSON.stringify(blogPost))
        form.reset();
        window.location.href = "blog.html";

    }
}

//checks local storage
checkLocalStorage()