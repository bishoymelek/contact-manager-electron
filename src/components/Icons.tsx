/* eslint-disable import/prefer-default-export */
import React from 'react';

export function PlusIcon() {
  return (
    <svg version="1.1" width="1rem" height="1rem" viewBox="0 0 459.325 459.325">
      <g>
        <path
          d="M459.319,229.668c0,22.201-17.992,40.193-40.205,40.193H269.85v149.271c0,22.207-17.998,40.199-40.196,40.193
		c-11.101,0-21.149-4.492-28.416-11.763c-7.276-7.281-11.774-17.324-11.769-28.419l-0.006-149.288H40.181
		c-11.094,0-21.134-4.492-28.416-11.774c-7.264-7.264-11.759-17.312-11.759-28.413C0,207.471,17.992,189.475,40.202,189.475h149.267
		V40.202C189.469,17.998,207.471,0,229.671,0c22.192,0.006,40.178,17.986,40.19,40.187v149.288h149.282
		C441.339,189.487,459.308,207.471,459.319,229.668z"
        />
      </g>
    </svg>
  );
}

export function TrashIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg width="20px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g id="close-icon" stroke="red" strokeWidth="5" strokeLinecap="round">
        <line x1="20" y1="20" x2="80" y2="80">
          <animate
            begin="startButton.click"
            attributeType="XML"
            attributeName="y1"
            from="20"
            to="50"
            dur="0.5s"
            repeatCount="1"
            fill="freeze"
          />
          <animate
            begin="startButton.click"
            attributeType="XML"
            attributeName="y2"
            from="80"
            to="50"
            dur="0.5s"
            repeatCount="1"
            fill="freeze"
          />
          <animate
            begin="startButton.click"
            attributeType="XML"
            attributeName="x1"
            from="20"
            to="10"
            dur="0.5s"
            repeatCount="1"
            fill="freeze"
          />
          <animate
            begin="startButton.click"
            attributeType="XML"
            attributeName="x2"
            from="80"
            to="90"
            dur="0.5s"
            repeatCount="1"
            fill="freeze"
          />
        </line>
        <line x1="20" y1="80" x2="80" y2="20">
          <animate
            begin="startButton.click"
            attributeType="XML"
            attributeName="y1"
            from="80"
            to="50"
            dur="0.5s"
            repeatCount="1"
            fill="freeze"
          />
          <animate
            begin="startButton.click"
            attributeType="XML"
            attributeName="y2"
            from="20"
            to="50"
            dur="0.5s"
            repeatCount="1"
            fill="freeze"
          />
          <animate
            begin="startButton.click"
            attributeType="XML"
            attributeName="x1"
            from="20"
            to="10"
            dur="0.5s"
            repeatCount="1"
            fill="freeze"
          />
          <animate
            begin="startButton.click"
            attributeType="XML"
            attributeName="x2"
            from="80"
            to="90"
            dur="0.5s"
            repeatCount="1"
            fill="freeze"
          />
        </line>
      </g>
      <rect
        id="startButton"
        x="0"
        y="0"
        width="20"
        height="20"
        fill="transparent"
      />
    </svg>
  );
}

export function LogoutIcon() {
  return (
    <svg
      id="logout"
      version="1.1"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 459.325 459.325"
    >
      <g>
        <g id="Sign_Out">
          <path
            d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03
			C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03
			C192.485,366.299,187.095,360.91,180.455,360.91z"
          />
          <path
            d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279
			c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179
			c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z"
          />
        </g>
      </g>
    </svg>
  );
}
