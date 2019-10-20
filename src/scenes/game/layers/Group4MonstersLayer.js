const Group4MonstersLayer = cc.Layer.extend({
    listMonsters: [],
    ctor: function () {
        this._super();
        this._name = "4 monsters Layer";
        this.setAnchorPoint(0, 0);
        
        this.listMonsters = [];
        this.removeAllChildrenWithCleanup();
        
        const orange_monster = new ChildMonsterSprite(MonsterType.ORANGE);
        orange_monster.setPosition(MainMonsterPosition.BOTTOM);
        orange_monster.setRotation(180);
        this.addChild(orange_monster);
        this.listMonsters.push(orange_monster);
        
        const blue_monster = new ChildMonsterSprite(MonsterType.BLUE);
        blue_monster.setPosition(MainMonsterPosition.RIGHT);
        blue_monster.setRotation(90);
        this.addChild(blue_monster);
        this.listMonsters.push(blue_monster);
        
        const red_monster = new ChildMonsterSprite(MonsterType.RED);
        red_monster.setPosition(MainMonsterPosition.TOP);
        this.addChild(red_monster);
        this.listMonsters.push(red_monster);
        
        const green_monster = new ChildMonsterSprite(MonsterType.GREEN);
        green_monster.setPosition(MainMonsterPosition.LEFT);
        green_monster.setRotation(-90);
        this.addChild(green_monster);
        this.listMonsters.push(green_monster);
        
        cc.eventManager.addListener(mainLayerEventListener.clone(), this);
    }
});

const mainLayerEventListener = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    swallowTouches: true,
    onTouchBegan: (touch, event) => {
        const target = event.getCurrentTarget();
        if (target.getNumberOfRunningActions() <= 0)
            target.runAction(new cc.RotateBy(0.1, 90));
    }
});

const MainMonsterPosition = {
    TOP: { x: 0, y: 80 },
    BOTTOM: { x: 0, y: -80 },
    LEFT: { x: -80, y: 0 },
    RIGHT: { x: 80, y: 0 },
};