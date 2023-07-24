import React from "react";

const Button = ({
  styles,
  padding,
  fontSize,
  fontWeight,
  content,
  furtherClasses,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      style={{ borderWidth: 1.5, borderRadius: 4, ...styles }}
      className={`bg-red-500 border-2 border-red-500 ${padding}  ${fontSize} ${fontWeight} ${furtherClasses}   duration-300 text-white hover:bg-white hover:text-red-500 transition-all`}
    >
      {content}
    </button>
  );
};

export default Button;
