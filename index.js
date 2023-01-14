
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class','dog-name')
header.append('Rizzo')
content.append(header)

let image = document.createElement('img')
image.setAttribute('class','dog-image')
image.src = './assets/rizzo.jpg'
content.append(image)

let desc = document.createElement('h3')
desc.setAttribute('class','dog-details')
desc.append('Description:')
content.append(desc)

let par = document.createElement('p')
par.setAttribute('class','dog-details')
par.append("This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.")
content.append(par)

let listName = document.createElement('h3')
listName.setAttribute('class','dog-details')
listName.append('Feeding Times:')
content.append(listName)

let listItem1 = document.createElement('li')
listItem1.setAttribute('class','ul')
listItem1.append('9:00 am')
content.append(listItem1)

let listItem2 = document.createElement('li')
listItem2.setAttribute('class','ul')
listItem2.append('12:00 pm')
content.append(listItem2)

let listItem3 = document.createElement('li')
listItem3.setAttribute('class','ul')
listItem3.append('12:00 pm')
content.append(listItem3)
