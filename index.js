const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();
// const PORT = 3000;
const git = {
    "login": "param-code",
    "id": 109423225,
    "node_id": "U_kgDOBoWqeQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/109423225?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/param-code",
    "html_url": "https://github.com/param-code",
    "followers_url": "https://api.github.com/users/param-code/followers",
    "following_url": "https://api.github.com/users/param-code/following{/other_user}",
    "gists_url": "https://api.github.com/users/param-code/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/param-code/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/param-code/subscriptions",
    "organizations_url": "https://api.github.com/users/param-code/orgs",
    "repos_url": "https://api.github.com/users/param-code/repos",
    "events_url": "https://api.github.com/users/param-code/events{/privacy}",
    "received_events_url": "https://api.github.com/users/param-code/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Paramveer Singh",
    "company": null,
    "blog": "",
    "location": "India",
    "email": null,
    "hireable": null,
    "bio": "Learner\r\nCoder",
    "twitter_username": "Your_PARAM",
    "public_repos": 33,
    "public_gists": 0,
    "followers": 7,
    "following": 53,
    "created_at": "2022-07-16T13:32:31Z",
    "updated_at": "2025-02-14T13:30:48Z"
  };
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.send("Hii chai aur code");
})

app.get('/twitter',(req,res)=>{
    res.send("Hello from Twitter");
})

app.get('/file',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
})

app.get('/github',(req,res)=>{
    res.json(git);
})

app.get('/login',(req,res)=>{
    res.send("<h1>Welcome to the login Page</h1>");
})

app.listen(process.env.PORT,()=>{
    console.log(`App is listening on Port ${process.env.PORT}`); 
});