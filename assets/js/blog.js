//Getting local stored blogs
let data = JSON.parse(localStorage.getItem('blog'))
console.log(data)
//Section of HTML that blogs will push to
let section = document.querySelector('section')

//Looping through data array to created blogs
data.forEach(blog => {
    //Fields to fiill out
    let author = blog.authName;
    let title = blog.title;
    let content = blog.content;
    //creating dom objects

    const post = `
        <h2>${author}</h2>
        <h3>${title}</h3>
        <p>${content}</p> 
    `
    let div = document.createElement('div');
    div.innerHTML = post;
    section.appendChild(div)

});



