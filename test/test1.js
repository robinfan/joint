var r = Raphael("world", 640, 480);

var isDrag = false;
var dragger = function(e){
    this.dx = e.clientX;
    this.dy = e.clientY;
    isDrag = this;
    this.animate({"fill-opacity": .1}, 500);
    e.preventDefault && e.preventDefault();
};

document.onmousemove = function(e){
    e = e || window.event;
    if (isDrag) {
        isDrag.translate(e.clientX - isDrag.dx, e.clientY - isDrag.dy);
        r.safari();
        isDrag.dx = e.clientX;
        isDrag.dy = e.clientY;
    } 
};

document.onmouseup = function(){
    isDrag && isDrag.animate({"fill-opacity": 1.0}, 500);
    isDrag = false;
};

function createMyObject(type, geometry, attrs){
    var obj = r[type].apply(r, geometry).attr(attrs);
    obj.node.style.cursor = "move";
    obj.show();
    obj.mousedown(dragger);
    return obj;
}

/**************************************************/

var o1 = createMyObject("ellipse", [300, 400, 50, 30], {fill: "blue"});
var o2 = createMyObject("rect", [300, 50, 150, 100], {fill: "yellow"});
var o3 = createMyObject("circle", [100, 300, 50], {fill: "green"});
//var o4 = createMyObject("path", [{}, "M100 100L190 190"], {stroke: "black", "stroke-width": 2.0});

var p = 
//    "M89.73,0H12.268C5.5,0,0,5.209,0,11.614v52.07c0,6.397,5.5,11.614,12.268,11.614H89.73c6.768,0,12.27-5.217,12.27-11.614v-52.07C102,5.209,96.498,0,89.73,0z M99.596,63.684c0,5.075-4.426,9.207-9.865,9.207H12.268c-5.438,0-9.868-4.132-9.868-9.207v-52.07c0-5.082,4.43-9.21,9.868-9.21H89.73c5.439,0,9.865,4.128,9.865,9.21V63.684z" +
    "M51.273,25.361c5.094,0.745,9.829-2.785,10.569-7.873c0.74-5.097-2.781-9.825-7.871-10.563c-5.101-0.747-9.828,2.777-10.573,7.867C42.659,19.88,46.176,24.623,51.273,25.361z" +
    "M64.783,38.152l0.818-0.628l-8.379-10.211l-9.549-0.503l-0.355-0.021l-3.684-4.031l-1.11,0.795l-4.886-5.739c-1.046-1.213-2.678-1.485-3.651-0.591c-0.968,0.898-0.909,2.61,0.132,3.834l4.512,5.293l-1.181,0.848l4.033,5.304l-0.68,14.833c-1.137,0.375-1.964,1.429-1.964,2.694v6.723c-3.017,0.634-5.283,3.31-5.283,6.51c0,3.678,2.979,6.654,6.65,6.654c3.678,0,6.658-2.977,6.658-6.654c0-2.007-0.91-3.785-2.319-5.008v-1.146c0.71,0.328,1.504,0.557,2.364,0.632l4.151,0.376v9.144c0,1.58,1.271,2.855,2.845,2.855c1.57,0,2.848-1.275,2.848-2.855V56.435c0.59-0.632,0.982-1.39,1.059-2.243l0.166-1.844l1.25,0.06l0.467-10.351l1.299-0.997l3.111,4.324c0.936,1.308,2.586,1.771,3.688,1.047c1.098-0.738,1.223-2.381,0.295-3.688L64.783,38.152z M57.783,38.139c-0.121,2.312-0.652,2.666-2.938,2.547l-2.092-0.11c-1.572-0.084-2.177-0.564-2.077-2.432l0.029-0.594l1.723,0.091c-0.039,0.915,0.197,0.995,0.693,1.025l2.119,0.107c0.363,0.019,0.74-0.021,0.773-0.682c0.039-0.745-0.158-0.803-2.387-0.922c-2.592-0.135-2.863-0.624-2.752-2.742c0.083-1.56,0.236-2.758,2.415-2.641l2.4,0.127c1.992,0.104,2.125,1.146,2.045,2.658l-0.014,0.274l-1.729-0.09c0.033-0.631,0.002-0.896-0.781-0.937l-1.912-0.101c-0.393-0.021-0.664,0.167-0.689,0.633c-0.039,0.751,0.168,0.786,2.021,0.87C57.309,35.352,57.914,35.635,57.783,38.139z";
var o4 = createMyObject("path", [{fill: "#CB9737"}, p], {stroke: "black", "stroke-width": 2.0});

var opt1 = {
    attrs: {stroke: "red", "stroke-dasharray": "none"},
    startArrow: {type: "basic"},
    endArrow: {attrs: {fill: "white"}},
    bboxCorrection: {
	start: {
	    x: 0,
	    width: 0
	}
    }
};

var opt2 = {
    attrs: {stroke: "black", "stroke-width": 3.0, "stroke-dasharray": "none"},
    endArrow: {type: "basicRect", attrs: {stroke: "red"}},
    bboxCorrection: {
	end: {
	    x: 50,
	    width: -100
	}
    }
};

o1.joint(o2, opt1);
o1.joint(o3, opt2);
o2.joint(o4);

//o1.animate({cx: 20, r: 20}, 2000, "bounce");


