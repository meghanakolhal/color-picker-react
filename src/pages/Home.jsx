
import AppFooter from "../components/AppFooter/AppFooter";
import AppHeader from "../components/AppHeader/AppHeader";
import Display from "../components/Display/Display";
const Home = () => {
  return (
    <>
    <AppHeader/>
      <Display />
      <AppFooter styles={{ color: "purple" }} />
    </>
  );
};
export default Home;
