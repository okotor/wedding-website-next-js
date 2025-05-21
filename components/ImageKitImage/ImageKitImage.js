import { IKContext, IKImage } from "imagekitio-react";

const ImageKitImage = ({
  path,
  alt = "",
  width,
  height,
  transformation = [],
  className = "",
  loading = "lazy",
}) => {
  return (
    <IKContext
      publicKey={process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY}
      urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
      authenticationEndpoint="/api/imagekit-auth"
      transformationPosition="path"
    >
      <IKImage
        path={path}
        alt={alt}
        className={className}
        loading={loading}
        transformation={
          transformation.length
            ? transformation
            : width && height
            ? [{ width, height }]
            : []
        }
      />
    </IKContext>
  );
};

export default ImageKitImage;

  