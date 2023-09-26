import { Route, Routes as RoutesContainer } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UmlPage from "./pages/UmlPage/UmlPage"
import MerisePage from "./pages/MerisePage"
import DetailsPage from "./pages/detailspage/DetailsPage"

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
								<Route path={"/details/:json/:id"} element={<DetailsPage />} />
							</RoutesContainer>
						</div>
					</div>
				}
			/>
		</RoutesContainer>
	);
};

export default Routes;