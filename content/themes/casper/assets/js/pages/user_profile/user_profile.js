const userId = document.getElementById("uuid").innerHTML || 0

if(TechFiIntegrationBaseURL && userId){
    const getUrl = TechFiIntegrationBaseURL + '/users/saved_posts?userId=' + userId;
    const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            res = JSON.parse(this.responseText)
            
        }
        xhttp.open("GET", getUrl);
        xhttp.send();

}