# 这是一个测试包

## 使用`workflow_run`

当监听的工作流执行完成,再进行执行当前工作流

```yml
on:
  workflow_run:
    workflows: ["test2"]
    types:
      - completed

jobs:
  preview:
    runs-on: ubuntu-latest
    if: >
      github.event.workflow_run.conclusion == 'success'
    steps:
      - name: checkout
        uses: actions/checkout@v3

      - run: echo 1
      - run: ls -a 

```
