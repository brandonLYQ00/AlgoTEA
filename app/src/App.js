import './App.css';
import {PeraWalletConnect} from '@perawallet/connect';
import algosdk, { waitForConfirmation } from 'algosdk';
import { getApplicationAddress } from 'algosdk';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';

// Create the PeraWalletConnect instance outside the component
const peraWallet = new PeraWalletConnect();

// The app ID on testnet
const appIndex = 365663227;

// connect to the algorand node
const algod = new algosdk.Algodv2('','https://testnet-api.algonode.cloud', 443);

function App() {
  const [appAddress,setAppAddress] = useState(null);
  const [appBalance,setAppBalance] = useState(null);
  const [accountAddress, setAccountAddress] = useState(null);
  const [localAmount, setLocalAmount] = useState(1);
  const isConnectedToPeraWallet = !!accountAddress;

  useEffect(() => {
    checkAppAddressState();
    checkAmountState();
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
    <Container className='App-header'>
      <meta name="name" content="AlgoTEA" />
      <h1> AlgoTEA</h1>
      <h2>The tertiary education aid that is meant to help raise more scholars around the world by providing them with financial aid</h2>
      <Col>
        <h3>AlgoTEA Address</h3>
        <span className='text'>{appAddress}</span>
        <h3>AlgoTEA Balance</h3>
        <span className='text'>{appBalance/1000000} Algos</span>
        <br></br>
        <h3>Press the buttons below to donate Algos</h3>
      </Col>
      <Row className="center-row">
        <Button className="btn-wallet"
          onClick={
            isConnectedToPeraWallet ? handleDisconnectWalletClick : handleConnectWalletClick
          }>
          {isConnectedToPeraWallet ? "Disconnect" : "Connect to Pera Wallet"}
        </Button>
        <Button className="btn-wallet"
          onClick={
            () => optInToApp()
          }>
          Opt-in
        </Button>
      </Row> 
      
      <Row className="center-row">
        <Button className="btn-add"
          onClick={
              // Add to local amount
              () => setLocalAmount(localAmount+10)
            }>
          10 Algos
        </Button>
        <Button className="btn-add"
          onClick={
              // Add to local amount
              () => setLocalAmount(localAmount+100)
            }>
          100 Algos
        </Button>
        <Button className="btn-add"
          onClick={
              // Add to local amount
              () => setLocalAmount(localAmount+1000)
            }>
          1000 Algos
        </Button>
        <Button className="btn-add"
          onClick={
            // Add to local amount
            () => {
              setLocalAmount(localAmount+10000)
            }
            }>
          10000 Algos
        </Button>
      </Row>
      <Row>
        <Col>
          
        </Col>
        <Col>
          <h3>Donate</h3>
          <Row>
            <form>
              Amount (Algos):
              <input type="number" id="amount" name="amount" min="1" value={localAmount}
              onChange={(e) => setLocalAmount(Number(e.target.value))}></input>
            </form>
          </Row>
          <Button className="btn-add-global"
            onClick={
              // Add to local amount and global amount
              async () => {
                if (localAmount>0){
                  await callApplication("");
                  await callApplication("Add_Donation");
                }
              }
              
            }>
            Donate
          </Button>
          <Button className="btn-add-global"
            onClick={
              // Send
              async () => {
                if (localAmount>0){
                  await callApplication("Deduct_Donation");
                }
              }
              
            }>
            Send
          </Button>
          <h3>Sender Address</h3>
          <span className='text'>{accountAddress==null ? "Not connected to Pera Wallet" : accountAddress}</span>
        </Col>
        <Col>
          
        </Col>
      </Row>
    
    </Container>
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

    async function checkAmountState() {
      try {
        const app = await algod.getApplicationByID(appIndex).do();
        if (!!app.params['global-state'][0].value.uint) {
          setCurrentAmount(app.params['global-state'][0].value.uint);
        } else {
          setCurrentAmount(0);
        }

      } catch (e) {
        console.error('There was an error connecting to the algorand node: ', e)
      }
    }
    async function checkAppAddressState() {
      try {
        // const appInfo = await algod.getApplicationByID(appIndex).do();
        // const appAddress = getApplicationAddress(appIndex);
        const appAddress = algosdk.getApplicationAddress(appIndex);
        const accInfo= await algod.accountInformation(appAddress).do();
        setAppAddress(appAddress);
        setAppBalance(accInfo.amount);
      } catch (e) {
        console.error('There was an error connecting to the algorand node: ', e)
      }
    }
    

    // async function checkLocalAmountState() {
    //   try {
    //     const accountInfo = await algod.accountApplicationInformation(accountAddress,appIndex).do();
    //     if (!!accountInfo['app-local-state']['key-value'][0].value.uint) {
    //       setLocalAmount(accountInfo['app-local-state']['key-value'][0].value.uint);
    //     } else {
    //       setLocalAmount(0);
    //     }
    //     console.log("Local state amount: "+accountInfo['app-local-state']['key-value'][0].value.uint);
    //   } catch (e) {
    //     console.error('There was an error connecting to the algorand node: ', e)
    //   }
    // }

    async function callApplication(action) {
      try {
        const accInfo= await algod.accountInformation(accountAddress).do();
        const amount = accInfo.amount;
        const suggestedParams = await algod.getTransactionParams().do();
        if(action==""){
          console.log("Payment")
          const payTxn= algosdk.makePaymentTxnWithSuggestedParamsFromObject({
            from: accountAddress,
            suggestedParams: suggestedParams,
            to: appAddress,
            amount: localAmount*1000000,
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
          const uint8LocalAmount = new Uint8Array(2);
          for (let i = 0; i < 2; i++) {
            uint8LocalAmount[i] = (localAmount >> (8 * (2 - 1 - i))) & 0xff;
          }
          const appArgs = [new Uint8Array(Buffer.from(action)),uint8LocalAmount];        
          const actionTx = 
          algosdk.makeApplicationNoOpTxn(
            accountAddress,
            suggestedParams,
            appIndex,
            appArgs
            );
            const txnGroup=[
              {txn: actionTx, signers: [accountAddress]},
            ];
            const signedTxn = await peraWallet.signTransaction([txnGroup]);
            const { txId } = await algod.sendRawTransaction(signedTxn).do();
            const result = await waitForConfirmation(algod, txId, 2);
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
        setLocalAmount(1);
        // // checkLocalAmountState();
      
      } catch (e) {
        console.error(`There was an error calling the  app: ${e}`);
      }
    }
}

export default App;
