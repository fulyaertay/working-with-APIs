const searchBtn= document.querySelector(".search-btn")
const searchInput = document.querySelector(".search-input")
let profileCard= document.querySelector(".profile-card")

async function getProfile(){
    const res= await fetch("https://api.github.com/users/1")
    const data = await res.json()
        profileCard.innerHTML+=`
            <img src="${data.avatar_url}" class="github-avatar"/>
            <div class="user-content">
            <h4>${data.name}</h4>
            
            </div>
           
            
        `
}


getProfile()