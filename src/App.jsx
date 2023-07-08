import "./App.css";
import Home from "./pages/Home";
import AppHeader from "../components/AppHeader/AppHeader";
import AppFooter from "../components/AppFooter/AppFooter";
export default function App() {
  return (
    <>
      <AppHeader />
      <main>
        <Home />
      </main>
      <AppFooter styles={{ color: "purple" }} />
    </>
  );
}
