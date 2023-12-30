import React from "react";

export default function SecretPage() {
  return (
    <div>
      <style>
        {`
    body {
      background-color: black;
    }

    .small-image {
      width: 100%;
      height: 100%;
      object-fit: cover;

    }
    .return-home-button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-top: 20px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.return-home-button:hover {
    background-color: #4554a0;
}

    .arcade-machine {
      
      height: 400px;
      width: 400px;
      position: relative;
      margin: 35px auto;
      perspective: 35em;
    }
    .arcade-machine .top {
      height: 15%;
      width: 70%;
      position: absolute;
      top: 0%;
      left: 15%;
      background: white;
      border: 5px solid #4c4c4c;
      z-index: 3;
    }
    .arcade-machine .top:before, .arcade-machine .top:after {
      height: 100%;
      width: 4%;
      position: absolute;
      top: -9%;
      background: white;
      border: 5px solid #4c4c4c;
      content: ' ';
    }
    .arcade-machine .top:before {
      left: -6%;
    }
    .arcade-machine .top:after {
      right: -6%;
    }
    .arcade-machine .stripes {
      height: 100%;
      width: 10%;
      position: absolute;
      top: 0%;
      left: 45%;
      background: #6874a6;
    }
    .arcade-machine .stripes:before, .arcade-machine .stripes:after {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0%;
      content: ' ';
    }
    .arcade-machine .stripes:before {
      background: #BFD3C1;
      left: -100%;
    }
    .arcade-machine .stripes:after {
      background: #0080FF;
      right: -100%;
    }
    .arcade-machine > .shadow {
      height: 85%;
      width: 65%;
      position: absolute;
      top: 2%;
      left: 19%;
      background: #4b5b61;
      box-shadow: 0 0 60px #4B5B61;
      z-index: -1;
    }
    .arcade-machine .screen-container {
      height: 50%;
      width: 62%;
      position: absolute;
      top: 15%;
      left: 19%;
      background: #4b5b61;
      border: 5px solid #4c4c4c;
      z-index: 1;
    }
    .arcade-machine .screen-container:before, .arcade-machine .screen-container:after {
      height: 100%;
      width: 4%;
      position: absolute;
      top: -2%;
      background: white;
      content: ' ';
      border: 5px solid #4c4c4c;
      z-index: 2;
    }
    .arcade-machine .screen-container:before {
      left: -6%;
    }
    .arcade-machine .screen-container:after {
      right: -6%;
    }
    .arcade-machine .screen-container .shadow {
      height: 8%;
      width: 110%;
      position: absolute;
      top: 0%;
      left: -5%;
      background: rgba(0, 0, 0, 0.1);
      z-index: 4;
    }
    .arcade-machine .screen-container .screen {
      height: 70%;
      width: 75%;
      position: absolute;
      top: 15%;
      left: 11%;
      background: #313332;
      border: 5px solid #4c4c4c;
      border-radius: 90px 93px 93px 93px / 15px 15px 15px 15px;
      overflow: hidden;
      text-align: center;
    }
    .arcade-machine .screen-container .screen-display {
      position: absolute;
      width: 100%;
      height: 200%;
      background-image: repeating-linear-gradient(0deg, #313332, #313332 15px, #4a4d4c 15px, #4a4d4c 16px);
      animation: translate 1s infinite;
    }
    .arcade-machine .screen-container .screen h2 {
      position: absolute;
      top: 60%;
      color: #e0e0e0;
      font-family: 'Orbitron', sans-serif, sans-serif;
    }
    .arcade-machine .screen-container .joystick {
      height: 6%;
      width: 5%;
      background: #0F90C9;
      position: absolute;
      top: 91%;
      left: 17%;
      border-radius: 50%;
      border: 5px solid #4c4c4c;
      z-index: 3;
    }
    .arcade-machine .screen-container .joystick:before {
      height: 90%;
      width: 65%;
      position: absolute;
      top: 7%;
      left: 32%;
      background: #0d78a8;
      content: '';
      border-radius: 50%;
    }
    .arcade-machine .screen-container .joystick .stick {
      height: 200%;
      width: 40%;
      position: absolute;
      top: 100%;
      left: 30%;
      background: #4c4c4c;
      content: '';
    }
    .arcade-machine .screen-container .joystick .stick:before {
      height: 100%;
      width: 150%;
      transform: rotate(90deg);
      position: absolute;
      top: 50%;
      left: -20%;
      background: #4c4c4c;
      content: '';
    }
    .arcade-machine .board {
      height: 20%;
      width: 66%;
      position: absolute;
      top: 61%;
      left: 18.2%;
      background: #4B5B61;
      transform: rotateX(70deg);
    }
    .arcade-machine .board:before, .arcade-machine .board:after {
      height: 92%;
      width: 4%;
      position: absolute;
      top: -2%;
      background: white;
      content: ' ';
      border: 5px solid #4c4c4c;
      z-index: 2;
    }
    .arcade-machine .board:before {
      left: -6%;
    }
    .arcade-machine .board:after {
      right: -6%;
    }
    .arcade-machine .board .button {
      height: 15%;
      width: 6%;
      position: absolute;
      top: 40%;
      left: 30%;
      border-radius: 50%;
      border: 5px solid #4c4c4c;
    }
    .arcade-machine .board .button-a {
      background: #BFD3C1;
      left: 40%;
    }
    .arcade-machine .board .button-b {
      background: #68A691;
      left: 55%;
    }
    .arcade-machine .board .button-c {
      background: #07BEB8;
      left: 70%;
    }
    .arcade-machine .bottom {
      height: 10%;
      width: 71%;
      position: absolute;
      top: 76%;
      left: 14.5%;
      background: white;
      border: 5px solid #4c4c4c;
    }
    .arcade-machine .bottom:before, .arcade-machine .bottom:after {
      height: 98%;
      width: 4%;
      position: absolute;
      top: -9%;
      background: white;
      content: ' ';
      border: 5px solid #4c4c4c;
      z-index: 2;
    }
    .arcade-machine .bottom:before {
      left: -5.8%;
    }
    .arcade-machine .bottom:after {
      right: -5.9%;
    }
    .alien-container {
      position: absolute;
      top: 20%;
      left: 35%;
      height: 30%;
      width: 30%;
      animation: bounce 0.8s infinite;
    }
    .alien .ear {
      position: absolute;
      top: 14%;
      height: 13%;
      width: 10%;
      background: #B4DEEC;
    }
    .alien .ear-left {
      left: 35%;
    }
    .alien .ear-right {
      right: 35%;
    }
    .alien .ear:before {
      position: absolute;
      top: -100%;
      height: 100%;
      width: 100%;
      background: #B4DEEC;
      content: '';
    }
    .alien .ear-left:before {
      left: -100%;
    }
    .alien .ear-right:before {
      right: -100%;
    }
    .alien .head-top {
      position: absolute;
      top: 26%;
      left: 20%;
      height: 15%;
      width: 60%;
      background: #B4DEEC;
    }
    .alien .head {
      position: absolute;
      top: 40%;
      left: 11.5%;
      height: 15%;
      width: 77%;
      background: #B4DEEC;
    }
    .alien .head .eye {
      position: absolute;
      top: -5%;
      height: 77%;
      width: 12%;
      background: #313332;
    }
    .alien .head .eye-left {
      left: 25%;
    }
    .alien .head .eye-right {
      right: 25%;
    }
    .alien .body {
      position: absolute;
      top: 54%;
      left: 10%;
      height: 20%;
      width: 80%;
      background: #B4DEEC;
    }
    .alien .body:before, .alien .body:after {
      height: 220%;
      width: 13%;
      background: #B4DEEC;
      position: absolute;
      content: '';
    }
    .alien .body:before {
      left: -10%;
    }
    .alien .body:after {
      right: -10%;
    }
    .alien .arm {
      position: absolute;
      top: 85%;
      height: 13%;
      width: 10%;
      background: #B4DEEC;
    }
    .alien .arm-left {
      left: 35%;
    }
    .alien .arm-right {
      right: 35%;
    }
    .alien .arm:before {
      position: absolute;
      top: -100%;
      height: 100%;
      width: 100%;
      background: #B4DEEC;
      content: '';
    }
    .alien .arm-left:before {
      left: -100%;
    }
    .alien .arm-right:before {
      right: -100%;
    }
        `}
      </style>
      <div class="container">
        <div class="arcade-machine">
          <div class="shadow"></div>
          <div class="top">
            <div class="stripes"></div>
          </div>
          <div class="screen-container">
            <div class="shadow"></div>
            <div class="screen">
              <img
                src="imgs/mario.gif"
                alt="Mario Running"
                class="small-image"
              />
            </div>
            <div class="joystick">
              <div class="stick"></div>
            </div>
          </div>
          <div class="board">
            <div class="button button-a"></div>
            <div class="button button-b"></div>
            <div class="button button-c"></div>
          </div>
          <div class="bottom">
            <div class="stripes"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
