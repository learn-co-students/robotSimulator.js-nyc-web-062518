class Robot {
  //your solution here
  constructor() {
    this.coordinates = [0, 0]
    this.bearing = 'north'
  }

  setCoordinates(x, y) {
    return this.coordinates = [x, y]
  }

  setBearing(bearing) {
    let directions = ['north', 'south', 'east', 'west']
    if (directions.includes(bearing)) {
      return this.bearing = bearing
    } else {
      throw ('Invalid Robot Bearing')
    }
  }

  place(object){
    return this.setCoordinates(object["x"], object["y"]) && this.setBearing(object["direction"])
    }

   turnRight(){
    switch (this.bearing){
      case 'north':
        this.bearing = 'east'
        break;
      case 'east':
        this.bearing = 'south'
        break;
      case 'south':
        this.bearing = 'west'
        break;
      case 'west':
        this.bearing = 'north'
        break;
    }
  }

  turnLeft(){
   switch (this.bearing){
     case 'north':
       this.bearing = 'west'
       break;
     case 'west':
       this.bearing = 'south'
       break;
     case 'south':
       this.bearing = 'east'
       break;
     case 'east':
       this.bearing = 'north'
       break;
   }
 }

 advance(){
   switch (this.bearing){
     case 'north':
        this.coordinates = [this.coordinates[0], this.coordinates[1]+1]
        break;
      case 'east':
        this.coordinates = [this.coordinates[0]+1, this.coordinates[1]]
        break;
      case 'west':
          this.coordinates = [this.coordinates[0]-1, this.coordinates[1]]
          break;
      case 'south':
            this.coordinates = [this.coordinates[0], this.coordinates[1]-1]
            break;

   }
 }

  translateInstructions(instructions){
    for(let i=0; i<instructions.length; i++){
      switch(instructions.charAt(i)){
        case 'L':
          this.turnLeft()
          break;
        case 'R':
          this.turnRight()
          break;
        case 'A':
          this.advance()
          break;
      }
    }
  }



}
