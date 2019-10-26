export const updateFieldsErrors = (errorsFromServer, antdFormInstance) => {
  if (!errorsFromServer) return;
  console.log(antdFormInstance);
  const res = {};

  // *** sculpt 'res' obj to match the arg of antd's .setFields() method
  Object.keys(errorsFromServer).forEach(key => {
    const errorsMessage = [];

    res[key] = {};

    errorsFromServer[key].forEach(errorDetail => {
      errorsMessage.push(new Error(errorDetail));
    });

    res[key].value = antdFormInstance.getFieldValue(key);
    res[key].errors = errorsMessage;
  });

  antdFormInstance.setFields(res);
};
