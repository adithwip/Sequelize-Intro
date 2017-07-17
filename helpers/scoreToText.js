"use strict"

module.exports = (data) => {

  // console.log(data.score);

  // let nilaiText = [];

  for (let i = 0; i < data.length; i++) {
    // console.log(data[i].dataValues.score);
    if (data[i].score > 85) {
      // nilaiText.push('A');
      data[i].score_letter = 'A';
    } else if (data[i].score > 70) {
      // nilaiText.push('B');
      data[i].score_letter = 'B';
    } else if (data[i].score > 55) {
      // nilaiText.push('C');
      data[i].score_letter = 'C';
    } else if (data[i].score > 0 && data[i].score <= 55) {
      // nilaiText.push('E');
      data[i].score_letter = 'E';
    } else if (data[i].score === null) {
      // nilaiText.push('F');
      data[i].score_letter = 'Empty';
    }
  }

  // console.log(nilaiText);
  // return nilaiText;

  // console.log(data);
  return data;


};
