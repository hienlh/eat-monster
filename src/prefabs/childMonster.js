const ChildMonsterSprite = cc.Sprite.extend({
    ctor: function (type) {
        this._super();
        let imageFile = null;
        switch (type) {
            case MonsterType.BLUE:
                imageFile = Resources.blue_png;
                break;
            case MonsterType.RED:
                imageFile = Resources.red_png;
                break;
            case MonsterType.ORANGE:
                imageFile = Resources.orange_png;
                break;
            default:
                imageFile = Resources.green_png;
                break;
        }
        
        this._name = 'Main [' + type + ` ${Math.random().toString(36).substr(2, 9)}]`;
        
        this.initWithFile(imageFile);
    }
});