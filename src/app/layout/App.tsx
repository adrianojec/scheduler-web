import { useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { fetchCurrentUser } from "../store/auth/action";
import Loading from "../../features/loading/Loading";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTE, AUTH_FORM } from "../utilities/enums";
import LoginPage from "../../features/auth/AuthPage";
import PrivateRoute from "./PrivateRoute";
import { USER } from "../utilities/constants";

function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useAppDispatch();

  const initApp = useCallback(async () => {
    try {
      if (localStorage.getItem(USER) != null)
        await dispatch(fetchCurrentUser());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    initApp().then(() => setLoading(false));
  }, [initApp]);

  if (loading) return <Loading />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE.HOME} element={<PrivateRoute />}></Route>
        <Route
          path={ROUTE.LOGIN}
          element={<LoginPage formType={AUTH_FORM.LOGIN} />}
        />
        <Route
          path={ROUTE.REGISTER}
          element={<LoginPage formType={AUTH_FORM.REGISTER} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
