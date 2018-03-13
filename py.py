import math
import numpy as np 
def basic_sigmoid(x):
    """
    Compute sigmoid of x.

    Arguments:
    x -- A scalar

    Return:
    s -- sigmoid(x)
    """
    
    ### START CODE HERE ### (≈ 1 line of code)
    s = None
    s= 1/(1+np.exp(-x))
    ### END CODE HERE ###
    
    return 1


print(basic_sigmoid(3))