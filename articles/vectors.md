---
author: "Sharan Sajiv Menon"
---
# Vectors

## What is a vector

## Basic Properties

### Addition of Vectors

Two vectors can be added as long as they are the same size. Adding them is as simple as adding the numbers together.

$A(1, 2, 3) + B(2, 3, 4) = C(3, 5, 7)$​

**Numpy Code**

```python
a = np.array([1, 2, 3])
b = np.array([2, 3, 4])
c = a + b
```

### Subtraction of Vectors

Subtracting vectors is just like adding vectors. Vectors have to be same size and all you do is subtract the individual elements.

$A(2, 3, 4) - B(1, 2, 3)=C(1, 1, 1)$​

**Numpy Code**

```python
a = np.array([2, 3, 4])
b = np.array([1, 2, 3])
c = a - b
```

## Dot Product

Now we get into more advanced vector operations.

The dot product is a very useful vector operation. You can use it to find the area of parallelograms and triangles from 3 dimensional coordinates without having to find distance and all. You can also calculate work, and do many other things with the dot product. This guide will show you how to calculate that dot product.

The notation looks like the following: $a \cdot b$

### How to calculate

Calculate the dot product of $A(1, 3, 2)$ and $B(4, 1, 6)$.

> **Important**: The dot product of 2 vectors will always be a single number, no matter the dimensions.

1. Multiply the numbers in the corresponding positions
2. Take the sum of the result

$$
A_1B_1 + A_2B_2 + A_3B_3 ... + A_nB_n = d
$$

That's the formula for the dot product. For our vectors, it will look like this:

$$
1\times4 + 3\times1 + 6\times2 = 4 + 3 + 12 = 19
$$

So the dot product of vectors $A$​ and $B$​ is 19.

### Properties

1. $a \cdot b=b \cdot a$
2. $a \cdot (b + c)=a\cdot b + a \cdot c$
3. $a \cdot(rb + c)=r(a \cdot b) + (a \cdot c) $​, where $r$ is a scalar
4. $(c_1a)\cdot(c_2b)=c_1c_2(a \cdot b)$​, where $c_1$ and $c_2$ are scalars
5. If $a\cdot b=0$, the $a$ and $b$ are orthogonal.

### Examples

For the following exercises, calculate the dot product of the 2 vectors

> Try the exercises on your own first, if you don't know, then you can look at the solution.

1. $A(1, 6, 1)$ and $B(3, 5, 2)$.
$$
1\times3 + 6\times5 + 1\times2 = 3 + 30 + 2 = 35
$$

2. $A(3, 5, 4)$ and $B(5, 1, 3)$.

$$
3\times5 + 5\times1 + 4\times3 = 15 + 5 + 12 = 32
$$

### Practice

Find the dot product for the following exercises

1. $A(9, 4, 3)$ and $B(5, 4, 1)$
2. $A(7, 6)$ and $B(8, 4)$.
3. $A(2, 1, 4, 7)$ and $B(6, 4, 1, 5)$.

**Numpy Code**

```python
a = [1, 3, 2]
b = [4, 1, 6]
np.dot(a, b)
```

## Cross Product

Cross product is another useful vector operation. It returns a vector perpendicular to vectors $a$ and $b$. It is notated by $a \cross b$​.

### How to calculate

$$
a \cross b = \norm{a}\norm{b}sin(\theta)n
$$

Where $\norm{a}$ and $\norm{b}$ are the magnitudes of vectors $a$ and $b$, $\theta$ is the angle between the vectors, and $n$ is a unit vector perpendicular to the plane containing $a$ and $b$​

It can also be expressed as this determinant
$$
\begin{vmatrix} 
i & j & k \\
a_1 & a_2 & a_3 \\
b_1 & b_2 & b_3
\end{vmatrix} = 
\\
(a_2b_3 - a_3b_2)i - (a_1b_3 - a_3b_1)j + (a_1b_2 - a_2b_1)k
$$

### Examples

$A(1, 2, 3)$​​ and $B(2, 3, 4)$​​​
$$
\begin{vmatrix} 
i & j & k \\
1 & 2 & 3 \\
2 & 3 & 4
\end{vmatrix} = (8 - 9)i - (4 - 6)j + (3 - 4)k
$$
$A \cross B = -1i + 2j - 1k= (-1, 2, -1)$​ 

### Properties

1. $(a \cross a)=0$
2. $a \cross b = -(b \cross a)$
3. $a \cross (b + c)= (a \cross b) + (a \cross c)$
4. $(ra) \cross b = r(a \cross b)=a \cross (rb)$, where $r$ is a scalar
5. 

### Practice

Find the dot product for the following exercises

1. $A(3, 2, 3)$​​ and $B(2, 4, 1)$​​
2. $A(7, 9)$​​ and $B(3, 4)$​​.
3. $A(4, 3, 8, 7)$​​ and $B(6, 2, 5, 3)$​​.

**Numpy Code**

```python
import numpy as np
a = [1, 2, 3]
b = [2, 3, 4]
np.cross(a, b)
```