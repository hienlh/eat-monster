Game.layers[1].extend = cc.Layer.extend({
    init: function () {
        this._super();
        var game = this;
        Game.layers[1].start(game);
    }
});
Game.layers[1].start = function (game) {
    var size = cc.director.getWinSize();
    
    var sprite = cc.Sprite.create("HelloWorld.png");
    sprite.setPosition(size.width / 2, size.height / 2);
    sprite.setScale(0.8);
    game.addChild(sprite, 0);

    var label = cc.LabelTTF.create("Hello World", "Arial", 40);
    label.setPosition(size.width / 2, size.height / 2);
    game.addChild(label, 1);
};