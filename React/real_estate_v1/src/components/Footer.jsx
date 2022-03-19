import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { Button } from "./Button";
import { IoMdArrowRoundForward } from "react-icons/io";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import { css } from "styled-components";

const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterTop>
          <Quote>
            <h3>
              Let's find <br /> your Dream Home
            </h3>
          </Quote>
          <FooterInfo>
            <h4>Contact Us</h4>
            <Link to="/homes">FAQ</Link>
            <Link to="/homes">Support</Link>
            <Link to="/homes">Questions</Link>
          </FooterInfo>
          <FooterInfo>
            <h4>Offices</h4>
            <Link to="/homes">United States</Link>
            <Link to="/homes">Europe</Link>
            <Link to="/homes">Canada</Link>
          </FooterInfo>
        </FooterTop>
        <FooterBottom>
          <SocialIcons>
            <a
              href="https://www.youtube.com/channel/UCB_uUJrCjzLMwj-k-pYwTSA"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Youtube />
            </a>
            <a
              href="https://www.instagram.com/tdphoang/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Instagram />
            </a>
            <a
              href="https://www.facebook.com/tdphuochoang/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Facebook />
            </a>
            <a
              href="https://www.linkedin.com/in/tdphuochoang/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkedIn />
            </a>
            <a
              href="https://github.com/tdphuochoang"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Github />
            </a>
          </SocialIcons>
          <Contact>
            <Button to="/homes">
              Let's Connect <IoMdArrowRoundForward />
            </Button>
          </Contact>
        </FooterBottom>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  background: #000d1a;
  color: #fff;
  width: 100%;
  height: 600px;
  padding: 3rem calc((100vw - 1300px) / 2);

  @media screen and (max-width: 768px) {
    height: 1000px;
  }
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`;
const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Quote = styled.div`
  flex: 1;
  padding: 2rem 0rem;

  h3 {
    font-size: clamp(2rem, 8vw, 5rem);
  }
`;
const FooterInfo = styled.div`
  padding: 2rem;
  line-height: 3;
  display: flex;
  flex-direction: column;

  a {
    color: #fff;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 0rem;
  }
`;
const FooterBottom = styled.div`
  display: flex;
  padding: 2rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const SocialIcons = styled.div`
  display: flex;
  width: 50%;

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
    width: 100%;
  }
`;

const IconStyle = css`
  font-size: clamp(1rem, 6vw, 2rem);
  margin-right: 1.5rem;
  color: #cd853f;
`;
const Instagram = styled(FaInstagram)`
  ${IconStyle}
`;
const Facebook = styled(FaFacebookF)`
  ${IconStyle}
`;
const LinkedIn = styled(FaLinkedinIn)`
  ${IconStyle}
`;
const Youtube = styled(FaYoutube)`
  ${IconStyle}
`;
const Github = styled(FaGithub)`
  ${IconStyle}
`;
const Contact = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export default Footer;
