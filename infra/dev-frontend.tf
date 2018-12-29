resource "digitalocean_droplet" "dev-frontend" {
  image = "ubuntu-18-04-x64"
  name = "dev-frontend"
  region = "lon1"
  size = "512mb"
}

resource "digitalocean_domain" "pindo-rama" {
  ip_address = "${digitalocean_droplet.dev-frontend.ipv4_address}"
  name = "pindo-rama.art"
}
