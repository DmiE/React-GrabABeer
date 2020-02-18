export const collectDocs = {};

export const apiCall = async query => {
  const querySnapshot = await query.get();
  const fetchedData = querySnapshot.docs.map(doc => {
    return doc.data();
  });
  return fetchedData;
};
