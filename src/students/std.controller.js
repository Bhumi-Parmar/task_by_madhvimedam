var express = require("express");
import stdstdServices from "../students/std.services";

const getData = (req, resp) => {
  resp.send({ students });
};
const postData = (req, resp) => {
  stdServices.postData(req.body, resp);
};
const putData = (req, resp) => {
  //console.log(req.params);
  const data = stdServices.putData(req.body, req.params);
  resp.json(data);
};
const delData = (req, resp) => {
  const data1 = stdServices.delData(req.params);
  resp.json(data1);
};

export default { postData, putData, delData, getData };
