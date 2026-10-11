use anchor_lang::prelude::*;

// Use a valid base58 program ID. The previous value was invalid and caused
// the Anchor build to fail with `failed to decode base58 string`.
declare_id!("1111111111111111111111111111111111111111111111111111111111111111");

#[program]
pub mod payproof {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>, data: u64) -> Result<()> {
        ctx.accounts.new_account.data = data;
        msg!("PayProof initialized with data: {}!", data);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = signer, space = 8 + 8)]
    pub new_account: Account<'info, NewAccount>,

    #[account(mut)]
    pub signer: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[account]
pub struct NewAccount {
    pub data: u64,
}
