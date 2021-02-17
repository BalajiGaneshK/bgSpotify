let response_type = "code";
let client_id = "465a082539fb4ba7a216fb3bec7f1ffc";
let redirect_uri = "https://bgspotify.netlify.app/index2.html";
let code_challenge_method = "S256";
let code_challenge = "a43a4462962f4975353cdac1b7e5d1a32fa7e523ac69855fbd782146807da45c";  //code verifier: bg-spotify


let authorization_uri = "https://accounts.spotify.com/authorize?response_type=" + response_type +
    "& client_id=" + client_id + "&redirect_uri=" + redirect_uri + "&code_challenge=" + code_challenge + "&code_challenge_method=" + code_challenge_method;

let newUrl;
let token;
if (window.location.href !== authorization_uri && window.location.href !== "https://bgspotify.netlify.app/")
{
    newUrl = window.location.href;
    console.log(newUrl);
    authCode = newUrl.split('=')[1];
    console.log("token:", authCode);

    let bodyURI = client_id + "/" + "authorization_code" + "-" + authCode + "-" + redirect_uri + "-" + code_challenge+":";

    fetch("https://accounts.spotify.com/api/token", { method: 'POST', body: bodyURI }).then(
        results => results.json()).then(console.log);
}
 // if(document.body.innerText.includes("Lorem"))
    //newUrl = window.location.href;


    
// state (CORS ) and scope( specific api end points) not included
