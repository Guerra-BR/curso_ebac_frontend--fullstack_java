document.addEventListener('DOMContentLoaded', function(){
    const nSeguidores = document.getElementById('seguidores')
    const nSeguindo = document.getElementById('seguindo')
    const nRepositorios = document.getElementById('repos')
    const userName = document.getElementById('name')
    const profileImage = document.getElementById('avatar')
    const tag = document.getElementById('username')
    const link = document.getElementById('link')

    fetch('https://api.github.com/users/Guerra-BR')
        .then(function(res){
            return res.json()
        })
        .then(function(json){
            nSeguidores.innerText = json.followers
            nSeguindo.innerText = json.following
            nRepositorios.innerText = json.public_repos
            userName.innerText = json.name
            profileImage.src = json.avatar_url
            tag.innerText = json.login
            link.href = json.html_url
        })
})