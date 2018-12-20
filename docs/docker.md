## Docker

### Building the app :tractor:

From the top level of the app run:

```bash
$ docker build -t pindo-rama .
```

### Running the app :runner:

First check your available images:

```bash
$ docker image ls

REPOSITORY      TAG         IMAGE ID
pindo-rama      latest      326387cea398
```

next run the app with your desired image at a port of your choice:

```bash
docker run -p 4000:80 pindo-rama
```

this example maps your machines port 4000 to the pindo-rama containers port 80.
