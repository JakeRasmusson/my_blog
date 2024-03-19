const blogPost = []
const form = document.getElementById('form')
form.addEventListener('submit', gatherBlog, false)


function gatherBlog() {
    const authName = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    if (authName === '' || title === '' || content === '') {
        alert('Please fill out all areas!')
        form.reset();
        return
    } else {
        blogPost.push({authName, title, content})
        localStorage.setItem('blog', JSON.stringify(blogPost))
        let data = JSON.parse(localStorage.getItem('blog'))
        console.log(data)
        form.reset();
        
    }
}

window.onload=function()
{
    document.getElementById('form').onsubmit=function(e)
    {
        e.preventDefault();
    }
};


darkAndBrooding.onclick = function() {
    var elem = document.body
    elem.classList.toggle('dark-mode')

}
