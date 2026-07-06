let dirección = 0
let puntuación = 0
input.onButtonPressed(Button.A, function () {
    if (dirección == 0) {
        puntuación += 1
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.B, function () {
    if (dirección == 1) {
        puntuación += 1
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.Sad)
        music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
    }
})
