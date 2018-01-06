function MarsRover() {

    var me = this;
    me.location = [0, 0];
    me.direction = "N";
    me.directions = ["N", "E", "S", "W"];
    me.lastLocation = [];

    me.addRover = function (location, direction) {
        if (location === undefined) {
            me.location = [0, 0];
        } else {
            me.location = location;
        }
        if (direction === undefined) {
            me.direction = "N";
        } else {
            me.direction = direction;
        }
    };

    function move() {
        var xIncrease = 0;
        var yIncrease = 0;

        if (me.direction === "N") {
            yIncrease = 1;
        } else if (me.direction === "E") {
            xIncrease = 1;
        } else if (me.direction === "S") {
            yIncrease = -1;
        } else if (me.direction === "W") {
            xIncrease = -1;
        }
        me.location[0] += xIncrease;
        me.location[1] += yIncrease;
    }

    function turn(command) {
        var directionNumber = me.directions.indexOf(me.direction);
        if (command === "L") {
            directionNumber = (directionNumber + 4 - 1) % 4;
        } else if(command === "R"){
            directionNumber = (directionNumber + 1) % 4;
        }
        me.direction = me.directions[directionNumber];
    }

    me.sendCommand = function (commands) {
        if (commands === null || commands === undefined) {
            return this.commandsArray;
        } else {
            for (var index = 0; index < commands.length; index++) {
                var command = commands[index];
                if (command === "M") {
                    move();
                } else if (command === "B") {
                    move();
                }
                else if (command === "L") {
                    turn(command);
                } else if (command === "R") {
                    turn(command);
                }
            }
            var model = {
                location: me.location,
                direction: me.direction
            };
            me.lastLocation.push(model);
            this.commandsArray = commands;
        }
        return this.commandsArray;
    };

    me.getFinalPositions = function () {
        return me.lastLocation;
    };

}

var rover = new MarsRover();
rover.addRover([1, 2], 'N');
rover.sendCommand(['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M']);
rover.addRover([3, 3], 'E');
rover.sendCommand(['M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M']);

var result = rover.getFinalPositions();
result.forEach(function(item) {
	var res = '<p>'+ item.location[0] +' '+ item.location[1] +' '+ item.direction + '</p>';
	document.writeln(res);
});
