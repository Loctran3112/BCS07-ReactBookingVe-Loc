export const datGheAction = (ghe) => {
  return {
    type: "DAT_GHE",
    ghe: ghe,
  };
};

export const huyGheAction = (soGhe) => {
  return {
    type: "HUY_GHE",
    soGhe: soGhe,
  };
};
