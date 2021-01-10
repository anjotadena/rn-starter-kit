# RN Starter Kit

Working in progress...

## Troubleshot
### Watchman help!
Increase inotify limit to increase the limit on the number of files you can monitor.
```
$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
$ sudo sysctl -p
```