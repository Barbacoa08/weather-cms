import path from "path";
import { buildConfig } from "payload/config";

import { Posts } from "./collections/Posts";
import { Users } from "./collections/Users";

export default buildConfig({
  collections: [Users, Posts],
  globals: [
    // Your globals here
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "../payload-types.ts"),
  },
});
