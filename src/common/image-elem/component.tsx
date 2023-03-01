import React from 'react';


const Component: React.FC<{
  src: any;
  width?: number;
  height?: number;
  alt?: string;
}> = ({src, width, height, alt}) => {
  return (
    <img src={src} alt={alt} width={width} height={height}/>
  );
};

export default Component;