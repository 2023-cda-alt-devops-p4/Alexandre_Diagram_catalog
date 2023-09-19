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
					<div className="flex container mx-auto">
						{/* <SideBar /> */}
						<div className="w-full body overflow-y-auto">
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