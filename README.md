# Overview
Implementation of custom ESLint rules.

## Plugin `no-underscore`
Plugin contains a single rule that does not allow underscores in a variable name.

## Plugin `no-nesting`
Plugin contains a single rule that allows nesting of `if` statements to a specific level, configured within a project, in ESLint configuration file (`eslint.config.js`).

## How To Test

Start with installing dependencies:
```
npm install
```

To test custom rules, open Visual Studio Code and make sure that you have ESLint extension installed. Navigate to the file `src/main.js`. Visual Studio Code should automatically report issues: a warning for an invalid variable name and an error for a nested `if` statement.

The implementation is not production-ready! It should be used as a playground and a boilerplate for learning.

AST Explorer (https://astexplorer.net/) is a great online asset that developers need for exploring Abstract Syntax Trees.

## Notes
- Make sure that you restart ESLint Server, from the Visual Studio Code, after adding new custom rules or improving existing custom rules. You can restart ESLint Server with: `View` -> `Command Palette` -> `Restart ESLint Server`. While in most cases restarting ESLint Server is sufficient, sometimes Visual Studio Code needs to be restarted to get the things working.
- In case a custom rule is not working as expected, the first thing to check is an output from ESLint. Open terminal in Visual Studio Code and go to `OUTPUT` tab. Then choose ESLint from the dropdown list. Apart from providing errors, this output also provides information when a rule is not configured according to rule's schema.
- Regardless of whether you are using Visual Studio Code, you can always use ESLint CLI to check for ESLint reports. Open terminal and navigate to the project's root directory. Then execute: `npx eslint`.