const Group2MonstersLayer = cc.Layer.extend({
    blueMonster: null,
    redMonster: null,
    listMonsters: [],
    ctor: function () {
        this._super();
        this.setAnchorPoint(0, 0);
        
        this.listMonsters = [];
        
        const blue_monster = new ChildMonsterSprite(MonsterType.BLUE);
        blue_monster.setPosition(TwoMonsterPosition.TOP);
        this.addChild(blue_monster);
        this.blueMonster = blue_monster;
        this.listMonsters.push(blue_monster);
        
        const red_monster = new ChildMonsterSprite(MonsterType.RED);
        red_monster.setPosition(TwoMonsterPosition.BOTTOM);
        this.addChild(red_monster);
        this.redMonster = red_monster;
        this.listMonsters.push(red_monster);
        
        this._name = `2 Monsters Layer [${this.redMonster.getName()} - ${this.blueMonster.getName()}]`;
        
        cc.eventManager.addListener(twoMonstersLayerEventListener.clone(), this);
    }
});

const twoMonstersLayerEventListener = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    swallowTouches: true,
    onTouchBegan: (touch, event) => {
        const target = event.getCurrentTarget();
        if (target.getNumberOfRunningActions() <= 0) {
            if (target.redMonster) {
                target.redMonster.setPosition(target.redMonster.getPosition().y === TwoMonsterPosition.TOP.y ? TwoMonsterPosition.BOTTOM : TwoMonsterPosition.TOP);
            }
            if (target.blueMonster) {
                target.blueMonster.setPosition(target.blueMonster.getPosition().y === TwoMonsterPosition.TOP.y ? TwoMonsterPosition.BOTTOM : TwoMonsterPosition.TOP);
            }
        }
    }
});

const TwoMonsterPosition = {
    TOP: { x: 0, y: 50 },
    BOTTOM: { x: 0, y: -50 },
};