controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bottiglia.setFlag(SpriteFlag.Ghost, false)
    ball = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . 4 5 5 5 4 . . . . . . 
        . . . . . 4 5 5 5 4 . . . . . . 
        . . . . . 4 5 5 5 4 . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, lanciatore, 87, 0)
    pause(500)
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    bottiglia = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . 3 9 3 . . . . . . . 
        . . . . . . 3 9 3 . . . . . . . 
        . . . . . . 3 9 3 . . . . . . . 
        . . . . . 3 3 9 3 3 . . . . . . 
        . . . . 3 3 9 9 9 3 3 . . . . . 
        . . . . 3 9 9 9 9 9 3 . . . . . 
        . . . . 3 9 9 9 9 9 3 . . . . . 
        . . . . 3 9 9 9 9 9 3 . . . . . 
        . . . . 3 9 9 9 9 9 3 . . . . . 
        . . . . 3 9 9 9 9 9 3 . . . . . 
        . . . . 3 9 9 9 9 9 3 . . . . . 
        . . . . 3 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    bottiglia.x = scene.screenWidth() - 20
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    bottiglia.destroy(effects.disintegrate, 500)
})
let ball: Sprite = null
let bottiglia: Sprite = null
let lanciatore: Sprite = null
lanciatore = sprites.create(img`
    . . 3 . . . . . . . 3 . . . . . 
    . . 3 . 3 3 . 3 3 . 3 . . . . . 
    . . 3 . . . . . . . 3 . . . . . 
    . . 3 . . . . . . . 3 . . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . . . . . 3 . . . . . . . . . 
    . . . . . . 3 . . . . . . . . . 
    . . . . 4 4 4 4 4 . . 6 6 . . . 
    . . . 6 4 4 4 4 4 . 6 6 . . . . 
    . . . 6 4 4 4 4 4 6 6 . . . . . 
    . . 6 . 4 4 4 4 4 . . . . . . . 
    . . 6 6 4 4 4 4 4 . . . . . . . 
    . . . . 4 4 4 4 4 . . . . . . . 
    . . . . 6 . . . 6 . . . . . . . 
    . . . . 6 . . . 6 . . . . . . . 
    . . . 6 6 . . . 6 6 . . . . . . 
    `, SpriteKind.Player)
bottiglia = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . . 3 9 3 . . . . . . . 
    . . . . . . 3 9 3 . . . . . . . 
    . . . . . . 3 9 3 . . . . . . . 
    . . . . . 3 3 9 3 3 . . . . . . 
    . . . . 3 3 9 9 9 3 3 . . . . . 
    . . . . 3 9 9 9 9 9 3 . . . . . 
    . . . . 3 9 9 9 9 9 3 . . . . . 
    . . . . 3 9 9 9 9 9 3 . . . . . 
    . . . . 3 9 9 9 9 9 3 . . . . . 
    . . . . 3 9 9 9 9 9 3 . . . . . 
    . . . . 3 9 9 9 9 9 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
lanciatore.x = 50
bottiglia.x = scene.screenWidth() - 20
bottiglia.vy = 0
controller.moveSprite(lanciatore, 0, 50)
game.onUpdateInterval(500, function () {
	
})
