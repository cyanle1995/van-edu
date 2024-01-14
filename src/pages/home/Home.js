import { Container } from "react-bootstrap";
import StatusBar from "./components/statusbar";
import Ads from "./components/ads";
import Categories from "./components/categories";
import "./styles.scss";
import Events from "./components/events";
import Books from "./components/books";
import Questions from "./components/questions";
import News from "./components/news";
import AppFooter from "components/appFooter/AppFooter";
import { useEffect } from "react";
import { getCourses, getBooks, getQuestions } from "store/home/actions";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
    dispatch(getBooks());
    dispatch(getQuestions())
  }, []);

  return (
    <Container className="home-container">
      <StatusBar />
      <Ads />
      <div className="home-line"></div>

      <Categories />
      <div className="home-line"></div>

      <Events />
      <div className="home-line"></div>

      <Books />
      <div className="home-line"></div>

      <News />
      <div className="home-line"></div>

      <Questions />
      <AppFooter />
    </Container>
  );
};
export default Home;
