Harris Detector
===============

Problem Statement
-----------------

Detect corners and edges in a given image.

Approach
--------

Given image <span class="math inline">*I*</span>, <span class="math inline">*n* × *n*</span> size Gaussian Kernel <span class="math inline">*G*<sub>*n* × *n*</sub></span>,

1.  Compute the gradients of the image, both horizontal and vertical directions. <span class="math inline">*X* = ( − 1, 0, 1) ⊗ *I*</span>, <span class="math inline">*Y* = ( − 1, 0, 1)<sup>*T*</sup> ⊗ *I*</span>
2.  Compute the matrix <span class="math inline">*M*</span>, where <span class="math inline">*A* = *G*<sub>*n* × *n*</sub> ⊗ *X*<sup>2</sup></span>, <span class="math inline">*B* = *G*<sub>*n* × *n*</sub> ⊗ *Y*<sup>2</sup></span>, <span class="math inline">*C* = *G*<sub>*n* × *n*</sub> ⊗ *XY*</span>
3.  Compute the response function <span class="math inline">*R*</span>, where <span class="math inline">*R* = *AB* − *C*<sup>2</sup> − *k*(*A* + *B*)</span>
4.  Classify all points in <span class="math inline">*R*​</span>.

Code Implementation Links
-------------------------

-   [Python](https://github.com/TheAlgorithms/Python/blob/master/digital_image_processing/feature_detectors/harris.py)

Reference
---------

C. Harris and M. Stephens, “A Combined Corner and Edge Detector,” in *Procedings of the Alvey Vision Conference 1988*, Manchester, 1988, pp. 23.1-23.6.
