export const isRequired = (val) => ({
  hasPassed: !!val,
  message: "Пожалуйста заполните это поле",
});

export const charLimit = (limit) => (val) => {
  return {
    hasPassed: val.toString().length <= limit,
    message: "Вы превысели лимит",
  };
};
