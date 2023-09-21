import { useEffect } from "react"
import { Container } from "react-bootstrap"
import { ethers } from "ethers"

// Components
import Navigation from "./Navigation";

function App() {

	const loadBlockchainData = async () => {
		const provider = new ethers.providers.Web3Provider(window.ethereum)
		console.log(provider)

		const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
		const account = ethers.utils.getAddress(accounts[0])
		console.log(account)
	}

	useEffect(() => {
		loadBlockchainData()
	});


	return(
		<Container>
			<Navigation />
		</Container>
	)
}

export default App;
