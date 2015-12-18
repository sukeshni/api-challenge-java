"use strict";
var
  assert = require("chai").assert,
  spec = require("api-first-spec");

var API = spec.define({
  "endpoint": "/challenge",
  "method": "GET",
  "request": {
    "contentType": spec.ContentType.URLENCODED,
  },
  "response": {
    "contentType": spec.ContentType.JSON,
    "data": {
      "id": "int",
      "content": "string"
    }
  }
});

describe("test-api-first-spec", function() {
  var host = spec.host("localhost:8080");

  it("Testing", function(done) {
    host.api(API).success(function(data) {
      console.log(data);
      assert.equal(data.content, "Hello, Challenge!");
      done();
    });
  });
});

module.exports = API;