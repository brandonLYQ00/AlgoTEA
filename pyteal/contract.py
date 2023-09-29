#contract.py
# This file based on the counter app from the Algorand documentation - https://developer.algorand.org/docs/get-details/dapps/pyteal/#final-product
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
    scratchAmount = ScratchVar(TealType.uint64)
    localAmount = ScratchVar(TealType.uint64)
    amount = Btoi(Txn.application_args[1])
    # Receive donation from donors
    add_donation = Seq([
        scratchAmount.store(App.globalGet(Bytes("Requests"))),
        App.globalPut(Bytes("Requests"), scratchAmount.load() + Int(1)),
        Return(Int(1))
    ])
    
    # Give out donation to students
    deduct_donation = Seq([
        InnerTxnBuilder.Begin(),
        InnerTxnBuilder.SetFields(
            {
                TxnField.type_enum: TxnType.Payment,
                TxnField.amount: Mul(amount*Int(1000000)),
                TxnField.receiver: Txn.sender(),
            }
        ),
        InnerTxnBuilder.Submit(),
        scratchAmount.store(App.globalGet(Bytes("Requests"))),
        App.globalPut(Bytes("Requests"), scratchAmount.load() - 1),
        Return(Int(1))
    ])
    # Add student id and request
    add_student_id = Seq([
        App.localPut(Txn.sender(), Bytes("Student ID"), Txn.application_args[2]),
        App.localPut(Txn.sender(), Bytes("Request Status"), Int(0)),
        Return(Int(1))
    ])
    # Approve request and send algos
    approve_request = Seq([
        App.localPut(Txn.receiver(), Bytes("Request Status"), Int(1)),
        Return(Int(1))
    ])

    

    handle_noop = Seq(
        Assert(Global.group_size() == Int(1)), 
        Cond(
            [Txn.application_args[0] == Bytes("Add_Donation"), add_donation], 
            [Txn.application_args[0] == Bytes("Deduct_Donation"), deduct_donation],
            [Txn.application_args[0] == Bytes("Add_Student_Id"), add_student_id], 
            [Txn.application_args[0] == Bytes("Approve_Request"), approve_request]
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
