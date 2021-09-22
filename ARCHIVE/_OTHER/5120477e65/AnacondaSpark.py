######################## Linux #############################

### Auto Install Anaconda in Linux
mkdir Downloads
cd Downloads
wget "https://repo.continuum.io/archive/Anaconda3-5.0.1-Linux-x86_64.sh" -O "Anaconda3-5.0.1-Linux-x86_64.sh"
chmod +x Anaconda3-5.0.1-Linux-x86_64.sh
sudo sh "Anaconda3-5.0.1-Linux-x86_64.sh" -b
cd $HOME
rm -r Downloads

echo 'export PATH=$PATH:$HOME/anaconda3/bin' >> ~/.bashrc
echo 'export PATH=$PATH:$HOME/spark-2.3.2-bin-hadoop2.7/bin' >> ~/.bashrc
echo 'export SPARK_HOME=$HOME/spark-2.3.2-bin-hadoop2.7' >> ~/.bashrc
echo 'export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64' >> ~/.bashrc
source ~/.bashrc
 
# Prepare with updates
sudo apt-get update
sudo apt-get install python3-pip -y

## Download and install Spark
# Thanks for this code to install in collab notebooks
# https://medium.com/@sushantgautam_930/apache-spark-in-google-collaboratory-in-3-steps-e0acbba654e6
sudo apt-get install openjdk-8-jdk-headless -qq > /dev/null
wget -q http://www-eu.apache.org/dist/spark/spark-2.3.2/spark-2.3.2-bin-hadoop2.7.tgz
tar xf spark-2.3.2-bin-hadoop2.7.tgz
rm -r spark-2.3.2-bin-hadoop2.7.tgz
sudo -s
pip install -q findspark

## Conda Environment Create
conda create --name py35 python=3.5 
source activate py35

## Install Python Spark Packages
sudo -s -p <YOUR PASSWORD>
pip install --upgrade pip
pip insall pyspark
pip install graphframes
pip install -q findspark

## Launch Jupyter from Windows Subsystem from root
jupyter notebook --allow-root

# Enter subsystem password in Jupyter Notebook from localhost link

############### Python ###############

# Find Spark from Jupyter Notebook
import findspark
findspark.init()

# Start Spark Context
from pyspark import SparkContext
sc =SparkContext()

# Start SQL Context
from pyspark.sql import SQLContext
sqlContext = SQLContext(sc)

# SparkSQL example based on
# https://spark.apache.org/docs/1.6.1/sql-programming-guide.html
# Create SQL context and read in JSON
myJson = sc.parallelize([{"hello": "world"} for x in range(1000)])
df = sqlContext.read.json(myJson)
df.show(10)