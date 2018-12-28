## :nut_and_bolt: Infrastructure

Pindo Rama infrastructure is managed by Terraform. Make sure that you are using Terraform commands to incrementally change the infra. Please don't hand crank shit.

### :couple: Dependencies

There are a couple of requirements for running changes to the infrastructure.

- First you will need to [generate a Digital Ocean Personal Access Token](https://www.digitalocean.com/docs/api/create-personal-access-token/) and set your `$TF_VAR_digitalocean_token` environment var equal to it.
    ```bash
    $ export TF_VAR_digitalocean_token=${your_token}
    ```
- You will need to have [generated a public/private key](https://www.ssh.com/ssh/keygen/).
- You will need to create an MD5 hash of your public key and set your `$TF_VAR_ssh_fingerprint` environment variable equal to it.
    ```bash
    $ ssh-keygen -E md5 -lf ~/.ssh/${public_key_file.pub} | awk '{print $2}'
    
    $ export TF_VAR_ssh_fingerprint=${md5_hash}
    ```

### :construction: Check your infra changes

First you can assert that the terraform has been written correctly:

```bash
$ terraform validate
```

Terraform allows you to do a quick diff between your local Terraform state and remote state in Digital Ocean to see this, run:

```bash
$ terraform plan 
```

### :city_sunrise: Launch your infra changes

Once you're happy with your changes run:

```bash
$ terraform apply 
```
