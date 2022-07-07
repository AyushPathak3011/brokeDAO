import sdk from "./1-initialize-sdk.js";

const editionDrop = sdk.getEditionDrop(
  "0x1051Fbe415Fa96c008B0De114EA2d395F247e66D"
);
const token = sdk.getToken("0xa4152AcA726e56FBb549F1451FA8D71c6cdeBa24");

(async () => {
  try {
    const walletAddresses = await editionDrop.history.getAllClaimerAddresses(
      "0"
    );

    if (walletAddresses.length === 0) {
      console.log("No one has claimed yet");
      process.exit(0);
    }
    const airdropTargets = walletAddresses.map((address) => {
      // Pick a random # between 1000 and 10000.
      const randomAmount = Math.floor(
        Math.random() * (10000 - 1000 + 1) + 1000
      );
      console.log("✅ Going to airdrop", randomAmount, "tokens to", address);

      // Set up the target.
      const airdropTarget = {
        toAddress: address,
        amount: randomAmount,
      };

      return airdropTarget;
    });

    // Call transferBatch on all our airdrop targets.
    console.log("🌈 Starting airdrop...");
    await token.transferBatch(airdropTargets);
    console.log(
      "✅ Successfully airdropped tokens to all the holders of the NFT!"
    );
  } catch (err) {
    console.error("Failed to airdrop tokens", err);
  }
})();
