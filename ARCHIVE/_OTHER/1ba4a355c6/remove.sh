# Stop all docker containers
sudo docker stop $(sudo docker ps -a -q)

# Delete all docker containers
sudo docker rm -f $(sudo docker ps -a -q)

# Delete all docker images
sudo docker rmi -f $(sudo docker images -q)