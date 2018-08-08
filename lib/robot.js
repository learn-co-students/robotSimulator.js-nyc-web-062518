class Robot {
	//your solution here
  constructor(bearing = "north", coordinates = [0,0]){
    this.bearing = bearing;
    this.coordinates = coordinates;
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y];
  }

  setBearing(direction) {
    const validDirections = ["north", "south", "east", "west"];
    if (validDirections.includes(direction)) {
      this.bearing = direction;
    } else {
      throw "Invalid Robot Bearing";
    }
  }

  place(args) {
    this.setBearing(args.direction);
    this.setCoordinates(args.x, args.y);
  }

  turnRight(){
    switch(this.bearing) {
      case "north":
        this.setBearing("east");
        break;
      case "east":
        this.setBearing("south");
        break;
      case "south":
        this.setBearing("west")
        break;
      case "west":
        this.setBearing("north")
        break;
    }
  }

  turnLeft(){
    switch(this.bearing) {
      case "north":
        this.setBearing("west");
        break;
      case "west":
        this.setBearing("south");
        break;
      case "south":
        this.setBearing("east")
        break;
      case "east":
        this.setBearing("north")
        break;
    }
  }

  advance() {
    switch(this.bearing) {
      case "north":
        this.coordinates[1]++
        break;
      case "east":
        this.coordinates[0]++
        break;
      case "south":
        this.coordinates[1]--
        break;
      case "west":
        this.coordinates[0]--
        break;
    }
  }

  executeIntrsuction(letter){
    switch (letter) {
      case "L":
        this.turnLeft();
        break;
      case "R":
        this.turnRight();
        break;
      case "A":
        this.advance();
        break;
    }
  }

  translateInstructions(letters) {
    [...letters].forEach(letter => this.executeIntrsuction(letter))
  }

}
