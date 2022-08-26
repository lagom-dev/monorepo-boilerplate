# monorepo-boilerplate

<h1 align="center">Front-end monorepo frontend boilerplate with lerna, storybook and CRA.</h1>


## 🚀 Quick start

In the root folder run following commands :

Install all dependecies with:

```bash
  yarn bootstrap
```
Lerna will install all dependencies. 
Once installation is finished you can:

Run the react application (app-cra) :

```bash
  yarn app-cra
```

Run storybook [ :

```bash
  yarn storybook
```

## 🗂 Monorepo structure
√
| Package                                               | Description                                                                            |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [`@monorepo/theme`](./packages/theme) | Design tokens (colors, typography, attributes...)                                      |
| [`@monorepo/utils](./packages/utils)                    | Utility functions |
| [`@monorepo/ui-components`](./packages/ui-components) | Components lib with stories                 |

