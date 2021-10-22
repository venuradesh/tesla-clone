import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <div className="header-menu left">
        <img className="logo" src="/images/logo.svg" />
      </div>
      <div className="header-menu middle">
        <div className="s">model s</div>
        <div className="3">model 3</div>
        <div className="x">model x</div>
        <div className="y">model y</div>
        <div className="solar-roof">Solar Roof</div>
        <div className="solar-panels">Solar Panels</div>
      </div>
      <div className="header-menu right">
        <div className="shop">shop</div>
        <div className="account">account</div>
        <div className="menu">menu</div>
      </div>
      <div className="menu-container">
        <div className="overlay"></div>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  height: 60px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  z-index: 100;

  .header-menu {
    &.right,
    &.left {
      width: 250px;

      img {
        cursor: pointer;
      }
    }

    &.right,
    &.middle {
      display: flex;
      width: max-content;
      column-gap: 20px;

      div {
        font-size: var(--font-size-upper);
        text-transform: capitalize;
        font-weight: 600;
        letter-spacing: 1.3px;
        cursor: pointer;
        padding: 5px 10px;
        border-radius: 8px;
        transition: all 0.3s ease;

        &:hover {
          background-color: var(--light-gray);
        }
      }
    }
  }

  @media only screen and (max-width: 1220px) {
    .header-menu {
      &.left,
      &.right {
        width: max-content;
      }

      &.middle {
        display: none;
      }

      &.right {
        .shop,
        .account {
          display: none;
        }
      }
    }
  }
`;
