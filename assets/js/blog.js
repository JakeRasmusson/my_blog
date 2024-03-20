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




    // let authH2 = document.createElement('h2')
    // let titleH3 = document.createElement('h3')
    // let contentP = document.createElement('p')

    // //adding content to dom objects
    // authH2.textContent = author
    // titleH3.textContent = title
    // contentP.textContent = content

    // dom object h2 styling
    // authH2.style.textAlign = 'center';
    // authH2.style.width = '100%';
    // authH2.style.border = '5px solid blue';
    // authH2.style.fontSize = '35px'
    // authH2.style.margin = '20px 0'

    // //dom object h3 styling
    // titleH3.style.marginBottom = '15px'
    // titleH3.style.textAlign = 'center';
    // titleH3.style.width = '100%';
    // titleH3.style.border = '5px solid blue';
    // titleH3.style.borderStyle = 'hidden hidden solid';
    // titleH3.style.fontSize = '35px'

    // //dom object p styling
    // contentP.style.fontSize = '20px'
    // contentP.style.marginBottom = "45px"
    // contentP.style.textAlign = 'center'
    // //adding created, modified, and styled objects to the dom
    // section.appendChild(authH2)
    // section.appendChild(titleH3)
    // section.appendChild(contentP)
});



