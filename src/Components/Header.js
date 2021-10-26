import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import "remixicon/fonts/remixicon.css";
import gsap from "gsap";

const Header = () => {
  const header = useRef();
  const selector = useSelector((state) => state.resMenu.headerMenu);
  const selector2 = useSelector((state) => state.resMenu.shopMenu);
  const [mediaQueryEnabled, setMediaQueryEnabled] = useState(false);
  //check whether the media query is enabled or not
  const mq = window.matchMedia("(max-width: 1220px)");

  useEffect(() => {
    setMediaQueryEnabled(mq.matches);
    gsap.fromTo(header.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
  }, [mq.matches]);
  //open the side bar menu
  const onMenuClick = () => {
    document.querySelector(".menu-container").classList.add("active");
  };
  //close the nav side bar menu
  const onCloseClick = () => {
    document.querySelector(".menu-container").classList.remove("active");
  };

  return (
    <Container ref={header}>
      <div className="header-menu left">
        <img className="logo" src="/images/logo.svg" alt="" />
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
        <div
          className="menu"
          onClick={() => {
            onMenuClick();
          }}
        >
          menu
        </div>
      </div>
      <div className="menu-container">
        <div
          className="overlay"
          onClick={() => {
            onCloseClick();
          }}
        ></div>
        <div className="menu-items ">
          <div className="close-btn">
            <i
              className="ri-close-fill"
              onClick={() => {
                onCloseClick();
              }}
            ></i>
          </div>
          <div className="menu-item-container">
            {mediaQueryEnabled
              ? selector.map((menu, index) => (
                  <li>
                    <a href="#" className="menu-item" key={index}>
                      {menu}
                    </a>
                  </li>
                ))
              : ""}
            <li>
              <a href="#" className="menu-item">
                Existing Inventory
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                Used Intentory
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                Trade In
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                Test Drive
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                Cybertruck
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                Roadster
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                Roadster
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                Semi
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                Charging
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                PowerWall
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                Commercial energy
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                Utilities
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                Find us
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                Inventory Relations
              </a>
            </li>
            {mediaQueryEnabled
              ? selector2.map((menu, index) => (
                  <li>
                    <a href="#" className="menu-item" key={index}>
                      {menu}
                    </a>
                  </li>
                ))
              : ""}
          </div>
        </div>
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
      color: var(--font-color);

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
          background-color: rgba(0, 0, 0, 0.1);
        }
      }
    }
  }

  .menu-container {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;

    &.active {
      display: flex;
      flex-direction: column;
      visibility: visible;

      .overlay {
        width: 100vw;
        height: 100vh;
        backdrop-filter: blur(3px);
        background-color: rgba(0, 0, 0, 0.3);
      }

      .menu-items {
        position: absolute;
        right: 0;
        transform: translateX(0);
        width: 270px;
        height: 100vh;
        animation: slideIn 0.3s;
        background-color: white;

        @keyframes slideIn {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .close-btn {
          height: 80px;
          background-color: white;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 30px;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--font-color);
          cursor: pointer;

          i {
            padding: 10px;
            border-radius: 50%;
            transition: all 0.3s ease-out;

            &:hover {
              background-color: var(--light-gray);
            }
          }
        }

        .menu-item-container {
          height: calc(100vh - 100px);
          width: 100%;
          overflow-y: auto;
          z-index: 110;
          padding-bottom: 100px;

          &::-webkit-scrollbar {
            width: 5px;
          }

          &::-webkit-scrollbar-thumb {
            background-color: var(--scrollbar-color);
            border-radius: 8px;
          }

          &::-webkit-scrollbar-track {
            background-color: transparent;
          }

          li {
            height: 45px;
            padding-left: 30px;
            padding-right: 30px;

            a {
              font-size: var(--font-size-normal);
              font-weight: 600;
              height: 45px;
              display: flex;
              align-items: center;
              padding-left: 20px;
              text-transform: capitalize;
              border-radius: 12px;
              transition: all 0.3s ease-out;

              &:hover {
                background-color: var(--light-gray);
              }
            }
          }
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
