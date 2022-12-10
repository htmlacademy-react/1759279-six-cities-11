import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainPage from '../../pages/main/main-page';
// import MainEmptyPage from '../../pages/main/main-empty-page';
import LoginPage from '../../pages/login/login-page';
// import FavoritesPage from '../../pages/favorites/favorites-page';
// import FavoritesEmptyPage from '../../pages/favorites/favorites-empty-page';
import PropertyPage from '../../pages/property/property-page';
// import PropertyNotLoggedPage from '../../pages/property/property-not-logged-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../../components/private-route/private-route';
import {CardReview} from '../../types/review';
import {CardOffer} from '../../types/offer';

type AppScreenProps = {
  offers: CardOffer[];
  reviews: CardReview[];
  selectedOffer: CardOffer;
}

function App({offers, reviews, selectedOffer}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage offers={offers} selectedOffer={selectedOffer}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <LoginPage/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<PropertyPage offer={offers[0]} reviews={reviews} offers={offers} selectedOffer={selectedOffer}/>}
        />
        <Route
          path="*"
          element={<NotFoundPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
