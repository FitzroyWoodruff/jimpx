const Jimp = require("jimp");

(async () => {
	//read the image
	const image = await Jimp.read("img/bbb.jpg");

	//save the image
	image.write("out/newImage.png");
})();
