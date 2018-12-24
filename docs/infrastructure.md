## :nut_and_bolt: Infrastructure

Pindo Rama infrastructure is managed by Terraform. Make sure that you are using Terraform commands to incrementally change the infra. Please don't hand crank shit.

### :couple: Dependencies

There are a couple of requirements for running changes to the infrastructure.

- First you will need to [generate a Digital Ocean Personal Access Token](https://www.digitalocean.com/docs/api/create-personal-access-token/) and set your `$DO_PAT` environment var equal to it.
    ```bash
    $ export DO_PAT=${your_token}
    ```
- You will need to have [generated a public/private key](https://www.ssh.com/ssh/keygen/).
- You will need to create an MD5 hash of your public key and set your `$SSH_FINGERPRINT` environment variable equal to it.
    ```bash
    $ ssh-keygen -E md5 -lf ~/.ssh/${public_key_file.pub} | awk '{print $2}'
    
    $ export SSH_FINGERPRINT=${md5_hash}
    ```

### :construction: Check your infra changes

Terraform allows you to do a quick diff between your local Terraform state and remote state in Digital Ocean to see this, run:

```bash
$ terraform plan -var "do_token=${DO_PAT}" -var "pub_key=$HOME/.ssh/${public_key_file.pub}" -var "pvt_key=$HOME/.ssh/${private_key_file}" -var "ssh_fingerprint=$SSH_FINGERPRINT"
```

### :city_sunrise: Launch your infra changes

Once you're happy with your changes run:

```bash
$ terraform apply -var "do_token=${DO_PAT}" -var "pub_key=$HOME/.ssh/${public_key_file.pub}" -var "pvt_key=$HOME/.ssh/${private_key_file}" -var "ssh_fingerprint=$SSH_FINGERPRINT"
```
