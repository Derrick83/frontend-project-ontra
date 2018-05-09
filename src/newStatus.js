//renders individual status and all comments within that status. Linked to allComments.js; 

function newStatus (users, postId, name, comments, status, image){ 
    return '<div class="full-status-column ">'+
                '<div class="column left-status-column">'+
                    '<img src=/'+ image + ' id="logo"/>'+
                '</div>'+
                '<p class="bold-blue-name" style="margin-top:8px;">'+ name +'</p>'+
                '<p class="paragraph-alignment">' + status +'</p>'+
           '</div>'+
           allComments(comments,users) +
           '<div id=post'+ postId + '></div>'+
           '<input class="enter" id=' +postId +' placeholder="post a comment here" value=""></input>'+
           '<br>'    
}