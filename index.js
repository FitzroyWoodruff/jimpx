const Jimp = require("jimp");

(async () => {
	//read the image
	const image = await Jimp.read("img/bbb.jpg");

	const font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
	image.print(font, 0, 0, "This is a test");
	//save the image
	image.write("out/newImage2.png");
})();
