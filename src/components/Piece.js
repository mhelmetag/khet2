import React from "react";
import {
  ANUBIS,
  PHARAOH,
  PLAYER_ONE,
  PYRAMID,
  SCARAB,
  TYPES,
} from "../constants";

export const Anubis = (angle, color = "#000000") => {
  return (
    <svg
      height="100%"
      strokeMiterlimit="10"
      style={{
        fillRule: "nonzero",
        clipRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        rotate: angle + "deg",
      }}
      version="1.1"
      viewBox="0 0 400 400"
      width="100%"
    >
      <g>
        <path
          d="M20 20L380 20L380 380L20 380L20 20Z"
          fill="none"
          opacity="1"
          stroke={color}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="4"
        />
        <path
          d="M56 56L200 114.13L344 56L344 200L200 344L56 200L56 56Z"
          fill={color}
          fillRule="nonzero"
          opacity="1"
          stroke="none"
        />
      </g>
    </svg>
  );
};

export const Scarab = (angle, color = "#000000") => {
  return (
    <svg
      height="100%"
      strokeMiterlimit="10"
      style={{
        fillRule: "nonzero",
        clipRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        rotate: angle + "deg",
      }}
      version="1.1"
      viewBox="0 0 400 400"
      width="100%"
    >
      <g>
        <path
          d="M20 20L380 20L380 380L20 380L20 20Z"
          fill="none"
          opacity="1"
          stroke={color}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="4"
        />
        <path
          d="M128 56L344 272L344 272L344 344L344 344L272 344L272 344L56 128L56 128L56 56L56 56L128 56"
          fill={color}
          fillRule="nonzero"
          opacity="1"
          stroke="none"
        />
      </g>
    </svg>
  );
};

export const Pharaoh = (_angle, color = "#000000") => {
  return (
    <svg
      height="100%"
      strokeMiterlimit="10"
      style={{
        fillRule: "nonzero",
        clipRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
      version="1.1"
      viewBox="0 0 400 400"
      width="100%"
    >
      <g>
        <path
          d="M20 20L380 20L380 380L20 380L20 20Z"
          fill="none"
          opacity="1"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <path
          d="M200 344L98.1766 301.823L56 200L98.1766 98.1766L200 56L301.823 98.1766L344 200L301.823 301.823L200 344Z"
          fill={color}
          fillRule="nonzero"
          opacity="1"
          stroke="none"
        />
      </g>
    </svg>
  );
};

export const Pyramid = (angle, color = "#000000") => {
  return (
    <svg
      height="100%"
      strokeMiterlimit="10"
      style={{
        fillRule: "nonzero",
        clipRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        rotate: angle + "deg",
      }}
      version="1.1"
      viewBox="0 0 400 400"
      width="100%"
    >
      <g>
        <path
          d="M20 20L380 20L380 380L20 380L20 20Z"
          fill="none"
          opacity="1"
          stroke={color}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="4"
        />
        <path
          d="M344 344.004L56 344L56 344L56 56L56.8362 55.8406L344.836 343.841"
          fill={color}
          fillRule="nonzero"
          opacity="1"
          stroke="none"
        />
      </g>
    </svg>
  );
};

export const PieceGenerator = (pieceBoss) => {
  let color = pieceBoss.player === PLAYER_ONE ? "#6C3483" : "#D4AC0D";

  switch (pieceBoss.type) {
    case ANUBIS:
      return new Anubis(pieceBoss.angle, color);
    case SCARAB:
      return new Scarab(pieceBoss.angle, color);
    case PHARAOH:
      return new Pharaoh(pieceBoss.angle, color);
    case PYRAMID:
      return new Pyramid(pieceBoss.angle, color);
    default:
      throw new TypeError(
        `${pieceBoss.type} is an invalid type (one of ${TYPES.join(", ")})`
      );
  }
};
