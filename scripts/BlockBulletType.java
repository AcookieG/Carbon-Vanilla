package mindustry.entities.bullet;
import mindustry.*;
import mindustry.entities.bullet.BasicBulletType;

public class BlockBulletType extends BasicBulletType{
  public Block block;
  public void despawned(Bullet b){
    super.despawned(b);
    Vars.world.tileWorld(b.x, b.y).setBuild(block);
  }
}