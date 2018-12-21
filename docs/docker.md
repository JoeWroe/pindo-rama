## :whale: Docker

### :package: Building the app

From the top level of the app run:

```bash
$ docker build -t pindo-rama .
```

### :runner: Running the app 

#### With a local image

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

#### With a remote image

This will require completion of the following steps:

- [Tag the latest build](#ticket-tag-the-latest-build)
- [Push the image to the repository](#hand-push-the-image-to-the-repository)

Then you can run:

```bash
docker run -p 4000:80 joewroe/pindo-rama:v1.0
```

This will run the `v1.0` tagged image from the docker repository on port 4000 of your machine. Docker will pull the image for you if it does not find it on your machine.

### :ticket: Tag the latest build

First check the most recent build version on the [docker repositories tags page](https://hub.docker.com/r/joewroe/pindo-rama/tags).

Next tag the recently built image by incrementing the most recent tag in the repository:

```bash
$ docker tag {image-name} joewroe/pindo-rama:{new-tag}
```

### :hand: Push the image to the repository

First check your available images:

```bash
$ docker image ls

REPOSITORY              TAG         IMAGE ID
joewroe/pindo-rama      v1.0        326387cea398
pindo-rama              latest      326387cea398
```

Upload your tagged image to the repo:

```bash
$ docker push joewroe/pindo-rama:v1.0
```
