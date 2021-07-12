import { FaFacebookF, FaLinkedin } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { FcReddit } from 'react-icons/fc';
import styled from 'styled-components';
export const FooterDataIcons = [
  { icon: <FaFacebookF /> },
  { icon: <FiInstagram /> },
  { icon: <FaLinkedin /> },
  { icon: <FcReddit /> },
];

export const FooterIcons = styled.a`
  color: #fff;
  background: #cd853f;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;
