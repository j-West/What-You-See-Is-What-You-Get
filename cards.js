let people = [
               {
                title: "Entertainer",
                name: "Andy Bernard",
                bio: "Andy Bernard because famous when a clip of his audition to 'America's next acapella sensation' went viral.  Andy once led a paper sales office to it's highest daily sales numbers.  His reward, a tattoo on his butt.",
                image: "https://media0.giphy.com/media/8VrtCswiLDNnO/200_s.gif",
                lifespan: {
                  birth: 1977,
                  death: "Living"
                          }
               },
               {
                title: "Ninja",
                name: "Diamond Dave",
                bio: "With special guest appearences on talk show TV, Diamond Dave because famous for his lousy ninja skills.  Most notiably, his ninji star attack, during which he pulls a can of tobacco out of his back pocket and throws it are his adversary.",
                image: "https://cdn.meme.am/cache/instances/folder335/250x250/59756335.jpg",
                lifespan: {
                  birth: 1973,
                  death: 2014
                          }
               },
               {
                title: "Snake",
                name: "Slithery Snake",
                bio: "The exact name of Slithery Snake is still unknown to this day.  Slithery Snake disappeared as mysteriously as Slithery Snake appeared.  What is known, is that Slithery Snake is, well, a Slithery Snake",
                image: "https://cdn.meme.am/cache/instances/folder857/250x250/57395857.jpg",
                lifespan: {
                  birth: "unknown",
                  death: "unknown"
                          }
               },

             ]

let containerDiv = document.querySelector("#container")
let inputField = document.querySelector("#input-field")
let bioElement;

function noBorders() {
  let peopleElements = container.querySelectorAll(".target-el-class")

  for (var i = 0; i < peopleElements.length; i++) {
    peopleElements[i].classList.remove("border-class")
  }
}


function changeBio(e) {
  bioElement.innerHTML = inputField.value
  if (e.code === "Enter") {
    bioElement.innerHTML = inputField.value
    inputField.value = ""
    noBorders()
  }
}


function inputToBio() {
  inputField.addEventListener("keyup", changeBio)
}


for (var i = 0; i < people.length; i++) {
  let backgroundColor;
  let peopleDiv = document.createElement("div")

  if (i % 2 === 0) {
    backgroundColor = "even-class"
  } else {
    backgroundColor = "odd-class"
  }

  peopleDiv.classList.add(backgroundColor,"people-div", "people-" + i)
  peopleDiv.innerHTML = `
                          <header>
                            <h2 class="target-el-class">${people[i].name}</h2>
                            <h4 class="target-el-class">${people[i].title}</h4>
                          </header>
                          <section>
                            <p class="target-el-class bio-el">${people[i].bio}</p>
                            <img class="target-el-class"  src=${people[i].image}>
                          </section>
                          <footer>
                            <p class="target-el-class">Lifespan: ${people[i].lifespan.birth}-${people[i].lifespan.death}</p>
                          </footer>
                        `
containerDiv.appendChild(peopleDiv)
}
