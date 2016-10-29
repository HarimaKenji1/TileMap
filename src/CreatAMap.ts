class TileMap extends egret.DisplayObjectContainer{

    private size = 2;
    private TextruesSize = 64;
    public startTile : Tile;
    public endTile : Tile;
    private numCols:number;
    private numRows:number;
    private tileArray : Tile[];
    

    constructor(){
        super();
        // this.width = this.size * this.TextruesSize;
        // this.height = this.size * this.TextruesSize;
        this.tileArray = [];
        this.init();
        this.numCols = 10;
        this.numRows = 10;
        
    }
    
    private init(){
        var config : TileData[] = [
        {x : 0 ,y : 0 , walkable : true , pictureName : "grass_top_png" , f : 0 , g : 0, h : 0 , costMultiplier :1.0},
        {x : 0 ,y : 1 , walkable : true , pictureName : "grass_top_png" , f : 0 , g : 0, h : 0 , costMultiplier :1.0}, 
        {x : 1 ,y : 0 , walkable : false , pictureName : "stonebrick_mossy_png" , f : 0 , g : 0, h : 0 , costMultiplier :1.0},
        {x : 1 ,y : 1 , walkable : false , pictureName : "stonebrick_mossy_png" , f : 0 , g : 0, h : 0 , costMultiplier :1.0}               
    ]

    for(let i = 0 ; i < config.length ; i++){
        var tiledate = config[i];
        var tile = new Tile(tiledate);
        this.addChild(tile);
        tile.x = tiledate.x * 64;
        tile.y = tiledate.y * 64;
        this.tileArray.push(tile);
    }
    }

    public getTile( x : number , y : number):any{
        for(var i = 0 ; i<this.tileArray.length ; i++){
              if(this.tileArray[i].x == x && this.tileArray[i].y== y){
                  break;
              }
        }
        return this.tileArray[i];

    }

    public setStartTile( x : number , y : number){
        for(var i = 0 ; i<this.tileArray.length ; i++){
              if(this.tileArray[i].x == x && this.tileArray[i].y== y){
                  break;
              }
        }
        this.startTile = this.tileArray[i];

    }

    public setEndTile( x : number , y : number){
        for(var i = 0 ; i<this.tileArray.length ; i++){
              if(this.tileArray[i].x == x && this.tileArray[i].y== y){
                  break;
              }
        }
        this.endTile = this.tileArray[i];

    }

    public getNumCols():any{
        return this.numCols;
    }

    public getNumRows():any{
        return this.numRows;
    }

    public getStartTile():any{
        return this.startTile;
    }
    

    

}

class Tile extends egret.DisplayObjectContainer{
    public bitmaps;
    public bitmapSize = 64;
    
    
    constructor(tiledata : TileData){
        super();
        this.bitmaps = new egret.Bitmap();
        this.addChild(this.bitmaps);
        this.bitmaps.texture = RES.getRes(tiledata.pictureName); 
        this.bitmaps.width = this.bitmapSize;
        this.bitmaps.height = this.bitmapSize;

    }
}

class TileData{
    public x : number;
    public y : number;
    public walkable : boolean;
    public pictureName : string;
    public  f:Number;
    public  g:Number;
    public  h:Number;
    public  costMultiplier:Number = 1.0;

}