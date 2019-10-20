const GameScene = cc.Scene.extend({
    listMonsters: [],
    groupMonsterLayer: null, // group 4 or 2 monster at bottom game screen
    isHardMode: false,
    gameLayer: null,
    gameOverLayer: null,
    ctor: function (isHardMode) {
        this._super();
        this.isHardMode = isHardMode || false;
    },
    onEnter: function () {
        this._super();
        console.log('enter game');
        
        let size = cc.winSize;
        
        // Create background
        const bg = new cc.Sprite(Resources.background);
        bg.setPosition(size.width / 2, size.height / 2);
        bg.setContentSize(size.width, size.height);
        this.addChild(bg, 0);
        
        this.gameLayer = new GameLayer(this.isHardMode, this.ate.bind(this), this.lost.bind(this));
        this.addChild(this.gameLayer);
        
        this.gameOverLayer = new GameOverLayer(this.isHardMode);
    },
    ate: function () {
        console.log('ate');
    },
    lost: function () {
        console.log('lost');
        
        this.gameLayer.removeFromParent();
        this.gameOverLayer.removeFromParent();
        this.addChild(this.gameOverLayer);
    },
});