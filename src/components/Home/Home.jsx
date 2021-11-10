import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "../ImgSlider/ImgSlider";
import Recommends from "../Recommends/Recommends";
import Viewers from "../Viewers/Viewers";
import NewDisney from "../NewDisney/NewDisney";
import Originals from "../Originals/Originals";
import Trendings from "../Trendings/Trendings";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../firebase";
import { setMovies } from "../../features/movie/movieSlice";
import { selectUserName } from "../../features/user/userSlice";
import { collection, getDocs } from "firebase/firestore";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  let recommends = [];
  let newDisney = [];
  let originals = [];
  let trendings = [];

  const querySnapshot = getDocs(collection(db, "movies"));

  useEffect(() => {
    querySnapshot.then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trendings = [...trendings, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisney,
          original: originals,
          trending: trendings,
        })
      );
    });
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trendings />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default Home;
