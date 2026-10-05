import * as anchor from "@coral-xyz/anchor";

describe("PayProof", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  it("Program is deployed", async () => {
    const programId = new anchor.web3.PublicKey(
      "declare_id!("EJkAW3JKPKDFUw3b6gVvJMnhY21CR9qg7a8nqaZrZM7p");"
    );

    const accountInfo = await provider.connection.getAccountInfo(programId);

    if (!accountInfo) {
      throw new Error("PayProof program not found on Devnet");
    }

    console.log("PayProof program is deployed on Devnet!");
    console.log("Program ID:", programId.toString());
  });
});
