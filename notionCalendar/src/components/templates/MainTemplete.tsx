import styled from "styled-components";
import MainNav from "../organisms/MainNav";
import MainSection from "../organisms/MainSection";

const MainTempleteStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr;
  height: 100vh;

  .nav_menu {
    border: 1px solid white;
  }

  .main_container {
    border: 1px solid white;
    padding: 2rem;
  }

  @media (min-width: 1500px) {
    & {
      grid-template-columns: 1fr 5fr;
    }
  }
`;

export default function MainTemplete() {
  return (
    <MainTempleteStyle>
      <MainNav />
      <MainSection />
    </MainTempleteStyle>
  );
}
