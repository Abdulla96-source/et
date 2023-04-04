qdee.qdee_Init()
basic.forever(function () {
    qdee.qdee_setPixelRGB(QdeeLights.Light1, QdeeRGBColors.Blue)
    qdee.qdee_showLight()
    basic.pause(1000)
    qdee.qdee_clearLight()
    basic.pause(1000)
})
