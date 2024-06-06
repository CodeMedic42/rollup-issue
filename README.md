How to reproduce the issue

1. Execute "npm install pnpm -g" only if you do not already have pnpm installed
2. Execute "pnpm install"
3. Execute "cd projects/project-b"
4. Execute "pnpm run build"
5. Execute "cd ../project-a"
6. Execute "pnpm run build"

I am getting a typescript error from project-b even though it is a dependency. Either Rollup or Typescript are reading information from project-b even though it is a dependency. My only conclusion is because of the monorpo and pnpm workspace. I would like to not get typescript issues from dependencies, even ones from within the monorepo.