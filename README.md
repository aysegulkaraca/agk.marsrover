# Mars Rover
'''javascript 
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

'''

'''sh
    1 3 N
    5 1 E
'''