const requestTypes = ['EVENT', 'SUCCESS', 'FAILURE'];

export function createRequestTypes(base) {
  return requestTypes.reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

