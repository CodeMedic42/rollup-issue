How to reproduce the issue

1. Execute "npm install pnpm -g"
2. Execute "pnpm install"
3. Execute "cd projects/project-a"
4. Execute "pnpm run build"

There is a typescript error in project-b. However I am getting a typescript error from project-b. Either Rollup or Typescript are reading information from project-b even though it is a dependency. My only conclusion is because of the monorpo and pnpm workspace.