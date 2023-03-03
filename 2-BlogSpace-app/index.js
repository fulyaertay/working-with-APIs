/**
 Challenge:

 With the 5 blog post objects, display the `title` and `body`
properties of the first 5 posts on the browser page.
 
 Hints: 
 * Create a `div` in the HTML file to store these items
 * Loop over the items creating a string of HTML elements you 
   can then put into the div with `innerHTML`
 */

   fetch("https://apis.scrimba.com/jsonplaceholder/posts")
   .then(res => res.json())
   .then(data => {
       const postsArr = data.slice(0, 5)
       let html = ""
       for (let post of postsArr) {
           html += `
               <h3>${post.title}</h3>
               <p>${post.body}</p>
               <hr />
           `
       }
       document.getElementById("blog-list").innerHTML = html
   })