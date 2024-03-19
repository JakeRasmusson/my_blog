let data = JSON.parse(localStorage.getItem('blog'))
console.log(data)
let section = document.querySelector('section')


data.forEach(blog => {
    let author = blog.authName;
    let title = blog.title;
    let content = blog.content;
    let authH2 = document.createElement('h2')
    let titleH3 = document.createElement('h3')
    let contentP = document.createElement('p')
    authH2.textContent = author
    titleH3.textContent = title
    contentP.textContent = content


    authH2.style.textAlign = 'center';
    authH2.style.width = '100%';
    authH2.style.border = '5px solid blue';
    authH2.style.fontSize = '35px'
    authH2.style.margin = '20px 0'


    titleH3.style.marginBottom = '15px'
    titleH3.style.textAlign = 'center';
    titleH3.style.width = '100%';
    titleH3.style.border = '5px solid blue';
    titleH3.style.borderStyle = 'hidden hidden solid';
    titleH3.style.fontSize = '35px'


    
    contentP.style.fontSize = '20px'
    contentP.style.marginBottom = "45px"
    contentP.style.textAlign = 'center'

   section.appendChild(authH2)
   section.appendChild(titleH3)
   section.appendChild(contentP)
});



