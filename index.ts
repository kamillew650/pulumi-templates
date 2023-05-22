import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

const sssParameter = new aws.ssm.Parameter("my-ssm-parameter", {
  type: "SecureString",
  value: "my-ssm-parameter-value",
});

const devAppPath = "dev-app";

const appParam1 = new aws.ssm.Parameter("dev-app-login", {
  name: `/${devAppPath}/LOGIN`,
  type: "String",
  value: `login`,
});

const appParam2 = new aws.ssm.Parameter("dev-app-password", {
  name: `/${devAppPath}/PASSWORD`,
  type: "SecureString",
  value: `password`,
});
