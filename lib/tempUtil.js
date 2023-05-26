const axios = require('axios');
const dotenv = require('dotenv');
const logger = require('./logger');
dotenv.config();

const apiConfig = {
  url: process.env.API_URL,
  key: process.env.API_KEY,
  today() {
    const now = new Date(); // 현재 시간
    const utcNow = now.getTime() + now.getTimezoneOffset() * 60 * 1000; // 현재 시간을 utc로 변환한 밀리세컨드값
    const koreaTimeDiff = 9 * 60 * 60 * 1000; // 한국 시간은 UTC보다 9시간 빠름(9시간의 밀리세컨드 표현)
    const koreaNow = new Date(utcNow + koreaTimeDiff); // utc로 변환된 값을 한국 시간으로 변환시키기 위해 9시간(밀리세컨드)를 더함
    const year = koreaNow.getFullYear().toString();
    const month = (koreaNow.getMonth() + 1).toString();
    const day = koreaNow.getDate().toString();
    return `${year}${month.length < 2 ? '0' + month : month}${
      day.length < 2 ? '0' + day : day
    }`;
  },
};

const getData = async () => {
  let response = null;
  let result = null;
  try {
    response = await axios({
      method: 'get',
      url: `${apiConfig.url}/${
        apiConfig.key
      }/json/WPOSInformationTime/1/5/${apiConfig.today()}`,
    });

    console.log(response.data.WPOSInformationTime.row);
    result = response?.data.WPOSInformationTime.row;
  } catch (error) {
    logger.error(error);
  }

  return result;
};

module.exports = getData;
