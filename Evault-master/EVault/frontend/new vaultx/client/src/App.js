
import { useState, useEffect } from "react";
import {BrowserRouter as Router,Routes,Route,Link, useSearchParams} from "react-router-dom"
import { ethers } from "ethers";
import Upload from "./artifacts/contracts/upload.sol/Upload.json";
import AllRoutes from './components/AllRoutes'
import "./App.css";


function App() {
  const [loginClicked, setLoginClicked] = useState(false);

const handleLoginClick = () => {
     // Set loginClicked to true when the login button is clicked
     setLoginClicked(true);
   };
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  

useEffect(() => {
   const loadBlockchainData = async () => {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        if (!provider) {
           console.error("Metamask is not installed");
           return;
        }
         window.ethereum.on("chainChanged", () => {
           window.location.reload();
         });
         window.ethereum.on("accountsChanged", () => {
           window.location.reload();
         });
         await provider.send("eth_requestAccounts", []);
         const signer = provider.getSigner();
         const address = await signer.getAddress();
         setAccount(address);
         const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
        const contract = new ethers.Contract(
           contractAddress,
           Upload.abi,
           signer
         );
         setContract(contract);
        setProvider(provider);
      } catch (error) {
        console.error("Error loading blockchain data:", error.message);
       }
     };

    loadBlockchainData();
  }, []);  
   const handleLogout = () => {
     localStorage.removeItem("isLoggedIn");
    window.location.reload();
  };
  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleShareClick = () => {
   
    setIsFormOpen(true);
   };
  const[toggleDrawerSidebar, setToggleDrawerSidebar]=useState({
    display:"none",
  })
  const toggleDrawer=()=>{
    if(toggleDrawerSidebar.display==="none"){
      setToggleDrawerSidebar({
        display:"flex"
      })
    }else{
      setToggleDrawerSidebar({
        display:"none"
      })
    }
}
  return (
    <Router>
      <AllRoutes/>
    </Router>
  );
}
export default App;

