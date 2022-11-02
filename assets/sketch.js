let font
let graphic
let circle

function preload () {

	font = loadFont("assets/VG5000-Regular.otf")

} 

function setup () {

	createCanvas(windowWidth, windowHeight)

	graphic = createGraphics(windowWidth, windowHeight)

	graphic.fill("#000")
	graphic.textFont(font)
	graphic.textSize(350)
	graphic.textAlign(CENTER, CENTER)
	graphic.text("AT", width / 2, height / 2.5)

	circle = createGraphics(windowWidth, windowHeight)

	circle.fill('rgba(0,0,0,0)')
	circle.stroke("#000")
	circle.strokeWeight(25)
	circle.ellipse(width / 2, height / 2.15, 850, 450)

}

function draw () {

	background("#A20100")

	const tileSize = windowWidth / 10

	for (let x = 0; x < 50; x = x + 1) {

		// ANIMATION LOOP

		let position = frameCount
		position = position % 240

		if (position > 120) {

			position = 240 - position

		}

		position = position / 120


		position = easeInOutCubic(position)


		// SOURCE

		const sx = x * tileSize * position
		const sy = 0
		const sw = tileSize * position + (windowWidth - tileSize) * (1 - position)
		const sh = windowHeight

		// DESTINATION

		const dx = x * tileSize
		const dy = 0
		const dw = tileSize
		const dh = windowHeight

		// PRINTING THE IMAGE

		image(graphic, dx, dy, dw, dh, sx, sy, sw, sh)

		image(circle, dx, dy, dw, dh, sx, sy, sw, sh)

	}


	
		
}



