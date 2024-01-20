import styled from "styled-components"

export default function Image({ 
  src,
  $width,
  $maxWidth,
  $height,
  $maxHeight,
  alt = "Image",
  srcSmall = src 
}) {
  return (
    <picture>
      <source 
        srcSet={srcSmall} 
        media="(min-width: 320px) and (max-width: 480px)" 
      />
      <StyledImage
        src={src}
        $width={$width}
        $maxWidth={$maxWidth}
        $height={$height}
        $maxHeight={$maxHeight}
        alt={alt}
        loading="lazy"
      />
    </picture>
  )
}

const StyledImage = styled.img`
  display: flex;
  ${'' /* object-fit: contain; */}
  width: ${props => props.$width};
  max-width: ${props => props.$maxWidth || "100%"};
  height: ${props => props.$height || "auto"};
  max-height: ${props => props.$maxHeight || "100dvh"};
`