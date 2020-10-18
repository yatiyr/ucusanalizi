/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */


function giveEdges(controlPoints) {
    var edges = [];

    for(var i=0; i<controlPoints.length -1; i++) {
        var edge = {first: controlPoints[i], second: controlPoints[i+1]};
        edges.push(edge);
    }

    return edges;
}


function giveEdgePoint(edge, t) {

    return {x: edge.first.x + t * (edge.second.x - edge.first.x),
            y: edge.first.y + t * (edge.second.y - edge.first.y)};

}

export function givePointOnBezier(controlPoints, t) {

    var edges = giveEdges(controlPoints);


    if(edges.length == 1) {
        return giveEdgePoint(edges[0], t);
    }
    else {
        var newPoints = [];
        for(var i=0; i<edges.length; i++) {
            var edge = edges[i];
            newPoints.push(giveEdgePoint(edge, t));
        }

        return givePointOnBezier(newPoints, t);
    }
}

export function timeFunction(controlPoints,t) {

    var points = controlPoints;

    var pointf = {x: 0, y: 0};
    var pointl = {x: 1, y: 1};

    points.unshift(pointf);
    points.push(pointl);

    return givePointOnBezier(points, t);
}


export function move() {
    var elem = document.querySelector('#svg1');

    var progress = 0;
    var id = setInterval(frame, 5);
  
    var x = 500
    
    var from = 0;
    var to = 500;
  
    function frame() {
      
      var t = progress/400;
      
      var func = timeFunction([{x: .6, y: 1.43},{x: .64, y: -.44}],t).y;
      var pro = from + (to-from)*func;
      
      if (progress == 400) {
        clearInterval(id);
      } else {
        progress++;
        elem.style.left = pro + 'px';
      }
    }

}
