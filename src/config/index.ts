// eslint-disable-next-line import/no-anonymous-default-export
const url = process.env.REACT_APP_BACKEND_URL;

export default {
  url: url,
  prodUrl: "http://192.168.199.85:3001/",
  slugProcess: "process/",
  slugVideo: "videos/",
  slugPop: "docs/",
  slugImages: "images/",
  slugAdmin: "admin/",
  slugArchive: "archive/",
  slugSuper: "super/",
  slugSector: "sector/",
} as const;
