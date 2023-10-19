import { useState, useRef, useEffect } from "react";
import {PeraWalletConnect} from '@perawallet/connect';
import algosdk, { algosToMicroalgos, waitForConfirmation } from 'algosdk';
import { useNavigate } from "react-router-dom";
import classes from "../../style/PersonalInfo.module.css";
// Create the PeraWalletConnect instance outside the component
const peraWallet = new PeraWalletConnect();

// The app ID on testnet
const appIndex = 441810453;

// connect to the algorand node
const algod = new algosdk.Algodv2('','https://testnet-api.algonode.cloud', 443);
function PersonalInfo() {
  const [selectedUni, setSelectedUni] = useState("");
  const [selectedFac, setSelectedFac] = useState("");
  const [studenttId, setStudenttId] = useState("");
  const studentId = useRef("a");
  const history = useNavigate();
  const [collegeFee, setCollegeFee] = useState(0);
  const [dailyMeal, setDailyMeal] = useState(0);
  const [otherExpenses, setOtherExpenses] = useState(0);
  const [total,setTotal] = useState(0);
  const [accountAddress, setAccountAddress] = useState(null);
  const [instituteAddress, setInstituteAddress] = useState(null);
  const isConnectedToPeraWallet = !!accountAddress;

  const navigate = useNavigate();


  const handleContinue = async () => {
    // Check if any input field is empty
    if (!collegeFee || !dailyMeal || !otherExpenses) {
      alert("Please fill in all input fields.");
    } else {
      if(selectedUni==="UTM"){
        setInstituteAddress("VT5VQJWTAGLLB4ZZLS335F7TZI75WRY74RQO4Y4KE3IOG244R6RCZCDXEI");
      }
      const total = parseFloat(collegeFee) + parseFloat(dailyMeal) + parseFloat(otherExpenses);
      // All input fields are filled
      setTotal(total);
      await callApplication('Apply',total);

      // You can navigate to the next page here if needed
      navigate('/apply-donation/success');
    }
  };

  
  const handleBack = () => {
    history(-1);
  };

  const isActive = {
    "": selectedUni === "" || selectedFac === "" || total===0 ? "disabled" : "",
  };

  const uni = ["UTM", "UTHM", "UM", "UPM", "UKM", "UTP", "USM", "UUM"];
  const faculty = ["Engineering", "Computing", "Business", "Science"];
  useEffect(() => {
    
    // checkAddressesState();
    // reconnect to session when the component is mounted
    
    peraWallet.reconnectSession().then((accounts) => {
      // Setup disconnect event listener
      peraWallet.connector?.on('disconnect', handleDisconnectWalletClick);

      if (accounts.length) {
        setAccountAddress(accounts[0]);
      }
    })

  },[]);
  return (
    <>
      <main className={`${classes.main}`}>
        <section className={`${classes.PersonalInfoForm}`}>
          <i className="fa-solid fa-chevron-left" onClick={handleBack} style={{marginTop:350+"px"}}>
            {" "}
            Back{" "}
          </i>

          <div className={`${classes.personalInfoCard}`}>
            <div className="">
              <h2>Personal Information</h2>
              <div className={`${classes.options}`}>
                <div className={classes.button} >
                  <button type="button" className="btn" onClick={
                isConnectedToPeraWallet ? handleDisconnectWalletClick : handleConnectWalletClick
                }>
                    {isConnectedToPeraWallet ? "Disconnect" : "Connect to Pera Wallet"}
                  </button>
                </div>
                <div className={classes.button}>
                  <button type="button" className="btn" onClick={optInToApp}>
                  Opt In
                  </button>
                </div>
              </div>
              <p>University Name</p>

              <Dropdown
                selected={selectedUni}
                setSelected={setSelectedUni}
                options={uni}></Dropdown>
              <p>Faculty</p>

              <Dropdown
                selected={selectedFac}
                setSelected={setSelectedFac}
                options={faculty}></Dropdown>

              <p>Student ID</p>
              <input
                type="text"
                placeholder="A20E43000"
                value={studenttId}
                ref={studentId}
                onChange={(e) => setStudenttId(e.target.value)}
              />
              <p>College Fee</p>
              <input
                required
                type="number"
                placeholder="Enter an amount e.g 500"
                value={collegeFee}
              onChange={(e) => setCollegeFee(Number(e.target.value))}
              />
              <p>Daily meals</p>
              <input
                required
                type="number"
                placeholder="Enter an amount e.g 500"
                value={otherExpenses}
              onChange={(e) => setOtherExpenses(Number(e.target.value))}
              />
              <p>Other expenses</p>
              <input
                required
                type="number"
                placeholder="Enter an amount e.g 500"
                value={dailyMeal}
              onChange={(e) => setDailyMeal(Number(e.target.value))}
              />
              <p className={classes.disclaimer}>
                This includes stationary, transportation etc.
              </p>
              <div className={classes.bottom}>
                <p>Total Request</p>
                <p>
                  {collegeFee || dailyMeal || otherExpenses
                    ? parseFloat(collegeFee) +
                      parseFloat(dailyMeal) +
                      parseFloat(otherExpenses) 
                    : "- - -"
                    } Algos
                </p>
                
              </div>
              <div className={`${classes.personal_button}`}>
                <button
                  onClick={handleContinue}
                  className={`btn ${
                    selectedUni === "" || selectedFac === "" || studenttId === ""
                    || collegeFee === 0 || dailyMeal === 0 || otherExpenses === 0
                      ? "disabled"
                      : ""
                  } `}>
                  Continue
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
  function handleConnectWalletClick() {
    peraWallet.connect().then((newAccounts) => {
      // setup the disconnect event listener
      peraWallet.connector?.on('disconnect', handleDisconnectWalletClick);

      setAccountAddress(newAccounts[0]);
    });
  }

  function handleDisconnectWalletClick() {
    peraWallet.disconnect();
    setAccountAddress(null);
  }
  async function optInToApp() {
    const suggestedParams = await algod.getTransactionParams().do();
    const optInTxn = algosdk.makeApplicationOptInTxn(
      accountAddress,
      suggestedParams,
      appIndex
    );

    const optInTxGroup = [{txn: optInTxn, signers: [accountAddress]}];

      const signedTx = await peraWallet.signTransaction([optInTxGroup]);
      const { txId } = await algod.sendRawTransaction(signedTx).do();
      const result = await waitForConfirmation(algod, txId, 2);
  }
  
  async function callApplication(action,total) {
    try {
      const accInfo= await algod.accountInformation(accountAddress).do();
      const suggestedParams = await algod.getTransactionParams().do();
      // const signerAccounts=[];
      // signerAccounts.push(accountAddress);
      // signerAccounts.push(instituteAddress);

      // // multiSigParams is used when creating the address and when signing transactions
      // const multiSigParams = {
      //   version: 1,
      //   threshold: 2,
      //   addrs: signerAccounts.map((a) => a.addr),
      // };
      // const multisigAddr = algosdk.multisigAddress(multiSigParams);

      // console.log('Created MultiSig Address: ', multisigAddr);
      // // example: MULTISIG_CREATE

      // const fundMsigTxn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      //   from: funder.addr,
      //   to: multisigAddr,
      //   amount: 1_000_000,
      //   suggestedParams,
      // });

      // await client.sendRawTransaction(fundMsigTxn.signTxn(funder.privateKey)).do();
      // await algosdk.waitForConfirmation(client, fundMsigTxn.txID().toString(), 3);

      // // example: MULTISIG_SIGN
      // const msigTxn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      //   from: multisigAddr,
      //   to: funder.addr,
      //   amount: 100,
      //   suggestedParams,
      // });

      // // First signature uses signMultisigTransaction
      // const msigWithFirstSig = algosdk.signMultisigTransaction(
      //   msigTxn,
      //   multiSigParams,
      //   signerAccounts[0].sk
      // ).blob;

      // // Subsequent signatures use appendSignMultisigTransaction
      // const msigWithSecondSig = algosdk.appendSignMultisigTransaction(
      //   msigWithFirstSig,
      //   multiSigParams,
      //   signerAccounts[1].sk
      // ).blob;

      // await client.sendRawTransaction(msigWithSecondSig).do();
      // await algosdk.waitForConfirmation(client, msigTxn.txID().toString(), 3);
      const uint8College = new Uint8Array(2);
      for (let i = 0; i < 2; i++) {
        uint8College[i] = (collegeFee >> (8 * (2 - 1 - i))) & 0xff;
      }
      const uint8Food = new Uint8Array(2);
      for (let i = 0; i < 2; i++) {
        uint8Food[i] = (dailyMeal >> (8 * (2 - 1 - i))) & 0xff;
      }
      const uint8Other = new Uint8Array(2);
      for (let i = 0; i < 2; i++) {
        uint8Other[i] = (otherExpenses >> (8 * (2 - 1 - i))) & 0xff;
      }
      const uint8Total = new Uint8Array(2);
      for (let i = 0; i < 2; i++) {
        uint8Total[i] = (total >> (8 * (2 - 1 - i))) & 0xff;
      }
      const appArgs = [
        new Uint8Array(Buffer.from(action)),
        new Uint8Array(Buffer.from(selectedUni)), 
        new Uint8Array(Buffer.from(studenttId)),
        uint8Total,
        uint8College,
        uint8Food,
        uint8Other
      ];        
      const actionTx = 
      algosdk.makeApplicationNoOpTxn(
        accountAddress,
        suggestedParams,
        appIndex,
        appArgs
        );
        const txnGroup=[
          {txn: actionTx, signers: [instituteAddress]},
        ];
        const signedTxn = await peraWallet.signTransaction([txnGroup]);
        const { txId } = await algod.sendRawTransaction(signedTxn).do();
        const result = await waitForConfirmation(algod, txId, 2);
        await checkLocalState();
    } catch (e) {
      console.error(`There was an error calling the app: ${e}`);
    }
    
  }
  async function checkLocalState() {
    try {
      const accountInfo = await algod.accountApplicationInformation(accountAddress,appIndex).do();
      for (const key of accountInfo['app-local-state']['key-value']) {
        const keyName=Buffer.from(key.key,'base64').toString('ascii');
        const type=key.value.type;
        if(type==1){
          console.log(Buffer.from(key.value.bytes,'base64').toString('ascii'));
        }
      }
      // console.log(Buffer.from(accountInfo['app-local-state']['key-value'][1].value.bytes,'base64').toString('ascii'));
      // console.log(accountInfo['app-local-state']['key-value'][3].value.bytes);
      // console.log(accountInfo['app-local-state']);
    } catch (e) {
      console.error('There was an error connecting to the algorand node: ', e)
    }
  }
}

export default PersonalInfo;

function Dropdown({ selected, setSelected, options }) {
  const [isActive, setActive] = useState(false);

  return (
    <>
      <div className={classes.dropdown}>
        <div
          className={classes.dropdown_btn}
          onClick={(e) => {
            setActive(!isActive);
          }}>
          <div>{selected === "" ? "Choose One" : selected.toString()}</div>
          <div>
            <i className="fa-solid fa-caret-down"></i>
          </div>
        </div>
        {isActive && (
          <div className={classes.dropdown_content}>
            {options.map((option) => {
              return (
                <div
                key={option}
                  className={classes.dropdown_item}
                  onClick={(e) => {
                    setSelected(option);
                    setActive(false);
                  }}>
                  {option}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
