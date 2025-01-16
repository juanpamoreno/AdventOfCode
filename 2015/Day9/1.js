// This approach didn't work

const allLocations = []
const input = `AlphaCentauri to Snowdin = 66
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
Tristram to Arbre = 90`.split('\n').map(line => {
  const params = line.replace(' to', '').replace('= ', '').split(' ')
  if (!allLocations.includes(params[0])) allLocations.push(params[0])
  if (!allLocations.includes(params[1])) allLocations.push(params[1])
  return { route: [params[0], params[1]], distance: params[2] }
}).sort((a, b) => a.distance - b.distance)

let currentIndex = input.length
let lowestDistance = 0
while (currentIndex >= 0) {
  const visitRecords = new Map()
  let counter = 0
  let lastSelection = 0
  const hasVisitedAllLocations = () => Array.from(visitRecords.values()).every(element => element) && (visitRecords.size === allLocations.length)

  input.every((item, index) => {
    if (index !== currentIndex) {
      let firstLocationRoutesUsed, secondLocationRoutesUsed
      if (!visitRecords.has(item.route[0])) {
        visitRecords.set(item.route[0], 0)
      }
      if (!visitRecords.has(item.route[1])) {
        visitRecords.set(item.route[1], 0)
      }
      firstLocationRoutesUsed = visitRecords.get(item.route[0])
      secondLocationRoutesUsed = visitRecords.get(item.route[1])
  
      if (firstLocationRoutesUsed < 2 && secondLocationRoutesUsed < 2) {
        visitRecords.set(item.route[0], firstLocationRoutesUsed + 1)
        visitRecords.set(item.route[1], secondLocationRoutesUsed + 1)
        lastSelection = index
        counter += Number(item.distance)
      }
      if ((lowestDistance <= counter) && lowestDistance !== 0 && hasVisitedAllLocations()) return false
    }
    return true
  });

  if ((counter <= lowestDistance || lowestDistance === 0) && hasVisitedAllLocations()) lowestDistance = counter
  if (lastSelection < currentIndex) currentIndex = lastSelection
  else currentIndex -= 1
}

console.log(lowestDistance)
