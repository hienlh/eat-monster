/**
 * Created by edisoni on 07.05.16.
 */

var MainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        let size = cc.winSize;
        let self = this;
        
        // Create background
        const bg = new cc.Sprite("res/bg.png");
        bg.setPosition(size.width / 2, size.height / 2);
        bg.setContentSize(size.width, size.height);
        this.addChild(bg, 0);
        
        const createSprite = () => {
            const sprite = new cc.Sprite("res/HelloWorld.png");
            sprite.setPosition(Math.random() * size.width, Math.random() * size.height);
            sprite.setScale(0.3);
            this.addChild(sprite, 0);
        };
    
        for(let i = 0; i < 50; i ++) {
            createSprite();
        }
    
        const label = cc.LabelTTF.create("Hello World", "Arial", 40);
        label.setPosition(size.width / 2, size.height / 2);
        this.addChild(label, 1);
    }
});