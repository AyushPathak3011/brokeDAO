import sdk from "./1-initialize-sdk.js";

const vote = sdk.getVote("0x840027a09019Aa6eC566328A27cfFD6F16253D54");

const token = sdk.getToken("0xa4152AcA726e56FBb549F1451FA8D71c6cdeBa24");

(async () => {
  try {
    await token.roles.grant("minter", vote.getAddress());
    console.log("✅ Successfully granted minter role to vote contract");
  } catch (error) {
    console.error("failed to grant minter role to vote contract", error);
    process.exit(1);
  }

  try {
    const ownedTokenBalance = await token.balanceOf(process.env.WALLET_ADDRESS);

    const ownedAmount = ownedTokenBalance.displayValue;
    const percent75 = Number(ownedAmount) * 0.75;

    await token.transfer(vote.getAddress(), percent75);
    console.log(
      "✅ Successfully transferred " + percent75 + " tokens to vote contract"
    );
  } catch (error) {
    console.error("failed to transfer tokens to vote contract", error);
    process.exit(1);
  }
})();
