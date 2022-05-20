terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
}

provider "aws" {
  region = "us-west-1"
}

resource "aws_instance" "app_server" {
  ami           = "ami-0c4f7023847b90238"
  instance_type = "t2.micro"

  security_groups = [aws_security_group.allow_ssh.name]
  key_name        = "tiktok-tf"

  user_data = <<-EOF
    #!/bin/bash
    set -ex
    sudo yum update -y
    sudo yum install docker -y
    sudo service docker start
    sudo usermod -a -G docker ec2-user
    sudo docker run -d -p 3000:3000 juanpmedina/prueba:main
  EOF
  user_data_replace_on_change = true

  tags = {
    Name = "tiktok-tf"
  }
}


resource "aws_security_group" "allow_ssh" {
  name        = "allow_http"
  description = "Allow HTTP inbound traffic"

  ingress {
    description      = "HTTP from VPC"
    from_port        = 22
    to_port          = 22
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
   cidr_blocks      = ["0.0.0.0/0"] 
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  ingress {
    description      = "HTTP from VPC"
    from_port        = 3000
    to_port          = 3000
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  tags = {
    Name = "allow_http"
  }
}
 