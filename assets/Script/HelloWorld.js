var module = require("module");

cc.Class({
    extends: cc.Component,

    properties: {
    
        label: {
            default: null,
            type: cc.Label
        },
        
        button: {
            default: null,
            type: cc.Button
        },
      
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
    },

    // called every frame
    update: function (dt) {

    },

    swicthSceneFunc: function(){
        console.log("module.profile)  : ", module.profile);
        module.profile = 1;
        cc.director.loadScene("Welcome")
    },
});
