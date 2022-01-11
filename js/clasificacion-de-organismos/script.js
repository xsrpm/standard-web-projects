//https://test.defontana.com/
const organisms = {
  data: [
    {
      ID: '4',
      Name: 'uryarchaeota',
      Parent: 2
    },
    {
      ID: '5',
      Name: 'renarchaeota',
      Parent: 2
    },
    {
      ID: '6',
      Name: 'orarchaeota',
      Parent: 2
    },
    {
      ID: '7',
      Name: 'occals',
      Parent: 3
    },
    {
      ID: '1',
      Name: 'ukaryota',
      Parent: 0
    },
    {
      ID: '2',
      Name: 'rchaea',
      Parent: 0
    },
    {
      ID: '3',
      Name: 'acteria',
      Parent: 0
    },
    {
      ID: '8',
      Name: 'acilus',
      Parent: 3
    },
    {
      ID: '9',
      Name: 'pirillum',
      Parent: 3
    },
    {
      ID: '10',
      Name: 'Vibrio',
      Parent: 3
    },
    {
      ID: '11',
      Name: 'Plants',
      Parent: 1
    },
    {
      ID: '12',
      Name: 'Animals',
      Parent: 1
    },
    {
      ID: '13',
      Name: 'Fungi',
      Parent: 1
    },
    {
      ID: '14',
      Name: 'Protista',
      Parent: 1
    },
    {
      ID: '15',
      Name: 'Nonvascular',
      Parent: 11
    },
    {
      ID: '16',
      Name: 'Vascular',
      Parent: 11
    },
    {
      ID: '17',
      Name: 'Seedless',
      Parent: 16
    },
    {
      ID: '18',
      Name: 'With seed',
      Parent: 16
    },
    {
      ID: '19',
      Name: 'Gymnosperm',
      Parent: 18
    },
    {
      ID: '20',
      Name: 'Anglosperm',
      Parent: 18
    },
    {
      ID: '21',
      Name: 'Basidiomycetes',
      Parent: 13
    },
    {
      ID: '22',
      Name: 'Zygomicetes',
      Parent: 13
    },
    {
      ID: '23',
      Name: 'Ascomycetes',
      Parent: 13
    },
    {
      ID: '25',
      Name: 'Cnidarians',
      Parent: 12
    },
    {
      ID: '26',
      Name: 'Bilateral',
      Parent: 12
    },
    {
      ID: '27',
      Name: 'Arthopods',
      Parent: 26
    },
    {
      ID: '28',
      Name: 'Vertebrates',
      Parent: 26
    },
    {
      ID: '29',
      Name: 'Mollusks',
      Parent: 26
    },
    {
      ID: '30',
      Name: 'Crustaceans',
      Parent: 27
    },
    {
      ID: '31',
      Name: 'Arachnids',
      Parent: 27
    },
    {
      ID: '32',
      Name: 'Myriapods',
      Parent: 27
    },
    {
      ID: '33',
      Name: 'Insects',
      Parent: 27
    },
    {
      ID: '34',
      Name: 'Cartilaginous Fish',
      Parent: 28
    },
    {
      ID: '35',
      Name: 'Tetrapods',
      Parent: 28
    },
    {
      ID: '36',
      Name: 'Bony Fish',
      Parent: 28
    },
    {
      ID: '37',
      Name: 'Amphibians',
      Parent: 35
    },
    {
      ID: '38',
      Name: 'Amniotes',
      Parent: 35
    },
    {
      ID: '39',
      Name: 'Birds and  Reptiles',
      Parent: 38
    },
    {
      ID: '40',
      Name: 'Mammals',
      Parent: 38
    },
    {
      ID: '41',
      Name: 'Placentals',
      Parent: 40
    },
    {
      ID: '42',
      Name: 'Marsupials',
      Parent: 40
    },
    {
      ID: '43',
      Name: 'Monotremes',
      Parent: 40
    },
    {
      ID: '44',
      Name: 'Turtles',
      Parent: 39
    },
    {
      ID: '45',
      Name: 'Lizards',
      Parent: 39
    },
    {
      ID: '46',
      Name: 'Snakes',
      Parent: 39
    }
  ]
}
const children = new Map()

function makeTree(organisms) {
  organisms.data.sort((a, b) => a.Parent - b.Parent)
  // console.log(organisms.data)
  for (let i = 0; i < organisms.data.length; i++) {
    if (children.has(organisms.data[i].Parent)) {
      children.get(organisms.data[i].Parent).push(organisms.data[i])
    } else {
      children.set(organisms.data[i].Parent, [organisms.data[i]])
    }
  }
  /*Printing the tree in console*/
  /*
  const it = children.entries()
  let result = it.next()
  while (!result.done) {
    console.log(result.value)
    result = it.next()
  }
  */
}

makeTree(organisms)

const root = document.getElementById('root')
let colors = [
  '#f9b99b',
  '#b3b225',
  '#ef9385',
  '#5c9d78',
  '#a214d9',
  '#2798ab',
  '#a791e4',
  '#e12548',
  '#2351f6',
  '#a5f623'
]
let colorPos = 0
function getRandomColor() {
  if (colorPos === colors.length) colorPos = 0
  return colors[colorPos++]
}
let acualColor

function makeNodeDOM(nodeId) {
  const ul = document.createElement('ul')
  if (nodeId > 0) ul.classList.add('nested')
  const childrenNode = children.get(nodeId)
  for (let j = 0; j < childrenNode.length; j++) {
    const li = document.createElement('li')
    actualColor = getRandomColor()
    console.log(actualColor)
    li.style.backgroundColor = actualColor
    const name = document.createElement('span')
    name.classList.add('caret')
    name.innerHTML = childrenNode[j].Name
    li.appendChild(name)
    if (children.has(parseInt(childrenNode[j].ID))) {
      li.appendChild(makeNodeDOM(parseInt(childrenNode[j].ID)))
    }
    ul.appendChild(li)
  }
  return ul
}

root.appendChild(makeNodeDOM(0))

const toggler = document.getElementsByClassName('caret')

for (let i = 0; i < toggler.length; i++) {
  if (toggler[i].parentElement.querySelector('ul') === null) {
    toggler[i].classList.add('leaf')
    toggler[i].parentElement.style.backgroundColor = 'transparent'
  } else {
    toggler[i].addEventListener('click', function () {
      this.parentElement.querySelector('.nested').classList.toggle('active')
      this.classList.toggle('caret-down')
    })
  }
}
