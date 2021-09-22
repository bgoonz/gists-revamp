import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

data = pd.read_csv("Stages.csv").dropna()

x = "Stage"
y = "Experimental"

plt.figure(figsize=(15, 16))
sns.boxplot(x=x, y=y, data=data)
sns.swarmplot(x=x, y=y, data=data, color=".1")
