const MenuScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        let size = cc.winSize;
        
        // Create background
        const bg = new cc.Sprite(Resources.background);
        bg.setPosition(size.width / 2, size.height / 2);
        bg.setContentSize(size.width, size.height);
        this.addChild(bg, 0);
    
        const easyButton = new ccui.Button(Resources.button_2_monsters_png);
        easyButton.addTouchEventListener(() => {
            cc.director.pushScene(new cc.TransitionRotoZoom(Config.transitionToGameScreenTime, new GameScene(false)));
        });
        easyButton.setPosition(size.width / 2, size.height / 2 + 300);
        this.addChild(easyButton, 3);
    
        const hardButton = new ccui.Button(Resources.button_4_monsters_png);
        hardButton.addTouchEventListener(() => {
            cc.director.pushScene(new cc.TransitionJumpZoom(Config.transitionToGameScreenTime, new GameScene(true)));
        });
        hardButton.setPosition(size.width / 2, size.height / 2 + 150);
        this.addChild(hardButton, 3);
    
        // const label = cc.LabelTTF.create("Hello World", "Arial", 40);
        // label.setPosition(size.width / 2, size.height / 2);
        // label.setFontFillColor(new cc.Color(0, 0, 0, 250));
        // this.addChild(label, 1);
    },
});