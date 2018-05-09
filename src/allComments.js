//render all comments if its greater than 0; 
function allComments (comments,users) {    
    let allComments = '';

    if(comments.length > 0){
        comments.forEach(function(post) {

            let content = post.content;
            let name = users[post.userId - 1].username;
            let thumbnail = users[post.userId -1].pic;

            allComments += addComment(content, name, thumbnail);
        })
    } 
    return allComments;
}

//add a comment
function addComment (post, userId, thumbnail){
    return  '<div class="comment-column" id="post-box">'+
                '<div class="comment-column left-comment-column">'+
					'<img src=/'+ thumbnail +' id="comment-logo"/>'+
                '</div>'+
                
                '<div class="comment-column right-comment-column" id="">'+
                    '<p class="bold-blue-name">'+ userId +'</p>'+
                    
                    '<p class="paragraph-alignment">'+ post +'</p>'+
				'</div>'+
            '</div> '
}