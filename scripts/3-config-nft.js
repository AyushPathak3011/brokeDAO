import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop(
  "0x1051Fbe415Fa96c008B0De114EA2d395F247e66D"
);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "The Key",
        description: "This NFT will give you access to brokeDAO!",
        image: readFileSync("scripts/assets/squarepattern.gif"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
