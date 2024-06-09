//this is the variable name, check Blocks.java in core/scr/content in the mindustry github to check all of them

let block = Blocks.router;

let bullet = with(extend(BasicBulletType, {
  despawned(b){
    this.super$despawned(b);
    Vars.world.tileWorld(b.x, b.y).setBuild(block);
  }  
})){
  //js object formatting here, more similar to hjson than json
 collides: false 
};
//we need this cause js runs before json content loads, so this block allows us to find the turret after it loads
Evenrs.on(ClientLoadEvent. e => {
  //this gets your turret in js  
let turret = Vars.content.getByName(carbon-vanilla-blockturret);
  //ammoTypes is your turret's ammo. Put tells the game that this item makes the turret shoot this bullet
  turret.ammoTypes.put(Items.pyratite, bullet);
})