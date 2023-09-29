import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { NavBar } from "./components/NavBar"
import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"

function AppRouter() {
	return (
		<main>
			<Router>
				<NavBar />
				<Routes >
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="/contact" element={<Contact />} />
					</Route>

					{/* <Route path="*" element={<NotFound />} /> */}
				</Routes>
			</Router>
		</main>
	)
}

export default AppRouter