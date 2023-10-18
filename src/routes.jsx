import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { NavBar } from "./components/NavBar"
import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"
import { Projects } from "./pages/Projects"
import { About } from "./pages/About"

function AppRouter() {
	return (
		<main>
			<Router>
				<NavBar />
				<Routes >
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/about" element={<About />} />
						<Route path="/projects" element={<Projects />} />
					</Route>

					{/* <Route path="*" element={<NotFound />} /> */}
				</Routes>
			</Router>
		</main>
	)
}

export default AppRouter