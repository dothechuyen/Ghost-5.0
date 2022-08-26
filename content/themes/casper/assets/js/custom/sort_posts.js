const baseURL = "http://localhost:2368/ghost/api/v3/content/posts/"
const key = "49546421dd1b01e92a02d8c2ac"
var id_score = [];
var ids = [];
var xhr = new XMLHttpRequest();
const params = `?key=${key}&fields=id`
xhr.open("GET", baseURL + params)
xhr.onload = function(){
    res = JSON.parse(this.responseText);
    const postIDs = res?.posts
    if(postIDs && TechFiIntegrationBaseURL){
        ids = postIDs.map(post => post.id)
        id_score = ids.forEach(postId => {
            const getUrl = TechFiIntegrationBaseURL + "/posts?postId=" + postId
            var api = new XMLHttpRequest()
            api.open("GET", getUrl)
            var score = 0;
            api.onload = function(){
                res = JSON.parse(this.responseText)
                const like = res?.postInfo?.like ? res.postInfo.like : 0;
                const clap = res?.postInfo?.clap ? res.postInfo.clap : 0;
                score = like * 10 + clap
            }
            api.send()
            return {id: postId, score: score};
        });
        id_score.sort((a,b) => b.score - a.score)
    }
}
xhr.send()