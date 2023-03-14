const posts=[
    {title:"Post One",body:"This is Post One",createdAt:new Date().getTime()},
    {title:"Post Two",body:"This is Post Tw0",createdAt:new Date().getTime()}
];
function getPosts() {
    
    let output='';
    for(let i=0;i<posts.length;i++){
        output+=`<li>${posts[i].title} last edited in ${new Date().getTime()-posts[i].createdAt} seconds ago </li>`
    }
    document.body.innerHTML=output;
}
getPosts();
function createpost(post,callback) {
    setTimeout(()=>{
        posts.push({...post,createdAt:new Date().getTime()});
        callback();
    },2000)
}    

function create4thPost(post,callback){
    setTimeout(()=>{
        posts.push({...post,createdAt:new Date().getTime()});
        callback();
    },6000)
    
   
}




createpost({title:"Post Three",body:"This is Post Three"},getPosts);
create4thPost({title:"Post Four",body:"This is Post Four"},getPosts);
