const GameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        
        let size = cc.winSize;
        
        // Create background
        const bg = new cc.Sprite(Resources.background);
        bg.setPosition(size.width / 2, size.height / 2);
        bg.setContentSize(size.width, size.height);
        this.addChild(bg, 0);
        
        // const label = cc.LabelTTF.create("Hello World", "Arial", 40);
        // label.setPosition(size.width / 2, size.height / 2);
        // label.setFontFillColor(new cc.Color(0, 0, 0, 250));
        // this.addChild(label, 1);
        
        const mainLayer = new MainLayer();
        mainLayer.setPosition(size.width / 2, 200);
        this.addChild(mainLayer, 2);
    }
});