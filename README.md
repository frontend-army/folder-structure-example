# Folder Structure Example

This project is a rough example of how we usually like to structure folders in a Front-End application.
This example was created using React + Vite, but it can be extrapolated to other frameworks.

## General idea

The overall concept is that all files should be in the lowest possible folder where all its consumers can use it. For example, a global component such as `Button` will be in a `components` folder at the root of the project because it will be used across most components, whereas a component `UsersTable` will probably be only used in a `UsersPage` screen component, and so it will be located under the `UsersPage` component folder. 

Some key concepts:

- Global files/folders will be directly under `src` (e.g. `redux`, `constants`, generic components like Button, Input, etc.)
- Pages components will be under an `app` or `pages` folder inside `src`.
- Each component can have its utility files (helpers, styles, hooks, etc.)
- A sub-component only used as a child of parent component will be under its parent component's folder.
- If a component is used by two or more components, it will be placed in the lowest common parent folder for those components.

## Refactor

When the project gets bigger and more components and screens are created, the original idea of where components will be used can change. For example, the `UsersTable` mentioned before might be needed in a new page called `AdminUsers`, which is in the same level as the `UsersPage`. In that case, we can refactor and move the `UsersTable` component one level up the folder structure so it can be used by both pages.

## Note

All code and files are illustrative examples, this application is not intended to be run nor to work, it's just an example of how we like files and folders to be organized in a Front-End project.

## Feedback

We are open to feedback! Feel free to open an Issue.

Please, if you wish to help developing these or other open source tools let us know via our social media:

- [Twitter](twitter.com/frontend_army)
- [Discord](https://t.co/Y46bYpwExU)

### License

Copyright 2024 Frontend Army

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

