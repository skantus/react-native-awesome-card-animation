export const PHOTO_DETAIL_SCHEMA = 'PhotoDetail';
const PHOTO_DETAIL_DB_NAME = 'PhotoDetailRealm.realm';

const DATA_BASE_VERSION = 0;

type PhotoDetailSchema = {
  name: string;
  primaryKey: string;
  properties: {
    title: string;
    thumbnailUrl: string;
  };
};

const PhotoDetailSchema: PhotoDetailSchema = {
  name: PHOTO_DETAIL_SCHEMA,
  primaryKey: 'title',
  properties: {
    title: 'string',
    thumbnailUrl: 'string',
  },
};

type PhotoDetailOptions = {
  path: string;
  schema: PhotoDetailSchema[];
  schemaVersion: number;
};

export const photoDetailOptions: PhotoDetailOptions = {
  path: PHOTO_DETAIL_DB_NAME,
  schema: [PhotoDetailSchema],
  schemaVersion: DATA_BASE_VERSION,
};
