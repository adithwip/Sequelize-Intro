"use strict"

module.exports = (data) => {

  for (let i = 0; i < data.length; i++) {

    if (data[i].score > 85) {
      data[i].score_letter = 'A';
    } else if (data[i].score > 70) {
      data[i].score_letter = 'B';
    } else if (data[i].score > 55) {
      data[i].score_letter = 'C';
    } else if (data[i].score > 0 && data[i].score <= 55) {
      data[i].score_letter = 'E';
    } else if (data[i].score === null) {
      data[i].score_letter = 'Empty';
    }
  }

  return data;
};
