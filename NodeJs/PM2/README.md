# PM2 node supporting function

__To keep node server running even after power reset.__

Install PM2 on machine

    $ sudo npm i pm2 -g

Start server using PM2

    $ pm2 start app.js

Save app details

    $ pm2 save

Run following command

    $ pm2 startup

If any command is displayed after this command; Execute that command

To view running servers using PM2

    $ pm2 list

To view logs of running server

    $ pm2 logs <server_name>

To stop pm2 server 

    $ pm2 kill <id or name>         # to stop particular server

    $ pm2 kill                      # to stop all running servers

-------------------------------------------------------------------------

2023, Rohit Akurdekar