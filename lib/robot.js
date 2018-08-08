class Robot {
	//your solution here
  constructor(coordinates, bearing){
    this.coordinates = [0,0]
    this.bearing = 'north'
  }
  setCoordinates(x,y){
    this.coordinates = [x,y]
  }
  setBearing(direction){
    switch(direction){
      case 'north':
      case 'south':
      case 'west':
      case 'east':
        this.bearing = direction
        break
      default:
        throw 'Invalid Robot Bearing'
    }
  }
  place(obj){
    this.bearing = obj.direction
    this.coordinates = [obj.x, obj.y]
  }
  turnRight(){
    switch(this.bearing){
      case 'north':
        this.bearing = 'east'
        break
      case 'east':
        this.bearing = 'south'
        break
      case 'south':
        this.bearing = 'west'
        break
      case 'west':
        this.bearing = 'north'
        break
    }
  }
  turnLeft(){
    switch(this.bearing){
      case 'north':
        this.bearing = 'west'
        break
      case 'west':
        this.bearing = 'south'
        break
      case 'south':
        this.bearing = 'east'
        break
      case 'east':
        this.bearing = 'north'
        break
    }
  }
  advance(){
    switch(this.bearing){
      case 'north':
        this.coordinates = [this.coordinates[0], this.coordinates[1]+ 1]
        break
      case 'west':
        this.coordinates = [this.coordinates[0]-1, this.coordinates[1]]
        break
      case 'south':
        this.coordinates = [this.coordinates[0], this.coordinates[1]- 1]
        break
      case 'east':
        this.coordinates = [this.coordinates[0]+1, this.coordinates[1]]
        break
    }
  }
  translateInstructions(command){
    const arr = command.split("")
    for (const letter of arr){
      switch(letter){
        case 'R':
          this.turnRight()
          break
        case 'L':
          this.turnLeft()
          break
        case 'A':
          this.advance()
          break
      }
    }
  }
}
