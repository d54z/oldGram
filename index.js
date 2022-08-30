const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        Liked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        Liked:false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        Liked:true
    }
]

const postsSection = document.getElementById("posts-section")
postsSection.innerHTML = ``
function loadPost(){
for (let i = 0; i < posts.length ; i++){
    const postInfo = posts[i]
    postsSection.innerHTML += `
    <div class="post">
    <div class="post-header">
        <img class="avatar-van" src="${postInfo.avatar}">
        <div class="post-header-info">
            <h3>${postInfo.name}</h3>
            <p>${postInfo.location}</p>
        </div>
    </div>
    <img class="post" src="${postInfo.post}">
    <div class="post-down">
        <div class="buttons">
            <img onclick="addlike('${postInfo.name}')" class="btns " id="${postInfo.name}" src="images/icon-heart.png">
            <img class="btns" src="images/icon-comment.png">
            <img class="btns" src="images/icon-dm.png">
        </div>
        <p id="${postInfo.name}-likes" class="likes">${postInfo.likes} Likes</p>

        <p class="comment"><span>${postInfo.username}</span>${postInfo.comment}</p>
    </div>
</div>  `
}
}
loadPost()

function addlike(postName){
    for (let i =0 ; i < posts.length ; i++){
        if (posts[i].name === postName){
            let likes = document.getElementById(postName + '-likes')
            
            if (posts[i].Liked === false)
            {posts[i].likes +=1
            likes.textContent = posts[i].likes + ' Likes'
            } else {
                posts[i].likes -=1
                likes.textContent = posts[i].likes + ' Likes'
            }
            const img = document.getElementById(postName)
            if(posts[i].Liked === false){
            img.style.backgroundColor = "red"
            posts[i].Liked = true    
        } else {
            img.style.backgroundColor = "white"
            posts[i].Liked = false
        }
        }
    } 



}
