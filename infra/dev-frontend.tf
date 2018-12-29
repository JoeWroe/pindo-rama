resource "digitalocean_droplet" "dev-frontend" {
  image = "ubuntu-18-04-x64"
  name = "dev-frontend"
  region = "lon1"
  size = "512mb"
}
