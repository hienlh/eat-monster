const GameScene = cc.Scene.extend({
    listMonsters: [],
    groupMonsterLayer: null, // group 4 or 2 monster at bottom game screen
    isHardMode: false,
    gameLayer: null,
    point: 0,
    ctor: function (isHardMode) {
        this._super();
        this.isHardMode = isHardMode || false;
        this.point = 0;
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
    },
    ate: function () {
        this.point++;
        const maxPointKey = this.isHardMode ? 'max_point_hard' : 'max_point';
        
        let maxPoint = cc.sys.localStorage.getItem(maxPointKey);
        console.log('MaxPoint ' + maxPoint);
        if (!maxPoint) {
            maxPoint = 0;
        }
        if (maxPoint < this.point) {
            cc.sys.localStorage.setItem(maxPointKey, this.point);
        }
        console.log('ate ' + this.point);
    },
    lost: function () {
        console.log('lost');
        
        this.gameLayer.removeFromParent();
        this.addChild(new GameOverLayer(this.isHardMode, this.point));
    },
});