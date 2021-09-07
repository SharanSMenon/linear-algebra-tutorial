# More on Matrices

The determinant is an operation that reduces a matrix to a scalar. 

> The matrix must be square in order for it to have a determinant

For a $2 \cross 2$​​ matrix, the determinant can be defined as
$$
\begin{vmatrix} a & b \\ c & d\end{vmatrix}=ad-bc
$$
For a $3 \cross 3$​ matrix, it can be defined as
$$
\begin{vmatrix} a & b & c \\ d & e & f \\ g & h & i\end{vmatrix}
=a\begin{vmatrix} e & f \\ h & i\end{vmatrix}
-b\begin{vmatrix} d & f \\ g & i\end{vmatrix}
+c\begin{vmatrix} d & e \\ g & h\end{vmatrix}
$$
**Example**: Calculate $\begin{vmatrix} 2 & 1 \\ 4 & 3\end{vmatrix}$

$\begin{vmatrix} 2 & 1 \\ 4 & 3\end{vmatrix} = 2 * 3-4*1=6-4=2$

### Properties

1. $det(cA)=c^ndet(A)$, for a $n \cross n$​ matrix.
2. $det(A^T)=det(A)$​
3. $det(AB)=det(A)det(B)$
4. 
5. Interchanging any pair of columns multiples the determinant by -1
6. Adding a scalar multiple of one column to another does not change the determinant

### Code

**Python**

```python
import numpy as np
matrix = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
det = np.linalg.det(matrix)
```

**Matlab**

```matlab
A = [1 -2 4; -5 2 0; 1 0 3];
determinant = det(A);
```

## Transpose



## Elementary row operations

These are the elementary row operations that can be done on matrices, it will make more sense when we get to the Gauss-Jordan elimination section.