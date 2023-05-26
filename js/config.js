import * as THREE from './libs/three.module.js';
 import { GLTFLoader } from './libs/GLTFLoader.js';
import {OrbitControls} from './libs/OrbitControls.js';
// import {onWindowResize} from './resize.js'
let init, modelLoad;
let gltfpath = "assets/cricket_stadium.glb";
let texLoader = new THREE.TextureLoader();

let landingPoints = [[97,24,'3955e3'],[50,-50,'de071c'],[-80,25,'fae105']]
let testRun = {
    "One":[{"x":25,"y":45,"color":"0xffffff"},{"x":25,"y":45,"color":"0xffffff"},{"x":25,"y":45,"color":"0xffffff"}],
    "Two":[{"x":25,"y":45,"color":"0xffff00"},{ "x":25,"y":45,"color":"0xffff00"},{ "x":25,"y":45,"color":"0xffff00"}],
    "Three":[{"x":25,"y":45,"color":"0xe1fa02"},{ "x":25,"y":45,"color":"0xe1fa02"},{ "x":25,"y":45,"color":"0xe1fa02"}],
    "Four":[{"x":25,"y":45,"color":"0x2d43eb"},{ "x":25,"y":45,"color":"0x2d43eb"},{ "x":25,"y":45,"color":"0x2d43eb"}],
    "Six":[{"x":25,"y":45,"color":"0xe8070e"},{ "x":25,"y":45,"color":"0xe8070e"},{ "x":25,"y":45,"color":"0xe8070e"}],
}
$(document).ready(function () {
    let detect = detectWebGL();
    if (detect == 1) {
        init = new sceneSetup(70, 1, 1000, 100, 100, 100);//400,400,400
        modelLoad = new objLoad();
          modelLoad.Model();
        //   console.log('--->',_testRun);
        testRun.One.map((data)=>{
            // console.log(data);
        });
          landingPoints.map((data)=>{
            // console.log(data);
            // addLines(data[0],data[1]);
          });
        //  addLines(0,0,97,24);
    } else if (detect == 0) {
        alert("PLEASE ENABLE WEBGL IN YOUR BROWSER....");
    } else if (detect == -1) {
        alert(detect);
        alert("YOUR BROWSER DOESNT SUPPORT WEBGL.....");
    }



});

function addLines(x1,y1,x2,y2,angle,run){ // 2,4,-1,4
    let startPointX = x1;
    let startPointY = y1;
    let endPointX = x2;
    let endPointY = y2;

    
    // const material = new THREE.MeshNormalMaterial()
    // let geometry = new THREE.BufferGeometry()
    // const points = [
    //     // new THREE.Vector3((startPointX * 1) +.2, 10 ,(startPointY *1) +.2),
    //     // new THREE.Vector3(endPointX, 10 ,endPointY),
    //     // new THREE.Vector3(startPointX,10,startPointY),
    //     // new THREE.Vector3((endPointX * 1) +.2, 10 ,(endPointY *1)+.2),
        
    //     new THREE.Vector3(-1, 0, -1), //c
    //     new THREE.Vector3(-1, 0, 1), //b
    //     new THREE.Vector3(1,0, 1), //a
       
        
    //     new THREE.Vector3(1, 0, 1), //a
    //     new THREE.Vector3(1, 0, -1), //d
    //     new THREE.Vector3(-1, 0, -1), //c
    
    //     // new THREE.Vector3(-1, -1, 1), //b
    //     // new THREE.Vector3(1, -1, -1), //d
    //     // new THREE.Vector3(1, 1, 1), //a
    
    //     // new THREE.Vector3(-1, 1, -1), //c
    //     // new THREE.Vector3(1, -1, -1), //d
    //     // new THREE.Vector3(-1, -1, 1), //b
    // ]
    // geometry.setFromPoints(points)
    // geometry.computeVertexNormals()

    // const mesh = new THREE.Mesh(geometry, material)
    // init.scene.add(mesh)
    const material = new THREE.MeshNormalMaterial()
    const points = []
    points.push( new THREE.Vector3((startPointX * 1) +1, 20 ,(startPointY *1) +1))
    points.push(new THREE.Vector3(endPointX, 20 ,endPointY))
    points.push(new THREE.Vector3(startPointX,20,startPointY))
    points.push(new THREE.Vector3((endPointX * 1) +1, 20 ,(endPointY *1)+1))
    // points.push(new THREE.Vector3(startPointX, 0, startPointY))
    // points.push(new THREE.Vector3(endPointX, 0, endPointY))
    //  points.push(new THREE.Vector3(startPointX, 0, -10))
    // points.push(new THREE.Vector3(-5, 0, -10))
    let geometry = new THREE.BufferGeometry().setFromPoints(points);

    const mesh = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color:0xf54242,side:THREE.DoubleSide }))
    // let line = new THREE.Line(
    //     geometry,
    //      new THREE.LineBasicMaterial({ color: 0x888888 })
    // )
    init.scene.add(mesh)
    if(run === 6){
        console.log(mesh);
        // mesh.material.color.setHex(0xffffff); 
        mesh.material.needsUpdate = true;
    }
    /*let startPointX = x1;
    let startPointY = y1;
    let endPointX = x2;
    let endPointY = y2;
    var geometry = new THREE.BufferGeometry ();  
        geometry.vertices.push(
            new THREE.Vector3((startPointX * 1) +.2, 0 ,(startPointY *1) +.2),//START LEFT
            new THREE.Vector3(endPointX, 0 ,endPointY),//END LEFT 
            new THREE.Vector3(startPointX,0,startPointY),//START RIGHT
            new THREE.Vector3((endPointX * 1) +.2, 0 ,(endPointY *1)+.2)//END RIGHT
        ); 
        geometry.faces.push(
            new THREE.Face3(2,1,0),//use vertices of rank 2,1,0
            new THREE.Face3(3,1,0)//vertices[3],1,2...
        );
       var material = new THREE.MeshBasicMaterial({color:0xeb4034, side:THREE.DoubleSide,transparent: true })
           mesh = new THREE.Mesh(geometry, material );
           mesh.scale.set(3,1,1);
           init.scene.add( mesh );*/
}
function detectWebGL() {
    // Check for the WebGL rendering context
    if (!!window.WebGLRenderingContext) {
        var canvas = document.createElement("canvas"),
            names = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"],
            context = false;

        for (var i in names) {
            try {
                context = canvas.getContext(names[i]);
                if (context && typeof context.getParameter === "function") {
                    // WebGL is enabled.
                    return 1;
                }
            } catch (e) { }
        }

        // WebGL is supported, but disabled.
        return 0;
    }

    // WebGL not supported.
    return -1;
};
let material = {
    cube: new THREE.MeshLambertMaterial({
        //   map:THREE.ImageUtils.loadTexture("assets/Road texture.png"),
        color: 0x000000,
        combine: THREE.MixOperation,
        side: THREE.DoubleSide
    }),
}
class sceneSetup {
    constructor(FOV, near, far, x, y, z, ambientColor) {
        this.container = document.getElementById("canvas");
        this.scene = new THREE.Scene();
        this.addingCube();
        this.camera(FOV, near, far, x, y, z);
        this.ambientLight(ambientColor);
        this.render();

    }
    camera(FOV, near, far, x, y, z) {
        this.cameraMain = new THREE.PerspectiveCamera(FOV, this.container.offsetWidth / this.container.offsetHeight, near, far);
        this.cameraMain.position.set(x, y, z);
        // this.cameraMain.lookAt(this.camPoint);
        this.cameraMain.lookAt(0, 0, 0);
        this.scene.add(this.cameraMain);
        this.rendering();
    }
    rendering() {
        this.renderer = new THREE.WebGLRenderer({ antialias: true ,alpha:true});
        this.renderer.setClearColor(0x000000,0);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.container.appendChild(this.renderer.domElement);
        this.controls = new OrbitControls(this.cameraMain, this.renderer.domElement);
        // this.controls.minDistance = 100;
        // this.controls.maxDistance = 300;
        // this.controls.maxPolarAngle = Math.PI / 2 * 115 / 120;
        // this.controls.minPolarAngle = 140 / 120;
        // this.controls.minAzimuthAngle = -280 / 120;
        // this.controls.maxAzimuthAngle = -115 / 120;
    }
    addingCube() {
        this.geo = new THREE.BoxBufferGeometry(2, 2, 2);
        this.mat = material.cube;
        this.camPoint = new THREE.Mesh(this.geo, this.mat);
        this.scene.add(this.camPoint);
        this.camPoint.position.set(97, 0, 24);
        this.axesHelper = new THREE.AxesHelper( 5 );
        this.scene.add( this.axesHelper );
    }
    ambientLight(ambientColor) {
        this.ambiLight = new THREE.AmbientLight(0xffffff);
        this.light = new THREE.HemisphereLight(0xd1d1d1, 0x080820, 1);
        this.scene.add(this.ambiLight);
    }
    animate() {
        requestAnimationFrame(this.animate.bind(this));
        // this.controls.update();
        this.renderer.render(this.scene, this.cameraMain);
    }
    render() {
        this.animate();
    }
}

const onWindowResize=()=> {
    init.cameraMain.aspect = init.container.offsetWidth / init.container.offsetHeight;
    init.renderer.setSize(init.container.offsetWidth, init.container.offsetHeight);
    init.cameraMain.updateProjectionMatrix();
}

window.addEventListener('resize', onWindowResize, false);


class objLoad {
    constructor() {

    }

    Model() {
        this.loader = new GLTFLoader();
        this.loader.load(gltfpath, gltf => {            
            this.mesh = gltf.scene;
            this.mesh.traverse((child)=>{
                if(child.type ==='Mesh'){
                    if(child.name === 'playerImage'){
                        child.material = new THREE.MeshBasicMaterial({
                            transparent:true,
                            opacity:1,
                            depthTest: false,
                            combine: THREE.MixOperation,
                            side: THREE.DoubleSide
                        })
                        child.visible = false;
                    }
                    else if(child.name === 'playerImageBg'){
                        child.material = new THREE.MeshBasicMaterial({
                            map:texLoader.load('assets/bg-tex.png'),
                            transparent:true,
                            opacity:.8,
                            depthTest: true,
                            combine: THREE.MixOperation,
                            side: THREE.DoubleSide
                        })
                    }
                }               
            })
            this.mesh.scale.set(13, 13, 13);
            init.scene.add(this.mesh);
        });
    }
}

export const displayRunMesh = (data) => {
    let _displayPlayerMesh = init.scene.getObjectByName('playerImage');
    _displayPlayerMesh.material.map = texLoader.load(data.player_image);
    _displayPlayerMesh.needsUpdate = true;
    _displayPlayerMesh.visible = true;
}

export const wagonWheel = (data) => {
    let _runs = data.runs;
    let _balls = data.balls;
    data.balls_details.map((data)=>{
        let _Wx = data.battingAnalysis.shots.wagonWheel.x;
        let _Wy = data.battingAnalysis.shots.wagonWheel.y;
        let _Wa = data.battingAnalysis.shots.angle;
        let _Wr = data.runsBat;
        console.log(data.runsBat);
        addLines(0,0,_Wx,_Wy,_Wa,_Wr);
    });
    
}
