FND's ESLint configuration, JSX edition


Getting Started
---------------

* install this package:

        $ npm install --save-dev eslint-config-fnd-jsx

* create a file `.eslintrc` with the following contents:

        extends: fnd-jsx

  alternatively, use `package.json`:

        "eslintConfig": {
            "extends": "fnd-jsx"
        }

* run ESLint on your source files and directories:

        $ eslint --cache eslint --cache --ext .js --ext .jsx *.js *.jsx src

* optionally adopt this repository's [`.editorconfig`](http://editorconfig.org)
