import styled from "styled-components";
import "./common.scss";

export const MainNavStyle = styled.nav`
  padding: 2rem;
  position: relative;
  border-right: 1px solid var(--color-border-muted);

  .main_nav_header {
    font-size: var(--fontSize-h1);
    font-weight: 700;
    margin-bottom: 3rem;
  }

  .main_nav_items {
    position: relative;
    > ul {
      > li {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        line-height: 1.5rem + calc(1rem * 0.2);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        cursor: pointer;

        & > img {
          margin-right: 1rem;
        }

        &:hover {
          padding: calc(1rem * 0.3);
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 0 10px;
        }
      }
    }
  }

  .main_nav_footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    & > button {
      border-radius: 4px;
      border: 1px solid var(--color-border-muted);
      width: 100%;
      background-color: var(--default-backgroundColor);
      color: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      padding: 0.5rem 0;

      &:hover {
        opacity: 0.5;
      }

      & > img {
        margin-right: calc(1rem * 0.5);
      }
    }
  }
`;
