const GameOverLayer = cc.Layer.extend({
    ctor: function (isHardMode, score) {
        this._super();
        this._name = "Game Over Layer";
        this.setAnchorPoint(0, 0);
        
        let size = cc.winSize;
        const maxPointKey = isHardMode ? 'max_point_hard' : 'max_point';
        
        const label = cc.LabelTTF.create(isHardMode ? '4 MONSTER:' : '2 MONSTER:', "Arial", 60);
        label.setPosition(size.width / 2, size.height / 2 + 400);
        label.setFontFillColor(new cc.Color(0, 0, 0, 250));
        this.addChild(label, 1);
        
        const scoreText = cc.LabelTTF.create('Score: ' + (score || '0'), "Arial", 50);
        scoreText.setPosition(size.width / 2, size.height / 2 + 350);
        scoreText.setFontFillColor(new cc.Color(0, 0, 0, 250));
        this.addChild(scoreText, 1);
        
        const bestScore = cc.LabelTTF.create('Best: ' + (cc.sys.localStorage.getItem(maxPointKey) || '0'), "Arial", 50);
        bestScore.setPosition(size.width / 2, size.height / 2 + 300);
        bestScore.setFontFillColor(new cc.Color(0, 0, 0, 250));
        this.addChild(bestScore, 1);
        
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