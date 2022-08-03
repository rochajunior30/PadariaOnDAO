import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x7025c9452d24520bD4c5B3DF90b3348BB79bfe90");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Emblema Administrativo Padaria On",
        description: "Esse NFT vai te dar acesso administrativo a Padaria Online - DAO!",
        image: readFileSync("scripts/assets/nftadm.png"),
      },
    ]);
    console.log("✅ Novo NFT criado com sucesso no !");
  } catch (error) {
    console.error("falha ao criar o novo NFT", error);
  }
})()