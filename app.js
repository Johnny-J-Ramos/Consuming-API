async function getContent() {
  try {
  const response = await fetch('http://localhost:3000/')
    //console.log(response)
    const data = await response.json()

    show(data)

  } catch (error) {
    console.log('errouuu')
  }
}

getContent()

function show(users) {
  let output = ''

  for(let user  of users) {
    output += `<li>${user.name}</li>`
  }

  document.querySelector('main').innerHTML = output
}
