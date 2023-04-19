import styled from "@emotion/styled";
import { keyframes, css } from "@emotion/react";
import { LoaderProps } from "./model";

interface Props {
  isLoading: boolean;
}

const load = keyframes`
  0% {
    box-shadow: 0 0  inset;
  }
  100% {
    box-shadow: 0 -70px inset;
  }
`;

const hiddenStyles = css`
  opacity: 0;
  visibility: hidden;
`;

const StyledLoader = styled.div<Props>`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  visibility: visible;
  opacity: 1;
  scale: 2;
  background: #000000;
  transition: 0.3s;
  ${(p) => !p.isLoading && hiddenStyles};
`;

export const Loader: React.FC<LoaderProps> = ({
  isLoading,
  onTransitionEnd,
}) => (
  <StyledLoader
    id="loader"
    onTransitionEnd={onTransitionEnd}
    isLoading={isLoading}
  >
    <svg
      id="Capa_1"
      data-name="Capa 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 280.69 484.31"
      width="280.69000244140625"
      height="484.30999755859375"
    >
      <title>PATHFVTVRA</title>
      <path
        className="cls-1 svg-elem-1"
        d="M250.24,10.31c1.74,3.43,3.42,6.9,5.24,10.3q65.07,121,130.16,242c.35.64.64,1.32,1.09,2.28H384c-21.53,0-43.06,0-64.58.05a4.13,4.13,0,0,1-4.34-2.58q-31.87-61-63.9-121.89c-.35-.66-.72-1.31-1.31-2.37-.52.86-.9,1.43-1.22,2l-46.58,89.28c-5.87,11.25-11.77,22.47-17.6,33.74a2.67,2.67,0,0,1-2.74,1.76q-33.31-.07-66.64,0c-.5,0-1,0-1.84-.08,3-5.51,5.77-10.77,8.6-16q63.52-118.11,127-236.22a17.82,17.82,0,0,0,.89-2.27Z"
        transform="translate(-109.6 -8.05)"
      ></path>
      <path
        className="cls-1 svg-elem-2"
        d="M203.13,364.73c-8.09,13.41-13.61,26.85-12.92,42.43-.55-.91-1.18-1.78-1.66-2.72-8.9-17.55-15.19-35.94-17.28-55.58a99,99,0,0,1,11-57.29,9.32,9.32,0,0,1,1.51-2.14c-2.19,14.23-.58,28.08,3.55,41.74,2.34-8.23,5.61-15.78,13.07-21.36.48,2.82.88,5.31,1.34,7.78,4.32,23.07,10.24,45.63,21.5,66.44,4.22,7.8,9.28,15,16,20.89.52.45,1,.87,1.6,1.28a5,5,0,0,0,.85.32c.58-3.73,1.1-7.39,1.73-11,3.08-17.92,8-35.22,17.24-51.06a70,70,0,0,1,16.88-20.17c1-.76,2-1.43,3-2.11.49-.34,1-.61,1.49-.87,10.56,11.22,15.26,24.86,17.4,39.85,7.49-10.21,12.23-21.6,15.3-33.76a96.17,96.17,0,0,0,2.32-37c11.87,23.75,17.42,48.5,11.35,74.88-5.75,25-19.66,44.86-39.58,61.23-.6-18.58-.68-36.76-9.45-53.29l-.85-.18c-1.08,1.5-2.46,2.86-3.19,4.5-3.61,8.11-7.44,16.15-10.47,24.47a232.44,232.44,0,0,0-11.85,47.41c-1.56,11.23-2.36,22.52,0,33.93-.62-.81-1.29-1.59-1.87-2.43-17.23-25-31.82-51.39-41.65-80.23-3.79-11.12-6.36-22.51-6.17-34.36C203.32,366,203.25,365.73,203.13,364.73Z"
        transform="translate(-109.6 -8.05)"
      ></path>
    </svg>
  </StyledLoader>
);
