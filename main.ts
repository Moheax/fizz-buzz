input.onButtonPressed(Button.B, function () {
    getal = 0
})
let getal = 0
for (let index = 0; index < 100; index++) {
    getal += 1
    basic.showNumber(getal)
    if (getal % 3 == 0) {
        if (getal % 5 == 0) {
            basic.showString("x")
        }
    }
    if (getal % 3 == 0) {
        basic.showString("\\")
    }
    if (getal % 5 == 0) {
        basic.showString("/")
    }
}
