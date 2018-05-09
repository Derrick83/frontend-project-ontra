function loadAllPosts (posts, users){

    let localStorageId = 7

    posts.forEach(function(post){
    
    let postId = post.id; 
    let name = users[post.userId-1].username;
    let comments = post.comments;
    let content = post.content; 
    let thumbnail = users[post.userId - 1].pic;

    $("#addStatus").append(newStatus(users, postId, name, comments, content, thumbnail))

    })

    let memoryStatus = Box.fetch(localStorageId.toString());
    if(typeof memoryStatus === 'string'){
        $("#addStatus").append(newStatus(users, localStorageId, 'Daniel Craig', [], memoryStatus, 'images/profile/daniel-craig.jpg'))
        console.log(localStorageId);
        localStorageId++;
    }
    
}
