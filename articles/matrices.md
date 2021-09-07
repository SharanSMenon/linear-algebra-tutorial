# Matrices

A matrix is a 2 dimensional list of numbers. It looks something like the following

$\begin{pmatrix} 1 & 2 \\ 3 & 4\end{pmatrix}$​

A matrix has $n$ rows and $m$ columns. The matrix above is a $2x2$ matrix, since it has 2 rows and 2 columns

## Basic Properties

### Addition of Matrices

To add matrices, you just add the elements of each matrix. Note that the sizes of both matrices must be the same

### Subtraction of matrices

Subtracting matrices is the exact same as adding matrices but you just subtract the elements. Here, both matrices must be the same size

## Common Matrices

There are some common matrices, that are used for certain calculations like eigenvalues

### Zero Matrix

The zero matrix is a $m$ x $n$ matrix of just 0, like this:

$\begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0\end{pmatrix}$​ 

The above matrix is a $2$ x $3$ zero matrix.

### Identity Matrix

Identity matrix is like the zero matrix except that it has 1 in the diagonal, and it is a square matrix

$\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1\end{pmatrix}$

## Matrix Multiplication

Matrix Multipication, sometimes known as the matrix dot product, is where you multiply 2 matrices together. In order to multiply two matrices, matrix A must be $m \cross n$ and matrix B must be $n \cross p$. Basically, $m$ and $p$ and be anything, but $n$ must be the same in both matrices. Multiplying a $m \cross n$ and a $n \cross m$​​​ matrix, returns a $m \cross p$ matrix.
$$
\begin{pmatrix}
a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23}
\end{pmatrix}
\begin{pmatrix}
b_{11} & b_{12}\\
b_{21} & b_{22}\\
b_{31} & b_{32}
\end{pmatrix}=
\begin{pmatrix}
c_1 & c_2 \\ c_3 & c_4
\end{pmatrix}
$$
To find $c_n$, take the dot product of $n$​th row of A and the $n$th column of B. For example $c_1 = a_{11}b_{11} + a_{12}b_{21} + a_{13}b_{31}$​.

### Properties

A is a $m \cross n$ matrix and B is a $n \cross p$ matrix.

1. $AB \ne BA$
2. $AI=A$, where $I$ is the $n \cross n$​ identity matrix
3. $A(B +C)=AB+AC$​ and $(B+C)D=BD + CD$​
4. $(AB)^T=B^TA^T$​
5. $A^k=AA\cdot\cdot\cdot A$​​
6. $A^0=I$
7. $det(AB)=det(BA)$

## Inverse

[TO BE ADDED]