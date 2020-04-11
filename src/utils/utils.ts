export const realmObjectsToJson = (objects: any) => {
  const data = JSON.stringify(Array.from(objects));
  return JSON.parse(data);
};
