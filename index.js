$.getScript("src/newStatus.js");
$.getScript("src/allComments.js");
$.getScript("src/getJSON.js");
$.getScript("src/loadAllPosts.js");
$.getScript("/resources/box.js/box.js")

const projectInit = function() {
    $(document).ready(async function () {
        console.log('web page is still ready');
        //transfering from JSON file to posts and users object.
        let posts = await getJSON('/data/posts.json');
        let users = await getJSON('/data/users.json');

        //using this for Box
        let postIdCount = posts.length;
        
        //load all initial posts and comments****;
        loadAllPosts(posts, users);

        //finding and setting modal;
        let modal = document.getElementById('myModal');
        //open modal with click on 'post an update tab on navbar'
        $("#openModal").on('click', function(e) {
            modal.style.display = "block";
        })
        //closes modal on click anywhere outside of the modal
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        //submitting a post with 'post an update' on nav bar. 
        $("#submitPost").on('keyup', function (e) { 
            if (e.keyCode == 13 ) {
                const postValue = $("#submitPost").val()
                $("#submitPost").val(''); 

                postIdCount+=1;
                Box.store(postIdCount.toString(), postValue)

                $("#addStatus").append(newStatus(users, postIdCount,'Daniel Craig',[], postValue, 'images/profile/daniel-craig.jpg'));
                modal.style.display = "none";
            }
        });

        //new comments, also using this technique so you can comment anytime, even after newly dynamically generated info.
        $(document).on('keyup', 'input.enter', function (e) { 
            console.log('pressed enter');
            if (e.keyCode == 13 ) {
                const id = '#'+e.target.id;
                const postValue = $(id).val()
                $(id).val('');     
                $("#post"+e.target.id).append(addComment(postValue, 'Daniel Craig', 'images/profile/daniel-craig.jpg'));
            }
        });
    });
}

projectInit();			

if (Box.supported()) {

    // Write a value
    Box.store('name', 'value');
}