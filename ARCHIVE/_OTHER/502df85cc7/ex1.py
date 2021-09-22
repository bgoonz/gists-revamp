import numpy as np

import matplotlib.pyplot as plt
import seaborn as sns

sns.set_palette("Paired")

def plot_data(x, y):
    plt.scatter(x, y)
    plt.show()

def line_plot(x, y, theta):
    plt.scatter(x, y)
    plt.plot([0, 25], [theta[0] + theta[1] * 0, theta[0] + theta[1] * 25])
    plt.show()


def hypothesis(X, theta):
    return X * np.matrix(theta).T

def error(m, X, Y, theta):
    H = hypothesis(X, theta)
    return (1/(2.*m) * sum(np.power(H - Y, 2))).item(0)

def grad_descent(iters, alpha, x, y):
    m = len(x)
    ones = np.matrix([[1]*m])

    X = np.concatenate((ones, np.matrix(x).T)).T
    Y = np.matrix([y]).T

    theta = [0] * X.shape[1]
    for i in range(iters):
        temp_theta = theta
        for j, theta_j in enumerate(theta):
            H = hypothesis(X, theta)
            temp_theta[j] = (theta_j - alpha*(1./m)*sum(np.multiply(H - Y, X[:,j]))).item(0)
        theta = temp_theta

    print error(m, X, Y, theta)
    return theta

def normalize(feature):
    for i, col in enumerate(feature.T):
        mu = np.mean(col, axis=0)
        delta = max(col) - min(col)
        feature[:,i] = (col - mu) / delta
    return feature

def main():
    # Ex. 1: Single variable linear regression
    food_truck = np.genfromtxt("ex1data1.txt", delimiter=",")
    x = np.matrix([food_truck[:,0]]).T
    y = food_truck[:,1]

    theta = grad_descent(1500, 0.01, x, y)
    print theta
    line_plot(x, y, theta)

    # Ex. 2: Multi-variable linear regression
    house = np.genfromtxt("ex1data2.txt", delimiter=",")
    X = house[:,:-1]
    norm_X = normalize(X)
    Y = house[:,-1]

    theta = grad_descent(1500, 1, norm_X, Y)
    print theta

if __name__=="__main__":
    import sys
    sys.exit(main())