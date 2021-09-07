# The Wronskian


## How to calculate

$$
W(f, g)=\begin{vmatrix}f(t) && g(t) \\ f'(t) && g'(t)\end{vmatrix}= f(t)g'(t) - g(t)f'(t)
$$

## Linear Independence

If $W(f, g)(x_0) \ne 0$  for some $x_0$, then $f(x)$ and $g(x)$ are linearly independent. If $W(f, g)(x_0)=0$ for some $x_0$, then $f(x)$ and $g(x)$​ are linearly dependent.

For a differential equation, $y_1$ and $y_2$ must be linearly independent in order to be solutions to the DE 

### Example

**Problem**: Determine if the following functions are linearly independent or dependent: $f(t)=2t^2$​ and $g(t)=t^4$​​

**Solution**: Use the Wronskian to determine linear independence
$$
W(f, g)=\begin{vmatrix}
2t^2 && t^4 \\ 4t && 4t^3
\end{vmatrix}
= 8t^5 - 4t^5=4t^5
$$
As long as $t \ne 0$, then $f(t)$ and $g(t)$ are linearly independent.

## Code

We use sympy for this, since we are dealing with symbolic mathematics.

```python
import sympy
from sympy import *
x, y, z, t = symbols('x y z t')
```

Function to calculate wronskian below:

```python
def wronskian(f, g):
  fp = diff(f, t)
  gp = diff(g, t)
  wronskianm = Matrix([[f, g], [fp, gp]])
  return wronskianm.det()
```

Testing the function on the example we solved above.

```python
f = 2*t**2
g = t**4
wronskian(f, g)
```

```
[OUTPUT]
4*t**5
```

`4*t**5` is equivalent to $4t^5$.

## Read More

Wikipedia [Article](https://en.wikipedia.org/wiki/Wronskian)


