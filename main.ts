namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
1 1 1 1 1 1 8 1 1 8 1 1 1 1 1 1 
1 1 1 1 1 1 8 1 1 8 1 1 1 1 1 1 
1 1 1 1 1 1 8 1 1 8 1 1 1 1 1 1 
1 1 1 1 1 1 8 1 1 8 1 1 1 1 1 1 
1 1 1 1 1 1 8 1 1 8 1 1 1 1 1 1 
1 1 1 1 1 1 8 1 1 8 1 1 1 1 1 1 
1 1 1 1 1 8 1 1 1 1 8 1 1 1 1 1 
1 1 1 1 8 1 1 2 2 1 1 8 1 1 1 1 
1 1 1 8 1 1 2 f f 2 1 1 8 1 1 1 
1 1 1 8 1 1 2 f f 2 1 1 8 1 1 1 
1 1 1 8 1 1 2 f f 2 1 1 8 1 1 1 
1 1 1 1 8 1 1 2 2 1 1 8 1 1 1 1 
1 1 1 1 1 8 1 1 1 1 8 1 1 1 1 1 
1 1 1 1 1 1 8 1 1 8 1 1 1 1 1 1 
1 1 1 1 1 1 8 1 1 8 1 1 1 1 1 1 
1 1 1 1 1 1 8 1 1 8 1 1 1 1 1 1 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
f 5 5 5 5 5 f 5 5 f 5 5 5 5 5 f 
5 f 5 5 5 5 f 5 5 f 5 5 5 5 f 5 
5 5 f 5 5 5 f 5 5 f 5 5 5 f 5 5 
5 5 5 f 5 5 f 5 5 f 5 5 f 5 5 5 
5 5 5 5 f 5 f 5 5 f 5 f 5 5 5 5 
5 5 5 5 5 f f 5 5 f f 5 5 5 5 5 
5 5 5 5 5 5 f f f f 5 5 5 5 5 5 
5 5 5 5 5 5 f f f f 5 5 5 5 5 5 
5 5 5 5 5 5 f f f f 5 5 5 5 5 5 
5 5 5 5 5 5 f f f f 5 5 5 5 5 5 
5 5 5 5 5 f f 5 5 f f 5 5 5 5 5 
5 5 5 5 f 5 f 5 5 f 5 f 5 5 5 5 
5 5 5 f 5 5 f 5 5 f 5 5 f 5 5 5 
5 5 f 5 5 5 f 5 5 f 5 5 5 f 5 5 
5 f 5 5 5 5 f 5 5 f 5 5 5 5 f 5 
f 5 5 5 5 5 f 5 5 f 5 5 5 5 5 f 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
8 8 8 9 9 8 8 8 8 9 9 8 8 8 9 9 
8 8 8 9 8 8 8 8 9 9 8 8 8 9 9 8 
8 8 8 9 8 8 8 9 9 8 8 8 9 9 8 8 
8 8 8 9 8 8 8 9 8 8 8 9 9 8 8 8 
9 8 8 9 9 8 9 9 8 8 9 9 8 8 9 8 
9 9 8 8 9 9 9 9 9 9 9 9 9 9 9 8 
9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 8 
8 9 9 9 9 9 9 9 9 9 9 9 8 8 8 9 
8 8 8 8 9 9 9 9 9 9 9 9 8 8 8 9 
8 8 8 8 9 9 9 9 9 9 9 9 9 9 9 8 
8 8 8 9 9 9 9 9 9 9 9 9 9 8 8 8 
8 9 9 9 8 8 9 8 9 9 8 8 9 8 8 8 
9 9 8 8 8 8 9 8 9 8 8 8 9 8 8 8 
8 8 8 8 9 9 9 8 9 8 9 9 9 8 8 8 
8 8 8 8 9 8 8 9 9 8 9 8 8 8 8 8 
8 8 8 9 9 8 8 9 8 9 9 8 8 8 8 8 
`
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (numJump <= 1) {
        mySprite.vy = -200
        numJump += 1
    }
})
let numJump = 0
let mySprite: Sprite = null
scene.setBackgroundColor(15)
game.showLongText("Win the game!!! Press A to cotinue", DialogLayout.Bottom)
game.showLongText("Move with the control", DialogLayout.Bottom)
game.showLongText("Press A to jump", DialogLayout.Bottom)
game.showLongText("Press B to use skill", DialogLayout.Bottom)
tiles.setTilemap(tiles.createTilemap(
            hex`3200140001010101010101010101010101010101010101010101010101010101010b010101010101010101090101010101010b010102060101010101010101010101010101010101010101010101010101050505050505050505050505050505050509010505050505050505010101010101010101010b0801010106010101010501010101010101010101010101010101010105050501010101010101010101010101010101010105050505050505010101010101010101010101010101010101010101010101010101010101010101010101090101090101010101010101010101010101010101010101010101010101010101010101010101010101010101010101050505050505050101010101010101010105010101010901010801010101010101010101010101010101010101060101010101010101010101010101010101010101010101050505050505050101010101010101010101010101010101010105050505010101010101010101010101010101010101010101010101010101010109010101010101010101010101010101010101010101090101090101010101010101010101010101010101010101010101010501010b01010901010101060101010101010101010505050505050501010109010108010101010101010101010101010101010101050505050a05050505010101010101010101010101010101010105050505050505010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010501010101010101010101010101010101010101010101010101010101010101010101010101010101010101010901010101010101010901080109010b01010101010101010101010101010101010101010101010101010101010104040404040404040101010105050505050505050101010101010101010101010101010101010101010101010101010901010b010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010404040404040101010101010101010101010101010101010101010101010101010101010101010101010101010101010401010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010801010101010101010101010101010101090106010101010101010101010101010901050506010108010b0101010101040404040401010101010101010101010105050505050505050101010101010101010505050501050505050505010103010101010101010101010101010101010801010101010101010101010101010b0101010101010101010101010101010101`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 
2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . 2 2 2 . . . . 
. . . . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . 2 2 2 2 2 2 2 . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 2 2 2 2 2 2 2 . . . . 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . 
. . . 2 2 2 2 2 . . . . . . . . . . . . 2 2 2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 . 2 2 2 2 2 2 . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleRedCrystal,sprites.builtin.oceanDepths4,sprites.builtin.oceanDepths3,sprites.dungeon.chestClosed,sprites.dungeon.chestOpen,myTiles.tile2,myTiles.tile3,sprites.builtin.oceanDepths7,myTiles.tile4],
            TileScale.Sixteen
        ))
mySprite = sprites.create(img`
8 8 8 1 1 1 . . . . . . . . . . 
8 8 8 1 1 2 . . . . . . . . . . 
8 8 8 8 8 8 . . . . . . . . . . 
f f f f f f f . . . . . . . . . 
8 f 8 8 8 8 . . . . . . . . . . 
8 8 8 8 8 8 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 350
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleRedCrystal)
scene.cameraFollowSprite(mySprite)
numJump = 0
info.setLife(3)
info.setScore(0)
let boxHit = 1
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        boxHit = 0
    }
    if (controller.left.isPressed()) {
        mySprite.setImage(img`
. . . . . . . . . . 1 1 1 8 8 8 
. . . . . . . . . . 2 1 1 8 8 8 
. . . . . . . . . . 8 8 8 8 8 8 
. . . . . . . . . f f f f f f f 
. . . . . . . . . . 8 8 8 8 f 8 
. . . . . . . . . . 8 8 8 8 8 8 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    }
    if (controller.right.isPressed()) {
        mySprite.setImage(img`
8 8 8 1 1 1 . . . . . . . . . . 
8 8 8 1 1 2 . . . . . . . . . . 
8 8 8 8 8 8 . . . . . . . . . . 
f f f f f f f . . . . . . . . . 
8 f 8 8 8 8 . . . . . . . . . . 
8 8 8 8 8 8 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    }
})
