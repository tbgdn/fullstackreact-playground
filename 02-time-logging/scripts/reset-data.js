const path = require("path");
const fs = require("fs");

const pristineData = path.resolve(process.cwd(), "src/data/data.json.pristine");
const appData = path.resolve(process.cwd(), "src/data/data.json");

fs.copyFile(pristineData, appData, () => {
    console.log("Data has been successfully reset.");
});