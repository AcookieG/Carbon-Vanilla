let block = Blocks.duo;

let bullet = with(extend(BasicBulletType, {
  despawned(b){
    this.super$despawned(b);
    Vars.world.tileWorld(b.x, b.y).setBuild(block);
  }  
})){
  
};