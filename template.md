### 递归模板

```python
def recursion(level, param1, param2, ...) {
    # recursion terminator
    if level > MAX_LEVEL:
        print_result
        return
    # process logic in current level
    process_data(level, data...)

    # drill down
    self.recursion(level+1, p1, ...)

    # reverse the current level status if needed
    reverse_state(level)
}
```

### 分治模板

```python
def divide_conquer(problem, param1, param2, ...) {
    # recursion terminator
    if problem is None
        print_result
        return

    # prepare data
    data = prepare_data(problem)
    subproblems = split_problem(problem, data)

    # conquer subproblems
    subresult1 = self.divide_conquer(subproblems[0], p1, ...)
    subresult2 = self.divide_conquer(subproblems[1], p1, ...)
    subresult3 = self.divide_conquer(subproblems[2], p1, ...)
    ...

    # process and generate the final result
    result = process_result(subresult1, subresult2, subresult3, ...)
}
```

### BFS

```python
def BFS(graph, start, end)
    queue = []
    queue.append([start]) # js queue.push()
    visited.add(start)

    while queue:
        node = queue.pop()  # js queue.shift()
        visited.add(node)

        process(node)
        nodes = generate_related_nodes(node)
        queue.push(nodes)
    # other processing work
```

### DFS

```python
# 递归写法
visited = set()
def dfs(node, visited)
    visited.add(node)
    # process current node here
    ...
    for next_node in node.children():
        if not next_node in visited
            DFS(next_node, visited)
```

```python
# 非递归写法
visited = set()
def dfs(self, tree)
    if tree.root is None:
        return []

    visited, stack = [], [tree.root]
    while stack:
        node = stack.pop()
        visited.add(node)

        process(node)
        nodes = generate_related_nodes(node)
        stack.push(nodes)
    # other process work
```

### 二分查找

- Sorted（单调递增或递减）
- Bounded（存在上下界）
- Accessible by index（能有通过索引访问）
- 适用数组

```python
left = 0
right = len(arr) - 1
while left <= right
    mid = (left + right) / 2
    if array[mid] == target
        # find the target
        break or return result
    elif  array[mid] < target
        left = mid + 1
    elif:
        right = mid - 1
```
