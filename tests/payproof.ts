import * as anchor from "@coral-xyz/anchor";

describe("PayProof", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  it("initializes the program", async () => {
    const program = anchor.workspace.Payproof as anchor.Program<any>;

    const [newAccount] = anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from("payproof"), provider.wallet.publicKey.toBuffer()],
      program.programId
    );

    await program.methods
      .initialize(new anchor.BN(42))
      .accounts({
        newAccount,
        signer: provider.wallet.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .rpc();

    const account = await program.account.newAccount.fetch(newAccount);

    if (account.data.toNumber() !== 42) {
      throw new Error("Initialization failed: account data mismatch");
    }
  });
});
