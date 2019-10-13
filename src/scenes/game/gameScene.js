const GameScene = cc.Scene.extend({
    listMonsters: [],
    mainLayer: null,
    onEnter: function () {
        this._super();
        this.scheduleUpdate();
        
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
        mainLayer.setScale(1.5);
        this.addChild(mainLayer, 2);
        this.mainLayer = mainLayer;
        
        this.spawnChild();
    },
    update: function (dt) {
        this.listMonsters.forEach(child => {
            this.mainLayer.listMonsters.forEach(main => {
                let rectChild = child.monster.getBoundingBoxToWorld();
                let rectMain = main.getBoundingBoxToWorld();
                
                if (cc.rectIntersectsRect(rectChild, rectMain)) {
                    if(child.monster.getTexture().url === main.getTexture().url) {
                        this.ate(child);
                    } else this.lost(child);
                }
            });
        });
    },
    ate: function (child) {
        this.listMonsters.splice(this.listMonsters.indexOf(child), 1);
        child.removeFromParent();
        this.spawnChild();
    },
    lost: function (child) {
        this.listMonsters.splice(this.listMonsters.indexOf(child), 1);
        child.removeFromParent();
        console.log('lost')
    },
    spawnChild: function () {
        let size = cc.winSize;
        const childLayer = new ChildLayer();
        childLayer.setPosition(size.width / 2, size.height + 200);
        this.addChild(childLayer, 2);
    
        let sequence = new cc.Sequence(
            new cc.MoveTo(3 / Config.childSpeed, size.width / 2, -100),
            new cc.CallFunc(() => {
                childLayer.removeFromParent();
                this.spawnChild();
            })
        );
    
        childLayer.runAction(sequence);
    
        this.listMonsters.push(childLayer);
    }
});