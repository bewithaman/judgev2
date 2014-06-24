// Tests if codejudge successfully compiles and runs a java program
// that does not require any user input.

function runTest() {
  lib.sendToMaster('HelloJava');
}

function checkResponse(data) {
  if (data.trim() === "1")
    lib.success("testJava.js");
  else
    lib.fail("testJava.js: Expected 1 but received " + data);
}

module.exports.runTest = runTest;
module.exports.checkResponse = checkResponse;