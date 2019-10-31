const GameLayer = cc.Layer.extend({
    isHardMode: false,
    ateCallback: null,
    lostCallback: null,
    groupMonsterLayer: null,
    isGameOver: false,
    spawnTime: 0,
    listMonsters: [],
    firstSpawn: true,
    scoreText: null,
    ctor: function (isHardMode, ateCallBack, lostCallback) {
        this._super();
        this._name = "Game Layer";
        this.setAnchorPoint(0, 0);
        
        this.isHardMode = isHardMode;
        this.ateCallback = ateCallBack;
        this.lostCallback = lostCallback;
        this.isGameOver = false;
        this.spawnTime = 0;
        this.firstSpawn = true;
        this.listMonsters = [];
        
        this.scheduleUpdate();
        
        let size = cc.winSize;
        
        if (this.isHardMode) {
            const groupMonsterLayer = new Group4MonstersLayer();
            groupMonsterLayer.setPosition(size.width / 2, 200);
            groupMonsterLayer.setScale(1.5);
            this.groupMonsterLayer = groupMonsterLayer;
        }
        else {
            const groupMonsterLayer = new Group2MonstersLayer();
            groupMonsterLayer.setPosition(size.width / 2, 200);
            groupMonsterLayer.setScale(1.5);
            this.groupMonsterLayer = groupMonsterLayer;
        }
        
        this.addChild(this.groupMonsterLayer, 2);
        console.log(this.groupMonsterLayer.getName());
        
        const menuButton = new ccui.Button(Resources.button_menu_png);
        menuButton.addClickEventListener(() => {
            cc.director.runScene(new cc.TransitionFade(0.5, new MenuScene()))
        });
        menuButton.setPosition(200, size.height - 150);
        this.addChild(menuButton, 3);
    },
    update: function (dt) {
        this._super(dt);
        if (this.isGameOver) return;
        
        this.spawnTime += dt;
        
        if ((!this.firstSpawn && this.spawnTime >= Config.spawnTime) || (this.firstSpawn && this.spawnTime >= Config.transitionToGameScreenTime)) {
            this.spawnChild();
            this.spawnTime = 0;
            this.firstSpawn = false;
        }
        
        this.listMonsters.forEach(child => {
            this.groupMonsterLayer.listMonsters.forEach(main => {
                let rectChild = child.monster.getBoundingBoxToWorld();
                let rectMain = main.getBoundingBoxToWorld();
                
                if (cc.rectIntersectsRect(rectChild, rectMain)) {
                    console.log(child.getName() + ' vs ' + main.getName());
                    if (child.monster.type === main.type) {
                        this.ate(child);
                    }
                    else this.lost(child);
                }
            });
        });
    },
    spawnChild: function () {
        let size = cc.winSize;
        const childLayer = new ChildLayer(!this.isHardMode ? MonsterType[Object.keys(MonsterType)[Math.floor(Math.random() * 2)]] : null);
        childLayer.setPosition(size.width / 2, size.height + 200);
        this.addChild(childLayer, 2);
        this.listMonsters.push(childLayer);
        
        let sequence = new cc.Sequence(
            new cc.MoveTo(2 / Config.childSpeed, size.width / 2, 0),
        );
        
        childLayer.runAction(sequence);
    },
    ate: function (child) {
        this.listMonsters.splice(this.listMonsters.indexOf(child), 1);
        this.removeChild(child);
        this.ateCallback();
    },
    lost: function (child) {
        this.listMonsters.splice(this.listMonsters.indexOf(child), 1);
        this.removeChild(child);
        this.lostCallback();
    },
});