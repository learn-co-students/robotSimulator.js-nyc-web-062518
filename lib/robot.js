class Robot {
  constructor() {
      this.coordinates = [0, 0];
      this.bearing = "north";
      this.validBearing = ["north", "south", "east", "west"]
    }

 setCoordinates(x,y){
      this.coordinates = [x, y];
    }

 setBearing(direction){
   if (this.validBearing.includes(direction)){
     this.bearing = direction;
   } else {
     throw "Invalid Robot Bearing";
   }
 }

 place({x,y,direction}){
   this.setCoordinates(x,y);
   this.setBearing(direction);
 }

  turnRight(direction){
    if(this.bearing === "north"){
      this.setBearing("east");
    } else if
     (this.bearing === "east"){
      this.setBearing ("south");
    } else if
     (this.bearing === "south"){
      this.setBearing ("west");
    } else if
     (this.bearing === "west"){
      this.setBearing ("north");
    }
 }

 turnLeft(direction){
   if(this.bearing === "north"){
     this.setBearing("west");
   } else if
    (this.bearing === "east"){
     this.setBearing ("north");
   } else if
    (this.bearing === "south"){
     this.setBearing ("east");
   } else if
    (this.bearing === "west"){
     this.setBearing ("south");
   }
 }

  advance(direction){
    if(this.bearing === "north"){
      this.coordinates[1] +=1;
    } else if (this.bearing === "east"){
      this.coordinates[0] +=1;
    } else if (this.bearing === "south"){
      this.coordinates[1] -=1;
    } else if (this.bearing === "west"){
      this.coordinates[0] -=1;
    }
  }


  translateInstructions(instructions) {
   instructions.split("").forEach(instruction => {
     switch (instruction) {
       case "L":
         this.turnLeft();
         break;
       case "R":
         this.turnRight();
         break;
      case "A":
           this.advance();
           break;
         default:
           break;
       }
     });
   }

 }
