const { glob } = require("glob");
var path = require("path");
const { runTypeChain } = require("typechain");

const FRONTEND_TYPES_DIR = "../frontend/types";

const extraFiles = ["LinkTokenInterface.sol"];

async function main() {
  const cwd = process.cwd();
  const files = (await glob("./src/**/*.sol")).map((str) => path.basename(str));
  files.push(...extraFiles);
  const allFiles = files.map(
    (file) => "./out/" + file + "/" + file.replace(".sol", "") + ".json"
  );

  const result = await runTypeChain({
    cwd,
    filesToProcess: allFiles,
    allFiles,
    outDir: FRONTEND_TYPES_DIR,
    target: "ethers-v6",
  });
  console.log(result);
}

main();
