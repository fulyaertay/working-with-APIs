const searchBtn= document.querySelector(".search-btn")
const searchInput = document.querySelector(".search-input")
let profileCard= document.querySelector(".profile-card")

document.addEventListener("click",(e) => {
    if (e.target.id=="fa-search"){
        if(searchInput.value!="")
            searchProfile()

    }
})

async function searchProfile(){
    searchInput.value=searchInput.value.toLowerCase()
    const res= await fetch(`https://api.github.com/users/${searchInput.value}`)
    const data = await res.json()
        profileCard.innerHTML=`
            <img src="${data.avatar_url}" class="github-avatar"/>
            <div class="user-content">
            <h2>${data.name}</h2>
            <h4>${data.location}</h4>
            <div class="statistics">
            <h5>${data.followers} Followers</h5>
            <h5>${data.following} Following</h5>
            <h5>${data.public_repos} Repos</h5>
           
            
            </div>
            <h5><a href="${data.html_url}"> See  Profile</a></h5>
            
            </div>
           
            
        `
}

async function getProfile(){
   let users= Math.floor(Math.random()*100)+1
   const res= await fetch(`https://api.github.com/users/${users}`)
   const data = await res.json()
       profileCard.innerHTML+=`
           <img src="${data.avatar_url}" class="github-avatar"/>
           <div class="user-content">
           <h2>${data.name}</h2>
           <h4>${data.location}</h4>
           <div class="statistics">
           <h5>${data.followers} Followers</h5>
           <h5>${data.following} Following</h5>
           <h5>${data.public_repos} Repos</h5>
          
           
           </div>
           <h5><a href="${data.html_url}"> See  Profile</a></h5>
           
           </div>
           `
          
           
 
        
}


getProfile()