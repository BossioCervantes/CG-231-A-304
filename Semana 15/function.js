var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);
var scene = new THREE.Scene();

// Variables para la Grilla y Flechas
var size = 20;
var arrowSize = 5;
var divisions = 20;
var origin = new THREE.Vector3( 0, 0, 0 );
var x = new THREE.Vector3( 1, 0, 0 );
var y = new THREE.Vector3( 0, 1, 0 );
var z = new THREE.Vector3( 0, 0, 1 );
var color2 = new THREE.Color( 0x333333 ); 
var colorR = new THREE.Color( 0xAA0000 );
var colorG = new THREE.Color( 0x00AA00 );
var colorB = new THREE.Color( 0x0000AA );

//Crear la Grilla
var gridHelperXZ = new THREE.GridHelper( size, divisions, color2, color2);

//Flechas
var arrowX = new THREE.ArrowHelper( x, origin, arrowSize, colorR );
var arrowY = new THREE.ArrowHelper( y, origin, arrowSize, colorG );
var arrowZ = new THREE.ArrowHelper( z, origin, arrowSize, colorB );

// Posición de la camara
var camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.x = 5;
camera.position.y = 2;
camera.position.z = 3;
const light = new THREE.AmbientLight(0x404040, 5);

// Se añaden los elementos a la escena
scene.add(light);
scene.add(camera);
scene.add(gridHelperXZ);
scene.add(arrowX);
scene.add(arrowY);
scene.add(arrowZ);

//Variables

n = 5;
Xo = 0;
Yo = 0;
R = 1;

// Funciones

function poligono(n, R) {

    const vertices = [];
    const ang = 2*Math.PI/nlados;
    for (i=0; i<=nlados; i++) {
        vertices.push([radio*Math.cos(i*ang), radio*Math.sin(i*ang)]);
    }
    return vertices;
}

