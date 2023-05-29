import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

const sssParameter = new aws.ssm.Parameter("my-ssm-parameter", {
  name: "my-test-parameter",
  type: "String",
  value: "to-jest-test",
});

const devAppPath = "dev-my-app";

const appParam1 = new aws.ssm.Parameter("dev-app-login", {
  name: `/${devAppPath}/LOGIN`,
  type: "String",
  value: `login`,
});

const appParam2 = new aws.ssm.Parameter("dev-app-password", {
  name: `/${devAppPath}/PASSWORD`,
  type: "SecureString",
  value: `password`,
  keyId: "569aa8e4-21b9-4357-a591-cdb145680a79",
});
