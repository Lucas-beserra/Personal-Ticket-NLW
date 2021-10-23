// INSERÇÃO DOS LINKS ATRAVÉS DO JS //

const links = {
  youtube: 'channel/UC8ICFUKGsJFIQwOhna61OZg',
  instagram: 'lucas_beserra88',
  github: 'Lucas-beserra'
}

function changeLinksSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${links[social]}`
  }
}

changeLinksSocialMedia()

// CONSUMO DA API DO GITHUB //

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGitHubLink.href = data.html_url
      porfilePhoto.src = data.avatar_url
    })
}

getGitHubProfileInfos()

// ANIMAÇÃO DO USERNAME GITHUB //

userGitHubLink.addEventListener('mouseover', function () {
  this.classList.add('link')
})

userGitHubLink.addEventListener('mouseleave', function () {
  this.classList.remove('link')
})
