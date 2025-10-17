import { useState } from 'react'

import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="flex items-center justify-center w-full min-h-screen ">
			<div
				className="shadow-2xl w-3xs rounded-3xl bg-orange-100 p-29 cursor-pointer hover:scale-105 transform transition-all duration-300"
				onClick={() => setCount((count) => count + 1)}>
				coding
			</div>
		</div>
	)
}

export default App
