const GameScene = cc.Scene.extend({
    listMonsters: [],
    groupMonsterLayer: null, // group 4 or 2 monster at bottom game screen
    isHardMode: false,
    gameLayer: null,
    point: 0,
    scoreText: null,
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
        
        console.log('Render game layer');
        this.gameLayer = new GameLayer(this.isHardMode, this.ate.bind(this), this.lost.bind(this));
        this.addChild(this.gameLayer);
        
        const scoreText = cc.LabelTTF.create('Score: 0', "Arial", 50);
        scoreText.setPosition(size.width - 200, size.height - 150);
        scoreText.setFontFillColor(new cc.Color(0, 0, 0, 250));
        scoreText.setHorizontalAlignment(cc.TEXT_ALIGNMENT_RIGHT);
        this.scoreText = scoreText;
        this.addChild(scoreText, 1);
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
        this.scoreText.setString('Score: ' + this.point);
    },
    lost: function () {
        console.log('lost');
        cc.director.runScene(new cc.TransitionFade(0.5, new GameOverScene(this.isHardMode, this.point)))
    },
});