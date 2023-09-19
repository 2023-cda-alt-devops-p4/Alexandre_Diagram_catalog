import { Route, Routes as RoutesContainer } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UmlPage from "./pages/UmlPage"
import MerisePage from "./pages/MerisePage"

const Routes = () => {
	return (
		<RoutesContainer>
			<Route
				path="/*"
				element={
					<div className="">
						{/* <SideBar /> */}
						<div className="">
							<RoutesContainer>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/Uml" element={<UmlPage />} />
                                <Route path="/Merise" element={<MerisePage />} />
							</RoutesContainer>
						</div>
					</div>
				}
			/>
		</RoutesContainer>
	);
};

export default Routes;