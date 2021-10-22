const LinksSocialMedia = {
  github:"BrendaDoswaldo",
  youtube: "Brenda Rodrigues",
  facebook:"Brenda bre__rodrigues",
  instagram: "bre__rodrigues",
  twitter: "brendarodrigues"
}

function ChangeSocialMediaLinks() {
 for(let li of sociaLinks.children) {
  const social = li.getAttribute('class') 

  li.children[0].href = `https://${social}.com/${ LinksSocialMedia[social]}`

 }
}

ChangeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userPhoto.src = data.avatar_url
    userLink.textContent = data.login
  })
}

getGitHubProfileInfos()