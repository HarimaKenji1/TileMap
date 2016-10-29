var TileMap = (function (_super) {
    __extends(TileMap, _super);
    function TileMap() {
        _super.call(this);
        this.size = 2;
        this.TextruesSize = 64;
        // this.width = this.size * this.TextruesSize;
        // this.height = this.size * this.TextruesSize;
        this.tileArray = [];
        this.init();
    }
    var d = __define,c=TileMap,p=c.prototype;
    p.init = function () {
        var config = [
            { x: 0, y: 0, walkable: true, pictureName: "grass_top_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 0, y: 1, walkable: true, pictureName: "grass_top_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 1, y: 0, walkable: false, pictureName: "stonebrick_mossy_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 1, y: 1, walkable: false, pictureName: "stonebrick_mossy_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 }
        ];
        for (var i = 0; i < config.length; i++) {
            var tiledate = config[i];
            var tile = new Tile(tiledate);
            this.addChild(tile);
            tile.x = tiledate.x * 64;
            tile.y = tiledate.y * 64;
            this.tileArray.push(tile);
        }
    };
    return TileMap;
}(egret.DisplayObjectContainer));
egret.registerClass(TileMap,'TileMap');
var Tile = (function (_super) {
    __extends(Tile, _super);
    function Tile(tiledata) {
        _super.call(this);
        this.bitmapSize = 64;
        this.bitmaps = new egret.Bitmap();
        this.addChild(this.bitmaps);
        this.bitmaps.texture = RES.getRes(tiledata.pictureName);
        this.bitmaps.width = this.bitmapSize;
        this.bitmaps.height = this.bitmapSize;
    }
    var d = __define,c=Tile,p=c.prototype;
    return Tile;
}(egret.DisplayObjectContainer));
egret.registerClass(Tile,'Tile');
var TileData = (function () {
    function TileData() {
        this.costMultiplier = 1.0;
    }
    var d = __define,c=TileData,p=c.prototype;
    return TileData;
}());
egret.registerClass(TileData,'TileData');
//# sourceMappingURL=CreatAMap.js.map