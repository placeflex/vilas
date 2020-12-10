import $ from 'jquery';

const getData = async (url) => {
  let getData = await $.ajax(url);
  return await getData;
};

export default getData;
