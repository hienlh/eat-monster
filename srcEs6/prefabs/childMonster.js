const ChildMonsterSprite = cc.Sprite.extend({
    type: 'none',
    ctor: function (type) {
        this._super();
        let imageFile = null;
        this.type = type;

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
                this.type = 'none';
                break;
        }
        
        this._name = 'Main [' + type + ` ${Math.random().toString(36).substr(2, 9)}]`;
        
        this.initWithFile(imageFile);
    }
});