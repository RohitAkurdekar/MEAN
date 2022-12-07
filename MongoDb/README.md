# MongoDB

Install MongoDB and studio3t

<h3>Steps to install MongoDB</h3>

1. Download Package from below link

https://www.mongodb.com/try/download/community

2. Commands to install mongodb
<br>

    wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -

<br>

    sudo apt-get install gnupg
    
<br>

    wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
    
<br>

    echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

<br>

    sudo apt-get update
<br>

    sudo apt-get install -y mongodb-org
<br>
    
    echo "mongodb-org hold" | sudo dpkg --set-selections
<br>
    
    echo "mongodb-org-database hold" | sudo dpkg --set-selections
<br>
    
    echo "mongodb-org-server hold" | sudo dpkg --set-selections
<br>
    
    echo "mongodb-mongosh hold" | sudo dpkg --set-selections
<br>
    
    echo "mongodb-org-mongos hold" | sudo dpkg --set-selections
<br>

    echo "mongodb-org-tools hold" | sudo dpkg --set-selections

3. Check whether service mongodb is running or not
<br>

    sudo systemctl status mongod
    
<br> If not running, start service using following command:

    sudo systemctl start mongod

<br> If ERROR occurs like &rarr; mongod.service not found __OR__ Unable install mongodb __OR__ Dependency error

Execute following command and re-execute process:

        sudo apt remove mongodb*


---------------------------------------------------------------------------------------------------------------

<h3>To install studio3t</h3>

1. Download Package from below link

https://studio3t.com/download/

2. Unzip file
3. Execute studio-3t-linux-x64.sh using bash

        bash ./studio-3t-linux-x64.sh
        
After successfull installation of studio3t; Run studio3t ide and run 'TEST CONNECTION'.
        
---------------------------------------------------------------------------------------------------------------

https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/
