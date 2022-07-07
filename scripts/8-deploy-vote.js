import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    const voteContractAddress = await sdk.deployer.deployVote({
      name: "brokeDAO Governance",
      voting_token_address: "0xa4152AcA726e56FBb549F1451FA8D71c6cdeBa24",
      voting_delay_in_blocks: 0,
      voting_period_in_blocks: 6570,
      voting_quorom_fraction: 0,
      proposal_token_threshold: 0,
    });
    console.log(
      "✅ Successfully deployed vote contract, address:",
      voteContractAddress
    );
  } catch (error) {
    console.log("failed to deploy vote contract", error);
  }
})();
