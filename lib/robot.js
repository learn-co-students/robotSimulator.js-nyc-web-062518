class Robot {
  constructor() {
    this.coordinates = [0,0]
    this.bearing = 'north'
  }

  setCoordinates(x, y) {
    this.coordinates = [x,y]
  }

  setBearing(direction) {
    const directions = ["north", "south", "east", "west"]
    if (directions.includes(direction)) {
      this.bearing = direction
    } else {
      throw 'Invalid Robot Bearing'
    }
  }

  place(placeObj) {
    this.setCoordinates(placeObj.x, placeObj.y)
    this.setBearing(placeObj.direction)
  }

  turnRight() {
    if (this.bearing == 'north') { this.bearing = 'east' }
    else if (this.bearing == 'east') { this.bearing = 'south' }
    else if (this.bearing == 'south') { this.bearing = 'west' }
    else { this.bearing = 'north' }
  }

  turnLeft() {
    if (this.bearing == 'north') { this.bearing = 'west' }
    else if (this.bearing == 'west') { this.bearing = 'south' }
    else if (this.bearing == 'south') { this.bearing = 'east' }
    else { this.bearing = 'north' }
  }

  advance() {
    let x = this.coordinates[0]
    let y = this.coordinates[1]
    if (this.bearing == 'north') { this.coordinates = [x, y+1]}
    else if (this.bearing == 'west') { this.coordinates = [x-1, y]}
    else if (this.bearing == 'south') { this.coordinates = [x, y-1]}
    else { this.coordinates = [x+1, y]}
  }

  translateInstructions(instruction) {
    for(let char of instruction) {
      if (char === "R") {
        this.turnRight()
      } else if(char === "L") {
        this.turnLeft()
      } else if(char === "A") {
        this.advance()
      }
    }
  }

}
