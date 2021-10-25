import React, { useEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import "remixicon/fonts/remixicon.css";
import gsap from "gsap";

const Section = (props) => {
  const title = useRef(null);
  const desc = useRef(null);
  const wrapper = useRef(null);
  const rightBtn = useRef(null);
  const leftBtn = useRef(null);
  const arrow = useRef(null);
  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };
  }, []);

  useEffect(() => {
    const targetEle = wrapper.current;
    console.log(leftBtn);
    const observer = new IntersectionObserver((entries) => {
      entries.map((entry) => {
        if (entry.isIntersecting) {
          gsap.from(title.current, { duration: 1, y: 20, opacity: 0, delay: 0.5 });
          gsap.from(desc.current, { duration: 1, delay: 1, opacity: 0, y: 20 });
          gsap.fromTo(rightBtn.current, { opacity: 0, x: 50, visibility: "hidden" }, { opacity: 1, x: 0, visibility: "visible", delay: 1.5 });
          gsap.fromTo(leftBtn.current, { opacity: 0, x: -50, visibility: "hidden" }, { opacity: 1, x: 0, visibility: "visible", delay: 1.5 });
          if (arrow.current) gsap.fromTo(arrow.current, { visibility: "hidden", opacity: 0 }, { visibility: "visible", opacity: 1, duration: 1, delay: 2 });
        }
      });
    }, options);
    if (targetEle) observer.observe(targetEle);
  }, []);

  return (
    <Container id={props.id}>
      <Wrapper src={props.img} ref={wrapper}>
        <TitleContainer>
          <div className="title" ref={title}>
            {props.title}
          </div>
          <div className="desc" ref={desc}>
            {props.desc} <span>{props.span}</span>
          </div>
        </TitleContainer>
        <BtnContainer>
          {!props.button2 ? (
            <div className="btns alone">
              <div className="left btn" ref={leftBtn}>
                {props.button1}
              </div>
            </div>
          ) : (
            <div className="btns">
              <div className="left btn" ref={leftBtn}>
                {props.button1}
              </div>
              <div className="right btn" ref={rightBtn}>
                {props.button2}
              </div>
            </div>
          )}
          {props.index === 0 ? (
            <div className="go-down-arrow">
              <i className="ri-arrow-down-s-line" ref={arrow}></i>
            </div>
          ) : (
            ""
          )}
        </BtnContainer>
      </Wrapper>
    </Container>
  );
};

export default Section;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: contain;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const BtnContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 50px;

  .btns {
    display: flex;
    justify-content: space-between;
    column-gap: 20px;
    align-items: center;

    &.alone {
      display: flex;
      justify-content: center;
    }

    .btn {
      width: 70%;
      background-color: orange;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--font-size-small);
      font-weight: 600;
      text-transform: uppercase;
      border-radius: 50px;
      padding: 15px 0px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &.left {
        background-color: #333439;
        color: white;
        visibility: hidden;
      }

      &.right {
        background-color: #e0dddc;
        visibility: hidden;
      }
    }
  }

  .go-down-arrow {
    margin-top: 20px;
    display: flex;
    justify-content: center;

    i {
      font-size: 2.5rem;
      color: gray;
      animation: arrowDown 1.5s infinite;
    }

    @keyframes arrowDown {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0px);
      }

      40% {
        transform: translateY(5px);
      }

      60% {
        transform: translateY(5px);
      }
    }
  }

  @media only screen and (max-width: 630px) {
    width: 400px;
  }

  @media only screen and (max-width: 430px) {
    width: 300px;

    .btns {
      height: 80px;
      flex-direction: column;
      row-gap: 10px;

      .btn {
        padding: 10px 0px;
        font-size: var(--font-size-x-small);
      }
    }
  }

  @media only screen and (max-width: 340px) {
    width: 250px;
  }
`;

const TitleContainer = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: var(--font-size-heading);
    font-weight: 700;
    text-transform: capitalize;
    color: var(--font-color);
    letter-spacing: 1.6px;
  }

  .desc {
    margin-top: 5px;
    font-size: var(--font-size-upper);
    font-weight: 500;
    color: var(--font-color-subHeading);

    span {
      border-bottom: 1px solid var(--font-color-subHeading);
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        border-bottom: 2px solid var(--font-color-subHeading);
        color: var(--font-color);
      }
    }
  }

  @media only screen and (max-width: 425px) {
    margin-top: 100px;

    .title {
      font-size: var(--font-size-heading-res);
      letter-spacing: 0px;
    }

    .desc {
      font-size: var(--font-size-small);
    }
  }
`;
