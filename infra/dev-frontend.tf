resource "digitalocean_ssh_key" "pindo-rama" {
  name = "pindo-rama"
  public_key = "${file(var.public_key)}"
}

resource "digitalocean_droplet" "dev-frontend" {
  image = "docker"
  name = "pindo-rama"
  region = "lon1"
  size = "512mb"
  ssh_keys = ["${digitalocean_ssh_key.pindo-rama.fingerprint}"]
  connection {
    user = "root"
    private_key = "${file(var.private_key)}"
  }
  provisioner "remote-exec" {
    inline = [
      "docker run -d -p 80:80 joewroe/pindo-rama:v1.0"
    ]
  }
}

resource "digitalocean_domain" "pindo-rama-dev" {
  ip_address = "${digitalocean_droplet.dev-frontend.ipv4_address}"
  name = "dev.pindo-rama.art"
}
