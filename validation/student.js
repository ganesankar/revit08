const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateStudent(data) {
  let errors = {};

  data.studentname = !isEmpty(data.studentname) ? data.studentname : "";
  data.anniversary = !isEmpty(data.anniversary) ? data.anniversary : "";
  data.dob = !isEmpty(data.dob) ? data.dob : "";
  data.emailid = !isEmpty(data.emailid) ? data.emailid : "";
  data.flagimg = !isEmpty(data.flagimg) ? data.flagimg : "";
  data.emailid = !isEmpty(data.emailid) ? data.emailid : "";
  data.location = !isEmpty(data.location) ? data.location : "";
  data.native = !isEmpty(data.native) ? data.native : "";
  data.nickname = !isEmpty(data.nickname) ? data.nickname : "";
  data.social = !isEmpty(data.social) ? data.social : [];
  data.sprno = !isEmpty(data.sprno) ? data.sprno : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.url = !isEmpty(data.url) ? data.url : "";
  data.work = !isEmpty(data.work) ? data.work : "";
  data.title = !isEmpty(data.title) ? data.title : "";
  data.phoneno = !isEmpty(data.phoneno) ? data.phoneno : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.rollno = !isEmpty(data.rollno) ? data.rollno : "";

  if (Validator.isEmpty(data.studentname)) {
    errors.studentname = "Student Name is required";
  }

  if (!Validator.isLength(data.studentname, { min: 2, max: 30 })) {
    errors.studentname = "Student Name must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.sprno)) {
    errors.sprno = "SPR No is required";
  }
  if (Validator.isEmpty(data.rollno)) {
    errors.rollno = "Roll No is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
