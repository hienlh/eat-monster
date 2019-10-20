const GameOverLayer = cc.Layer.extend({
    ctor: function (isHardMode) {
        this._super();
        this._name = "Game Over Layer";
        this.setAnchorPoint(0, 0);
        
        let size = cc.winSize;
        
        const menuButton = new ccui.Button(Resources.button_menu_png);
        menuButton.addTouchEventListener(() => {
            cc.director.runScene(new cc.TransitionFade(0.5, new MenuScene()))
        });
        menuButton.setPosition(size.width / 2, size.height / 2);
        this.addChild(menuButton, 3);
        
        const restartButton = new ccui.Button(Resources.button_restart_png);
        restartButton.addTouchEventListener(() => {
            cc.director.runScene(new cc.TransitionFade(0.5, new GameScene(isHardMode)))
        });
        restartButton.setPosition(size.width / 2, size.height / 2 - 150);
        this.addChild(restartButton, 3);
    }
});