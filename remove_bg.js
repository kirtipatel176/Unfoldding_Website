const Jimp = require('jimp');
const path = require('path');

async function removeGreen(imagePath) {
    try {
        const fullPath = path.resolve(process.cwd(), imagePath);
        console.log(`Processing: ${fullPath}`);

        // Handle different Jimp versions/exports
        let jimpInstance;
        if (typeof Jimp.read === 'function') {
            jimpInstance = Jimp;
        } else if (Jimp.default && typeof Jimp.default.read === 'function') {
            jimpInstance = Jimp.default;
        } else if (Jimp.Jimp && typeof Jimp.Jimp.read === 'function') {
            jimpInstance = Jimp.Jimp;
        } else {
            // Fallback for v1.0+ which might be different
            console.log('Jimp object structure:', Jimp);
            throw new Error('Could not find Jimp.read function');
        }

        const image = await jimpInstance.read(fullPath);

        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
            const red = this.bitmap.data[idx + 0];
            const green = this.bitmap.data[idx + 1];
            const blue = this.bitmap.data[idx + 2];

            // Green screen threshold
            // Adjust these values if needed based on the specific shade of green
            if (green > red + 20 && green > blue + 20 && green > 60) {
                this.bitmap.data[idx + 3] = 0; // Set alpha to 0
            }
        });

        if (typeof image.writeAsync === 'function') {
            await image.writeAsync(fullPath);
        } else {
            await image.write(fullPath);
        }
        console.log(`Successfully processed: ${imagePath}`);
    } catch (err) {
        console.error(`Error processing ${imagePath}:`, err.message);
    }
}

const files = process.argv.slice(2);
if (files.length === 0) {
    console.log("Usage: node remove_bg.js <file1> <file2> ...");
} else {
    files.forEach(file => removeGreen(file));
}
