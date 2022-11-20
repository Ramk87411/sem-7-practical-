function areaOfRectangle(){
    var l = parseFloat(document.getElementById('rectLen').value);
    var b = parseFloat(document.getElementById('rectBre').value);
    var area = l * b;
    document.getElementById("rectarea").innerHTML = "Area of rectangle is: "+ area;
}

function areaOfTriangle(){
    var l = parseFloat(document.getElementById('triBase').value);
    var b = parseFloat(document.getElementById('triHei').value);
    var area = 0.5 * l * b;
    document.getElementById("triarea").innerHTML = "Area of triangle is: "+ area;
}

function areaOfCircle(){
    var r = parseFloat(document.getElementById('radius').value);
    var area = Math.PI * r * r;
    document.getElementById("circlearea").innerHTML = "Area of circle is: "+ area;
}