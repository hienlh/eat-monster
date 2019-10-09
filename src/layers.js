Game.layers[1].extend = cc.Layer.extend({
    init: function () {
        this._super();
        var game = this;
        Game.layers[1].start(game);
    }
});
Game.layers[1].start = function (game) {
    var size = cc.director.getWinSize();
    var label = cc.LabelTTF.create("Hello World", "Arial", 40);
    label.setPosition(size.width / 2, size.height / 2);
    game.addChild(label, 1);
};