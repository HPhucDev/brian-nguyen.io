import { styled } from '@mui/material/styles';
import Image, { ImageProps as NextImageProps, StaticImageData } from 'next/image';
import { useState } from 'react';
import { theme } from 'theme';

const fallback = '/old-images/img_fallback.png';
export interface ImageProps extends Omit<NextImageProps, 'src' | 'alt'> {
  alt: string;
  src?: string | StaticImageData;
  isCircle?: boolean;
}

const TRANSITION_DURATION = '.3s';

const StyledImage = styled(Image, {
  shouldForwardProp: (prop) => prop !== '$isReady',
})<{ $isReady: boolean; $isCircle: boolean }>(({ $isReady, $isCircle }) => ({
  opacity: $isReady ? 1 : 0,
  filter: `blur(${!$isReady ? 10 : 0}px)`,
  transition: `opacity ${TRANSITION_DURATION} ease-in-out, filter ${TRANSITION_DURATION} ease-in-out`,
  borderRadius: $isCircle ? theme.spacing(100) : theme.spacing(0),
}));

const CustomImage = ({ src = fallback, alt, isCircle = false, ...rest }: ImageProps) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const srcOrFallback = imageError ? fallback : src;

  const handleImageLoadError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  return (
    <StyledImage
      src={srcOrFallback}
      alt={alt}
      onError={handleImageLoadError}
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          handleImageLoadError();
        }
        setImageLoaded(true);
      }}
      placeholder={typeof src === 'object' && src.blurDataURL ? 'blur' : undefined}
      $isReady={imageLoaded}
      $isCircle={isCircle}
      {...rest}
    />
  );
};

export default CustomImage;
