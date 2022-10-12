
export interface Action {
    type: "products/increment" | "products/decrement",
    payload: number,
}




// interface BankruptAction {
//     type: ActionType.BANKRUPT
// }

// export type Action = DepositAction | WithdrawAction | BankruptAction;