import Global from "./assets/styles/global";
import Reset from "./assets/styles/reset";

import { Home } from "./features/Home";

function App() {
	return (
		<>
			{/* Global css */}
			<Global />
			<Reset />
			{/* Global css  */}
			<Home />
		</>
	);
}

export default App;
