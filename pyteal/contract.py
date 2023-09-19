#contract.py
# This file based on the counter app from the Algorand documentation - https://developer.algorand.org/docs/get-details/dapps/pyteal/#final-product
from pyteal import *
"""Modified Counter Application"""

def approval_program():
    handle_creation = Seq([
        If(App.globalGet(Bytes("Amount")) == Int(0)).Then(
            App.globalPut(Bytes("Amount"), Int(0))  # Set "Amount" to 0 if it's 0
        ).Else(
            # Set "Amount" to its current value if it's not 0
            App.globalPut(Bytes("Amount"), App.globalGet(Bytes("Amount")))
        ),
        Return(Int(1))
    ])

    handle_optin = Return(Int(1))
    handle_closeout = Return(Int(1))
    handle_updateapp = Return(Int(1))
    handle_deleteapp = Return(Int(1))
    scratchAmount = ScratchVar(TealType.uint64)
    localAmount = ScratchVar(TealType.uint64)
    @Subroutine(TealType.none)
    def receive_donation(account: Expr, amount: Expr):
        return Seq(
            InnerTxnBuilder.Begin(),
            InnerTxnBuilder.SetFields(
                {
                    TxnField.type_enum: TxnType.Payment,
                    TxnField.receiver: account,
                    TxnField.amount: Mul(amount,Int(1000000)),
                    TxnField.fee: Int(0),  # use fee pooling
                }
            ),
            InnerTxnBuilder.Submit(),
        )
    @Subroutine(TealType.none)
    def send_donation(account: Expr, amount: Expr):
        return Seq(
            InnerTxnBuilder.Begin(),
            InnerTxnBuilder.SetFields(
                {
                    TxnField.type_enum: TxnType.Payment,
                    TxnField.receiver: account,
                    TxnField.amount: Mul(amount,Int(1000000)),
                    TxnField.fee: Int(0),  # use fee pooling
                }
            ),
            InnerTxnBuilder.Submit(),
        )
    add_donation = Seq([
        scratchAmount.store(App.globalGet(Bytes("Amount"))),
        # receive_donation(Global.current_application_address(), Btoi(Txn.application_args[1])), # Send the donation to the app creator
        App.globalPut(Bytes("Amount"), scratchAmount.load() + Btoi(Txn.application_args[1])),
        Return(Int(1))
    ])
    

    deduct_donation = Seq([
        scratchAmount.store(App.globalGet(Bytes("Amount"))),
        # send_donation(Txn.receiver(), Btoi(Txn.application_args[1])), # Send the aid to the applicant
        App.globalPut(Bytes("Amount"), scratchAmount.load() - Btoi(Txn.application_args[1])),
        Return(Int(1))
    ])

    add_local = Seq([
        localAmount.store(App.localGet(Txn.sender(), Bytes("Amount"))),
        App.localPut(Txn.sender(), Bytes("Amount"), localAmount.load() + Btoi(Txn.application_args[1])),
        Return(Int(1))
    ])

    deduct_local = Seq([
        localAmount.store(App.localGet(Txn.sender(), Bytes("Amount"))),
        App.localPut(Txn.sender(), Bytes("Amount"), localAmount.load() - Btoi(Txn.application_args[1])),
        Return(Int(1))
    ])

    

    handle_noop = Seq(
        Assert(Global.group_size() == Int(1)), 
        Cond(
            [Txn.application_args[0] == Bytes("Add_Donation"), add_donation], 
            [Txn.application_args[0] == Bytes("Deduct_Donation"), deduct_donation],
            [Txn.application_args[0] == Bytes("Add_Local"), add_local], 
            [Txn.application_args[0] == Bytes("Deduct_Local"), deduct_local]
        )
    )


    program = Cond(
        [Txn.application_id() == Int(0), handle_creation],
        [Txn.on_completion() == OnComplete.OptIn, handle_optin],
        [Txn.on_completion() == OnComplete.CloseOut, handle_closeout],
        [Txn.on_completion() == OnComplete.UpdateApplication, handle_updateapp],
        [Txn.on_completion() == OnComplete.DeleteApplication, handle_deleteapp],
        [Txn.on_completion() == OnComplete.NoOp, handle_noop]
    )

    return compileTeal(program, Mode.Application, version=5)


def clear_state_program():
    program = Return(Int(1))
    return compileTeal(program, Mode.Application, version=5)

# Write to file
appFile = open('approval.teal', 'w')
appFile.write(approval_program())
appFile.close()

clearFile = open('clear.teal', 'w')
clearFile.write(clear_state_program())
clearFile.close()
