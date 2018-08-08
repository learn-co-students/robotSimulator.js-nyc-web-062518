class Robot {
	constructor() {
    this.bearing = "north"
    this.coordinates = [0, 0]
  }

  setCoordinates(x, y) { return this.coordinates = [x, y] }

  setBearing(bearing) {
    const validBearings = ["north", "south", "east", "west"]
    if (validBearings.includes(bearing)) {
      return this.bearing = bearing
    } else {
      throw "Invalid Robot Bearing"
    }
  }

  place(args) {
    this.setBearing(args.direction)
    this.setCoordinates(args.x, args.y)
  }

  turnRight(){
    if (this.bearing === "north") {
      this.bearing = "east"
    } else if (this.bearing === "east") {
      this.bearing = "south"
    } else if (this.bearing === "south") {
      this.bearing = "west"
    } else if (this.bearing === "west") {
      this.bearing = "north"
    }
  }

  turnLeft(){
    if (this.bearing === "north") {
      this.bearing = "west"
    } else if (this.bearing === "west") {
      this.bearing = "south"
    } else if (this.bearing === "south") {
      this.bearing = "east"
    } else if (this.bearing === "east") {
      this.bearing = "north"
    }
  }

  advance() {
    if (this.bearing === "north") {
      this.coordinates[1]++
    } else if (this.bearing === "west") {
      this.coordinates[0]--
    } else if (this.bearing === "south") {
      this.coordinates[1]--
    } else if (this.bearing === "east") {
      this.coordinates[0]++
    }
  }

  translateInstructions(string){
  const  instructions = string.split("")
    return instructions.forEach((inst) => {
      if (inst === "R"){
        this.turnRight()
      } else if (inst === "L") {
        this.turnLeft()
      } else if (inst === "A") {
        this.advance()
      }
    }
    )
  }

}
