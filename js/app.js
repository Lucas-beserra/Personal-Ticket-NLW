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

// ANIMAÇÃO DO H1 E SAIBA MAIS //

var link = document.getElementById('userGitHubLink')
var saibaMais = document.getElementById('saiba-mais')

link.addEventListener('mouseover', function () {
  this.classList.add('link')
})

link.addEventListener('mouseleave', function () {
  this.classList.remove('link')
})

saibaMais.addEventListener('mouseover', function () {
  this.classList.add('saiba-mais')
})

saibaMais.addEventListener('mouseleave', function () {
  this.classList.remove('saiba-mais')
})
