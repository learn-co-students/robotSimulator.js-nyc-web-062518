class Robot {

  constructor(){
    this.coordinates = [0, 0]
    this.bearing = 'north'
  }

  setCoordinates(x, y){
    this.coordinates = [x, y]
  }

  setBearing(direction){
    const allDir = ["north", "south", "east", "west"]
    let dir = allDir.filter( (dir)  => { return dir === direction } )
    if (dir.length > 0){
      this.bearing = dir[0]
    }
    else {
      throw "Invalid Robot Bearing";
    }
  }

  place(orientation){
    this.coordinates = [orientation.x, orientation.y]
    this.bearing = [orientation.direction]
  }

  turnRight(){
    if (this.bearing == 'north'){
       this.bearing = 'east'
     }else if (this.bearing == 'east') {
        this.bearing = 'south'
    }else if (this.bearing == 'south') {
       this.bearing = 'west'
    }else {
       this.bearing = 'north'
     }
  }

  turnLeft(){
    if (this.bearing == 'north'){
       this.bearing = 'west'
    }else if (this.bearing == 'west'){
       this.bearing = 'south'
    }else if (this.bearing == 'south'){
       this.bearing = 'east'
    }else {
       this.bearing = 'north'
    }
  }

  advance(){
    switch (this.bearing) {
      case "north":
        this.coordinates = [this.coordinates[0], this.coordinates[1]+1]
        break;
      case "west":
        this.coordinates = [this.coordinates[0]-1, this.coordinates[1]]
        break;
      case "south":
        this.coordinates = [this.coordinates[0], this.coordinates[1]-1]
        break;
      case "east":
        this.coordinates = [this.coordinates[0]+1, this.coordinates[1]]
        break;
    }
  }

  translateInstructions(instructions){
    let instructionArray = instructions.split('');
    for(let i = 0; i < instructionArray.length; i++){
      switch (instructionArray[i]) {
        case 'L':
          this.turnLeft();
          break;
        case 'R':
          this.turnRight();
          break;
        case 'A':
          this.advance();
          break;
      }
    }
  }
}
