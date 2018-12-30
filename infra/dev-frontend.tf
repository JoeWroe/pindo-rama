resource "digitalocean_droplet" "dev-frontend" {
  image = "ubuntu-18-04-x64"
  name = "dev-frontend"
  region = "lon1"
  size = "512mb"
  user_data = "docker run -p 4000:80 joewroe/pindo-rama:v1.0"
}

resource "digitalocean_domain" "pindo-rama" {
  ip_address = "${digitalocean_droplet.dev-frontend.ipv4_address}"
  name = "pindo-rama.art"
}
