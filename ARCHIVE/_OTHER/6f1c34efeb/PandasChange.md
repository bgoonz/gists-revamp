```python
# Python Change Pandas DataFrame Variables

import pandas as pd

data = [['hello', '1.222', '4', '5.22'], ['world', '66', '4', '6.33'], ['hello', '4.22', '0', '5.24']]
data = pd.DataFrame(data, columns = ['a', 'b', 'c', 'd'])
data
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>a</th>
      <th>b</th>
      <th>c</th>
      <th>d</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>hello</td>
      <td>1.222</td>
      <td>4</td>
      <td>5.22</td>
    </tr>
    <tr>
      <th>1</th>
      <td>world</td>
      <td>66</td>
      <td>4</td>
      <td>6.33</td>
    </tr>
    <tr>
      <th>2</th>
      <td>hello</td>
      <td>4.22</td>
      <td>0</td>
      <td>5.24</td>
    </tr>
  </tbody>
</table>
</div>

```python
data.dtypes
```

    a    object
    b    object
    c    object
    d    object
    dtype: object

```python
data.a[0] + " "  + data.a[1]
```

    'hello world'

```python
data[['b', 'd']] = data[['b', 'd']].astype(float)
data[['c']] = data[['c']].astype(int)
data[['a']] = data[['a']].astype(str) # Defaults to string
data
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>a</th>
      <th>b</th>
      <th>c</th>
      <th>d</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>hello</td>
      <td>1.222</td>
      <td>4</td>
      <td>5.22</td>
    </tr>
    <tr>
      <th>1</th>
      <td>world</td>
      <td>66.000</td>
      <td>4</td>
      <td>6.33</td>
    </tr>
    <tr>
      <th>2</th>
      <td>hello</td>
      <td>4.220</td>
      <td>0</td>
      <td>5.24</td>
    </tr>
  </tbody>
</table>
</div>

```python
data.dtypes
```

    a     object
    b    float64
    c      int32
    d    float64
    dtype: object

```python
data.a[0] + " "  + data.a[1]
```

    'hello world'

```python

```
