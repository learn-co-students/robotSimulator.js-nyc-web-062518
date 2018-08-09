class Robot {
	//your solution here
  constructor() {
    this.coordinates = [0,0];
    this.bearing = "north";
    this.validBearing = ["north", "west", "south", "east"];
  }

  setCoordinates(x, y) {
    this.coordinates = [x,y];
  }

  setBearing(direction) {
    if (this.validBearing.includes(direction)) {
      this.bearing = direction;
    } else {
        throw "Invalid Robot Bearing";
      }
    }


  place({x, y, direction}) {
    this.setCoordinates(x,y);
    this.setBearing(direction);
  }


  turnRight(direction) {
    if (this.bearing === "north") {
      this.setBearing("east");
    } else if
      (this.bearing === "east") {
      this.setBearing("south");
    } else if
      (this.bearing === "south") {
      this.setBearing("west");
    } else if
      (this.bearing === "west") {
      this.setBearing("north");
    }
  }


  turnLeft(direction) {
    if (this.bearing === "north") {
      this.setBearing("west");
    } else if
      (this.bearing === "east") {
      this.setBearing("north");
    } else if
      (this.bearing === "south") {
      this.setBearing("east");
    } else if
      (this.bearing === "west") {
      this.setBearing("south");
    }
  }


  advance() {
    if (this.bearing === "north") {
      this.coordinates[1] += 1;
      // this.setBearing("north");
    } else if
      (this.bearing === "east") {
      this.coordinates[0] += 1;
      // this.setBearing("east");
    } else if
      (this.bearing === "south") {
      this.coordinates[1] -= 1;
      // this.setBearing("east");
    } else if
      (this.bearing === "west") {
      this.coordinates[0] -= 1;
      // this.setBearing("east");
    }
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
