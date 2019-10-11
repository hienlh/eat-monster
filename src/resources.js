const Resources = {
    hello_world_png: "res/HelloWorld.png",
    background: "res/bg.png",
    red_png: "res/red.png",
    blue_png: "res/blue.png",
    green_png: "res/green.png",
    orange_png: "res/orange.png"
};

const g_resources = [];
for (const i in Resources) {
    g_resources.push(Resources[i]);
}
