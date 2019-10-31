const ChildLayer = cc.Layer.extend({
    monster: null,
    ctor: function (type) {
        this._super();
        this.setAnchorPoint(0, 0);
        
        if (!type) {
            type = MonsterType[Object.keys(MonsterType)[Math.floor(Math.random() * 4)]];
        }
        this._name = `Child [${type} ${Math.random().toString(36).substr(2, 9)}]`;
        
        const child_monster = new ChildMonsterSprite(type);
        child_monster.setPosition(MainMonsterPosition.BOTTOM);
        this.addChild(child_monster);
        this.monster = child_monster;
    }
});