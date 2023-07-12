import Card, {CardVariant} from "./components/Card"

const App = () => {
	return (
		<div>
			<Card height="200px" width="200px" variant={CardVariant.primary} onClick={()=>console.log('click')}>
				<button>ok</button>
			</Card>
		</div>
	)
}

export default App