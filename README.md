# storyboards

**this project is under heavy development**

## Differences with story book

-   No addons, if you want more features open a pull request here, we want a cohesive and coherent code base
-   Many features inherited from next.js like
    -   Zero config typescript, babel, css support
    -   Incremental compilation
    -   React Fast refresh
    -   Awesome Nextjs plugins like `next-transpile-modules`, `next-images` and more
    -   SSR

### Features missing from story book (in progress)

-   Viewport sizing
-   Display source code

### Addons that won't be implemented

-   Actions
-   Knobs
-   Docs
-   Console
-   Links
-   Props

## Unique features (in progress)

-   --CSS debug (injects border to every div, to see all components outlines)--
-   --Open in Vscode (via url with `vscode://file`)--
-   --see render counts and time--
-   view in Full screen

## Things to do

-   better multi columns support
-   fix the path functions that rely on unix paths
-   remove as much logic as possible from the .storyboards folder, move it to storyboards package
-   move UI components to `storyboards-ui` package
-   when generating the .storyboards add a version file with the current version
-   remove the new command, the default command check if a storyboards.config.js exists, if not asks if user wants to create .storyboards and config (or errors if not tty)
-   the start command keeps the .storyboards updated running the new command when it sees that its version is greater than the generated one
-   make a Vercel deployer package that points to a `storybaords.config.js`, this wraps the nextjs deployer but runs the new command before and optionally another command to build packages it depends on (like run yarn on root), this way i can add .storyboards to .gitignore
-   the profiler does not run on hydration, maybe disable it when in production
-   support for multiple globs paths adding more context.require (up to 10)
-   add emotion to aliases
-   add a button to make a block full screen
-   remove render counts and time on small blocks
-   how to pass a custom tsconfig, babel? maybe add a babelPath and tsconfigPath and copy these on the storybaords new and start command

