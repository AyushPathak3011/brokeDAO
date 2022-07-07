import {AddressZero} from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";

( async() => {
    try {
        const tokenAddress = await sdk.deployer.deployToken({
            name:"brokeDAO Governance Token",
            symbol: "BROKIE",
            primary_sale_recipient: AddressZero,

        });
        console.log("✅ Successfully deployed token contract, address:", tokenAddress);
    }
    catch (error){
        console.log("failed to deploy token contract", error);
    }
})();
