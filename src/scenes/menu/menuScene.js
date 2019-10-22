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
            cc.director.pushScene(new cc.TransitionFade(Config.transitionToGameScreenTime, new GameScene(false)));
        });
        easyButton.setPosition(size.width / 2, size.height / 2 + 400);
        this.addChild(easyButton, 3);
    
        const hardButton = new ccui.Button(Resources.button_4_monsters_png);
        hardButton.addTouchEventListener(() => {
            cc.director.pushScene(new cc.TransitionFade(Config.transitionToGameScreenTime, new GameScene(true)));
        });
        hardButton.setPosition(size.width / 2, size.height / 2 + 250);
        this.addChild(hardButton, 3);
    
        const shareButton = new ccui.Button(Resources.button_share_png);
        shareButton.addTouchEventListener(() => {
        });
        shareButton.setPosition(size.width / 2 - 250, size.height / 2);
        this.addChild(shareButton, 3);
    
        const gcButton = new ccui.Button(Resources.button_gc_png);
        gcButton.addTouchEventListener(() => {
        });
        gcButton.setPosition(size.width / 2, size.height / 2);
        this.addChild(gcButton, 3);
    
        const rateButton = new ccui.Button(Resources.button_rate_png);
        rateButton.addTouchEventListener(() => {
        });
        rateButton.setPosition(size.width / 2 + 250, size.height / 2);
        this.addChild(rateButton, 3);
    
        const labelEasy = cc.LabelTTF.create("Easy - Best Score: " + (cc.sys.localStorage.getItem('max_point') || 0), "Arial", 50);
        labelEasy.setPosition(size.width / 2, size.height / 2 - 200);
        labelEasy.setFontFillColor(new cc.Color(0, 0, 0, 250));
        this.addChild(labelEasy, 1);
    
        const labelHard = cc.LabelTTF.create("Difficult - Best Score: " + (cc.sys.localStorage.getItem('max_point_hard') || 0), "Arial", 50);
        labelHard.setPosition(size.width / 2, size.height / 2 - 300);
        labelHard.setFontFillColor(new cc.Color(0, 0, 0, 250));
        this.addChild(labelHard, 1);
    },
});