import * as fs from "fs";
import * as glob from "glob";

const versions = fs.readdirSync("api");
for(const version of versions)
{
	const files = glob.sync(`api/${version}/**/*.d.ts`);
	let fileContent = "";
	for(const file of files)
	{
		fileContent += `\n/// <reference path="./${file}" />`;
	}

	fs.writeFileSync(`${version}.d.ts`, fileContent);
}