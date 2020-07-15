import React from "react";
import { foodPantry, mealProgram, closed } from "../theme/colors";

const MapMarker = (category, inactive, onClick = null) => {
  if (category === -1)
    return (
      <svg
        width="38px"
        height="54px"
        viewBox="0 0 30 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClick}
        transform={onClick ? "translate(-20,-20)" : null}
      >
        <g>
          <path
            d="M15.0005 39.8626C19.7997 34.5676 28.5612 22.5925 29.925 15.856C30.1351 13.8533 29.9053 11.8299 29.251 9.91747C28.5968 8.00505 27.5324 6.24525 26.1264 4.75134C24.7204 3.2578 23.004 2.06318 21.0877 1.24474C19.1713 0.426302 17.0979 0.0025994 15.0005 0V6.36445V20.6983V39.8626Z"
            fill={inactive ? closed : foodPantry}
          />
          <path
            d="M15 39.8626C10.2008 34.5676 1.43929 22.5925 0.0754433 15.856C-0.13426 13.8533 0.0951757 11.8303 0.749435 9.91747C1.4037 8.00505 2.46808 6.24525 3.8741 4.75134C5.28012 3.2578 6.99644 2.06318 8.91279 1.24474C10.8291 0.426302 12.9026 0.0025994 15 0V6.36445V20.6983V39.8626Z"
            fill={inactive ? closed : mealProgram}
          />
          <path
            d="M21.481 18.5746C21.2361 18.847 20.758 19 20.3472 19C18.9348 19 17 16.4935 17 14.2606C17 12.0276 17.9192 10.4443 19.3316 10.4443C20.0978 10.4443 20.716 10.5373 21.0461 10.9291L21.0399 10.9044C21.0399 10.9044 20.7849 9.81317 20.3679 9.58393C20.5983 9.46062 21.0248 9.11481 21.0248 9.11481C21.0248 9.11481 21.6817 10.0088 21.6817 10.9055V10.9291C22.1671 10.5014 22.7472 10.2369 23.6299 10.2369C25.0423 10.2369 25.9621 12.0276 25.9621 14.2606C25.9621 16.4935 23.9584 19 22.546 19C22.1318 19 21.7271 18.852 21.481 18.5746Z"
            fill="white"
          />
          <path
            d="M23.2435 9.44212C22.8668 10.0637 22.039 10.2503 22.039 10.2503C22.039 10.2503 21.8216 9.42979 22.1982 8.80877C22.5748 8.18776 23.4021 8 23.4021 8C23.4021 8 23.6196 8.82054 23.2435 9.44212Z"
            fill="white"
          />
          <path
            d="M11.4554 7C11.911 7 12 7.55618 12 7.55618C12 8.80566 12 10.5598 12 11.8246C12 13.4394 10.3673 14.7591 10.3673 14.7591V19.96C10.3673 19.96 10.3534 21 9.27175 21C8.1901 21 9.77238 21 8.72182 21C7.67125 21 7.65196 19.96 7.65196 19.96V14.7591C7.65196 14.7591 6 13.4503 6 11.8301V7.53204C6 7.53204 6.01286 7 6.54458 7C7.07629 7 7.08487 7.01865 7.08487 7.53204C7.08487 8.04544 7.10202 11.2926 7.10202 11.2926C7.10202 11.2926 7.13954 11.7884 7.38717 11.7884C7.6348 11.7884 7.61551 11.2926 7.61551 11.2926C7.61551 11.2926 7.61551 8.06409 7.61551 7.53204C7.61551 7 7.62194 7 8.16652 7C8.7111 7 8.73575 7.01865 8.73575 7.53204C8.73575 8.04544 8.73575 11.3474 8.73575 11.3474C8.73575 11.3474 8.75505 11.8246 9.00161 11.8246C9.24817 11.8246 9.27282 11.3112 9.27282 11.3112C9.27282 11.3112 9.27282 8.03995 9.27282 7.51998C9.27282 7 9.36823 7 9.86243 7C10.3566 7 10.3877 7.03072 10.3877 7.50791C10.3877 7.9851 10.3877 11.2476 10.3877 11.2476C10.3877 11.2476 10.3684 11.8432 10.6343 11.8432C10.9098 11.8432 10.9259 11.2805 10.9259 11.2805C10.9259 11.2805 10.9301 8.08822 10.9301 7.54411C10.9301 7 10.9998 7 11.4554 7Z"
            fill="white"
          />
        </g>
      </svg>
    );

  if (category === 0)
    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="38px"
        height="54px"
        x="0px"
        y="0px"
        viewBox="0 0 30 40"
        xmlSpace="preserve"
        onClick={onClick}
        transform={onClick ? "translate(-20,-20)" : null}
      >
        <path
          class="st0"
          d="M0,14.44C0,22.41,15,40,15,40s15-17.59,15-25.56C30,6.46,23.28,0,15,0C6.72,0,0,6.46,0,14.44z"
          fill={inactive ? closed : foodPantry}
        />
        <path
          class="st1"
          d="M14.93,23.34C14.55,23.76,13.81,24,13.17,24C10.99,24,8,20.13,8,16.68c0-3.45,1.42-5.9,3.6-5.9
	c1.18,0,2.14,0.14,2.65,0.75l-0.01-0.04c0,0-0.39-1.69-1.04-2.04c0.36-0.19,1.02-0.73,1.02-0.73s1.02,1.38,1.02,2.77v0.04
	c0.75-0.66,1.65-1.07,3.01-1.07c2.18,0,3.6,2.77,3.6,6.22c0,3.45-3.1,7.32-5.28,7.32C15.93,24,15.31,23.77,14.93,23.34z"
          fill="white"
        />
        <path
          class="st1"
          d="M15.79,10.48c0,0,1.28-0.29,1.86-1.25C18.23,8.27,17.89,7,17.89,7s-1.28,0.29-1.86,1.25
	C15.45,9.21,15.79,10.48,15.79,10.48z"
          fill="white"
        />
      </svg>
    );

  if (category === 1)
    return (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="38px"
        height="54px"
        x="0px"
        y="0px"
        viewBox="0 0 30 40"
        xmlSpace="preserve"
        onClick={onClick}
        transform={onClick ? "translate(-20,-20)" : null}
      >
        <path
          class="st0"
          d="M15,40c0,0-15-17.59-15-25.56C0,6.46,6.72,0,15,0c8.28,0,15,6.46,15,14.44C30,22.41,15,40,15,40z"
          fill={inactive ? closed : mealProgram}
        />
        <path
          class="st1"
          d="M19,6.79c0,0-0.12-0.79-0.73-0.79c-0.61,0-0.7,0-0.7,0.78s-0.01,5.33-0.01,5.33s-0.02,0.8-0.39,0.8
 c-0.35,0-0.33-0.85-0.33-0.85V6.73c0-0.68-0.04-0.73-0.7-0.73c-0.66,0-0.79,0-0.79,0.74v5.41c0,0-0.03,0.73-0.36,0.73
 c-0.33,0-0.35-0.68-0.35-0.68V6.76c0-0.73-0.03-0.76-0.76-0.76c-0.73,0-0.73,0-0.73,0.76v5.37c0,0,0.03,0.71-0.3,0.71
 c-0.33,0-0.38-0.71-0.38-0.71s-0.02-4.64-0.02-5.37c0-0.73-0.01-0.76-0.72-0.76C11.02,6,11,6.76,11,6.76v6.74
 c0,2.31,2.2,3.58,2.2,3.58v7.42c0,0,0.03,1.48,1.43,1.48h0.73c1.44,0,1.46-1.48,1.46-1.48v-7.42c0,0,2.18-1.28,2.18-3.58V6.79z"
          fill="white"
        />
      </svg>
    );
};

export default MapMarker;
