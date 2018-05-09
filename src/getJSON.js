async function getJSON (url) {  
    let promisedArr = []; 
    await $.getJSON( url, async function( posts ) {
        $.each(posts, function(post, obj){
            promisedArr.push(obj);
        });
    });
    return promisedArr;
}
