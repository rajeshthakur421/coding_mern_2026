const fs = require("fs");
const path = require('path');

const directoryName = "new-directory";

fs.mkdir(dirPath, { recursive: true }, (err) => {
  if (err) {
    console.error("Error creating directory:", err);
  } else {
    console.log(`Directory '${directoryName}' created successfully.`);
  }
});
