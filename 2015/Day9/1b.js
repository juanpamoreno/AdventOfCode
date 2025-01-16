// Copied from Reddit

"use strict"
const shuffle = (array) => {
  let out = []
  while (array.length) {
    const index = Math.floor(Math.random() * array.length)
    out.push(array.splice(index, 1)[0])
  }
  return out
}

const lines = `AlphaCentauri to Snowdin = 66
AlphaCentauri to Tambi = 28
AlphaCentauri to Faerun = 60
AlphaCentauri to Norrath = 34
AlphaCentauri to Straylight = 34
AlphaCentauri to Tristram = 3
AlphaCentauri to Arbre = 108
Snowdin to Tambi = 22
Snowdin to Faerun = 12
Snowdin to Norrath = 91
Snowdin to Straylight = 121
Snowdin to Tristram = 111
Snowdin to Arbre = 71
Tambi to Faerun = 39
Tambi to Norrath = 113
Tambi to Straylight = 130
Tambi to Tristram = 35
Tambi to Arbre = 40
Faerun to Norrath = 63
Faerun to Straylight = 21
Faerun to Tristram = 57
Faerun to Arbre = 83
Norrath to Straylight = 9
Norrath to Tristram = 50
Norrath to Arbre = 60
Straylight to Tristram = 27
Straylight to Arbre = 81
Tristram to Arbre = 90`.split("\n")
const routes = lines.reduce((mem, line) => {
  const [path, dist] = line.split(" = ")
  const [from, to] = path.split(" to ")
  mem[from] = mem[from] || {}
  mem[to] = mem[to] || {}

  mem[from][to] = parseInt(dist)
  mem[to][from] = parseInt(dist)

  return mem
}, {})

let locs = Object.keys(routes)
let max = false

for (let i = 0; i < 1000000; i++) {
  locs = shuffle(locs)

  let len = 0
  for (let l = 0; l < (locs.length - 1); l++) {
    const from = locs[l]
    const to = locs[l + 1]

    len += routes[from][to]
  }

  max = Math.min(max, len) || len
  console.log(i, max)
}

console.log(max)