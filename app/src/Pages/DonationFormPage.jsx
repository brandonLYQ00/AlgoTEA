

import { useEffect, useState } from "react";
import classes from "../style/Donation.module.css";
import DonateMonthly from "../components/Donation/DonateMonthly";
import DonateOnce from "../components/Donation/DonateOnce";
import {PeraWalletConnect} from '@perawallet/connect';
import algosdk, { algosToMicroalgos, microalgosToAlgos, waitForConfirmation } from 'algosdk';
import { getApplicationAddress } from 'algosdk';
// Create the PeraWalletConnect instance outside the component
const peraWallet = new PeraWalletConnect();

// The app ID on testnet
const appIndex = 365663227;

// connect to the algorand node
const algod = new algosdk.Algodv2('','https://testnet-api.algonode.cloud', 443);


function DonationFormPage() {
    const [isMonthlySelected, setMonthlySelected] = useState(true);
    const [isOnceSelected, setOnceSelected] = useState(false);
    const [accountAddress, setAccountAddress] = useState(null);
    const isConnectedToPeraWallet = !!accountAddress;
    const appAddress = algosdk.getApplicationAddress(appIndex);
  
    const handleMonthly = () => {
      setMonthlySelected(true);
      setOnceSelected(false);
    };
  
    const handleOnce = () => {
      setMonthlySelected(false);
      setOnceSelected(true);
    };
  
    const monthlyButtonStyle = {
      backgroundColor: isMonthlySelected ? "#6FFCD2" : "#a0b4ae4e",
    };
  
    const onceButtonStyle = {
      backgroundColor: isOnceSelected ? "#6FFCD2" : "#a0b4ae4e",
    };
    useEffect(() => {
      // checkAmountState();
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
          <div className={`card ${classes.card_measure}`}>
            <div className={`card-body ${classes.card_body_props}`}>
              <div className={`${classes.options}`}>
                <div className={classes.button} onClick={
                  isConnectedToPeraWallet ? handleDisconnectWalletClick : handleConnectWalletClick
                  }>
                  <button type="button" className="btn">
                    {isConnectedToPeraWallet ? "Disconnect" : "Connect to Pera Wallet"}
                  </button>
                </div>
                <div className={classes.button} onClick={optInToApp}>
                  <button type="button" className="btn">
                    Opt In
                  </button>
                </div>
              </div>
              <div className={`${classes.options}`}>
                <div className={classes.button} onClick={handleMonthly}>
                  <button type="button" className="btn" style={monthlyButtonStyle}>
                    Donate Monthly
                  </button>
                </div>
                <div className={classes.button} onClick={handleOnce}>
                  <button type="button" className="btn" style={onceButtonStyle}>
                    Donate Once
                  </button>
                </div>
              </div>
  
              {
                isMonthlySelected===true? <DonateMonthly></DonateMonthly>: <DonateOnce callApplication={callApplication('')}></DonateOnce>
              }
              
            </div>
          </div>
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
    async function callApplication(action) {
      try {
        const accInfo= await algod.accountInformation(accountAddress).do();
        const suggestedParams = await algod.getTransactionParams().do();
        if(action==""){
          console.log("Payment")
          const payTxn= algosdk.makePaymentTxnWithSuggestedParamsFromObject({
            from: accountAddress,
            suggestedParams: suggestedParams,
            to: appAddress,
            amount: algosToMicroalgos(1),
          });
          const txnGroup=[
            {txn: payTxn, signers: [accountAddress]},
          ];
          const signedTxn = await peraWallet.signTransaction([txnGroup]);
          const { txId } = await algod.sendRawTransaction(signedTxn).do();
          const result = await waitForConfirmation(algod, txId, 3);
          console.log(result);
        } else{
          console.log("Modify global state");
          // const uint8LocalAmount = new Uint8Array(2);
          // for (let i = 0; i < 2; i++) {
          //   uint8LocalAmount[i] = (localAmount >> (8 * (2 - 1 - i))) & 0xff;
          // }
          // const appArgs = [new Uint8Array(Buffer.from(action)),uint8LocalAmount];        
          // const actionTx = 
          // algosdk.makeApplicationNoOpTxn(
          //   accountAddress,
          //   suggestedParams,
          //   appIndex,
          //   appArgs
          //   );
          //   const txnGroup=[
          //     {txn: actionTx, signers: [accountAddress]},
          //   ];
          //   const signedTxn = await peraWallet.signTransaction([txnGroup]);
          //   const { txId } = await algod.sendRawTransaction(signedTxn).do();
          //   const result = await waitForConfirmation(algod, txId, 2);
        }
        
        // // get suggested params
        // const suggestedParams = await algod.getTransactionParams().do();
        
        // const actionTxGroup = [
        //   {txn: actionTx, signers: [accountAddress]},
        // ];
  
        // const signedTx = await peraWallet.signTransaction([actionTxGroup]);
        // const { txId } = await algod.sendRawTransaction(signedTx).do();
        // const result = await waitForConfirmation(algod, txId, 2);
        // console.log(result);
        // setLocalAmount(1);
        // // checkLocalAmountState();
      
      } catch (e) {
        console.error(`There was an error calling the  app: ${e}`);
      }
      
    }
    
    
}
export default DonationFormPage;
