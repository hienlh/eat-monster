const res = {
    hello_world_png: "res/HelloWorld.png",
    background: "res/bg.png"
};

const g_resources = [];
for (const i in res) {
    g_resources.push(res[i]);
}
