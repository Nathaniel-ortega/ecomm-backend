export default ({ env }: { env: any }) => {
  const useCloudinary =
    env('CLOUDINARY_NAME') && env('CLOUDINARY_KEY') && env('CLOUDINARY_SECRET');

  const folder = env('CLOUDINARY_FOLDER', 'shopease');

  return {
    upload: {
      config: {
        sizeLimit: 5 * 1024 * 1024,
        ...(useCloudinary
          ? {
              provider: 'cloudinary',
              providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
              },
              actionOptions: {
                upload: { folder },
                uploadStream: { folder },
                delete: {},
              },
            }
          : {}),
      },
    },
  };
};