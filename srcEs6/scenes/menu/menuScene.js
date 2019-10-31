const MenuScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        let size = cc.winSize;
        
        // Create background
        const bg = new cc.Sprite(Resources.background);
        bg.setPosition(size.width / 2, size.height / 2);
        bg.setContentSize(size.width, size.height);
        this.addChild(bg, 0);
        
        const easyButton = new ccui.Button(Resources.button_2_monsters_png);
        easyButton.addClickEventListener(function() {
            cc.director.pushScene(new cc.TransitionFade(Config.transitionToGameScreenTime, new GameScene(false)));
        });
        easyButton.setPosition(size.width / 2, size.height / 2 + 400);
        this.addChild(easyButton, 3);
        
        const hardButton = new ccui.Button(Resources.button_4_monsters_png);
        hardButton.addClickEventListener(function() {
            cc.director.pushScene(new cc.TransitionFade(Config.transitionToGameScreenTime, new GameScene(true)));
        });
        hardButton.setPosition(size.width / 2, size.height / 2 + 250);
        this.addChild(hardButton, 3);
        
        const shareButton = new ccui.Button(Resources.button_share_png);
        shareButton.addClickEventListener(function() {
            console.log('Share');
            if (cc.sys.isMobile) {
                var shareInfo = {};
                shareInfo.text = "Hieren Lee - ";
                shareInfo.title = "Share";
                shareInfo.link = "https://github.com/hienlh";
                shareInfo.showDialog = false; //if you want share with dialog，set the value true
                shareInfo.platform = sdkbox.SocialPlatform.Platform_Select;
                sdkbox.PluginShare.nativeShare(shareInfo);
            }
        });
        shareButton.setPosition(size.width / 2 - 250, size.height / 2);
        this.addChild(shareButton, 3);
        
        const gcButton = new ccui.Button(Resources.button_gc_png);
        gcButton.addClickEventListener(function(){
        });
        gcButton.setPosition(size.width / 2, size.height / 2);
        this.addChild(gcButton, 3);
        
        const rateButton = new ccui.Button(Resources.button_rate_png);
        rateButton.addClickEventListener(() => {
            cc.sys.openURL('https://github.com/hienlh')
        });
        rateButton.setPosition(size.width / 2 + 250, size.height / 2);
        this.addChild(rateButton, 3);
        
        const labelEasy = cc.LabelTTF.create("Easy - Best Score: " + (cc.sys.localStorage.getItem('max_point') || 0), "Arial", 50);
        labelEasy.setPosition(size.width / 2, size.height / 2 - 200);
        labelEasy.setFontFillColor(new cc.Color(0, 0, 0, 250));
        this.addChild(labelEasy, 1);
        
        const labelHard = cc.LabelTTF.create("Difficult - Best Score: " + (cc.sys.localStorage.getItem('max_point_hard') || 0), "Arial", 50);
        labelHard.setPosition(size.width / 2, size.height / 2 - 300);
        labelHard.setFontFillColor(new cc.Color(0, 0, 0, 250));
        this.addChild(labelHard, 1);
    },
});