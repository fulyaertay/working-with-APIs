const searchBtn= document.querySelector(".search-btn")
const searchInput = document.querySelector(".search-input")
let profileCard= document.querySelector(".profile-card")

async function getProfile(){
    const res= await fetch("https://api.github.com/users/1")
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