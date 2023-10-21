#contract.py
from pyteal import *

def approval_program():
    handle_creation = Seq([
        If(App.globalGet(Bytes("Requests")) == Int(0)).Then(
            App.globalPut(Bytes("Requests"), Int(0))  # Set "Requests" to 0 if it's 0
        ).Else(
            # Set "Requests" to its current value if it's not 0
            App.globalPut(Bytes("Requests"), App.globalGet(Bytes("Requests")))
        ),
        Return(Int(1))
    ])

    handle_optin = Return(Int(1))
    handle_closeout = Return(Int(0))
    handle_updateapp = Return(Int(0))
    handle_deleteapp = Return(Int(0))
    # Apply for donation
    apply = Seq([
        Assert(Txn.application_args.length() == Int(7)),
        App.globalPut(Bytes("Requests"), App.globalGet(Bytes("Requests")) + Int(1)),
        App.localPut(Txn.sender(), Bytes("Institute"), Txn.application_args[1]),
        App.localPut(Txn.sender(), Bytes("Student ID"), Txn.application_args[2]),
        App.localPut(Txn.sender(), Bytes("Donation Requested"), Mul(Btoi(Txn.application_args[3]),Int(1000000))),
        App.localPut(Txn.sender(), Bytes("College"), Mul(Btoi(Txn.application_args[4]),Int(1000000))),
        App.localPut(Txn.sender(), Bytes("Food"), Mul(Btoi(Txn.application_args[5]),Int(1000000))),
        App.localPut(Txn.sender(), Bytes("Other"), Mul(Btoi(Txn.application_args[6]),Int(1000000))),
        App.localPut(Txn.sender(), Bytes("Donation Received"), Int(0)),
        Return(Int(1))
    ])
    

    handle_noop = Seq(
        Cond(
            [Txn.application_args[0] == Bytes("Apply"), apply],
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
