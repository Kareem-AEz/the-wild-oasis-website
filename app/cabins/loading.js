import Spinner from "../../starter/components/Spinner"

function loading() {
	return (
		<div className="grid items-center justify-center">
			<Spinner />
			<p className="text-primary-200 text-xl">Loading cabin details</p>
		</div>
	)
}

export default loading
