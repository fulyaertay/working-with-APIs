/**
 Challenge:
 
 GET a list of blog posts from the JSON Placeholder API.
 
 BaseURL: https://apis.scrimba.com/jsonplaceholder/
 Endpoint: /posts
 
 Since there's so many posts, let's limit the array to just 5 items.
 You can use the `.slice()` array method to just grab the first 5 objects
 from the data array that comes back from the API
 
 Log the 5 items to the console
 */

 fetch("https://apis.scrimba.com/jsonplaceholder/posts")
 .then(res => res.json())
 .then(data => {
     const postsArr = data.slice(0, 5)
     console.log(postsArr)
 })