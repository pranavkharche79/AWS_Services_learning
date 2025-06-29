# EC2 Basics

## What is EC2?

Amazon EC2 (Elastic Compute Cloud) is a web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers.

## Key Features

- Virtual servers in the cloud (instances)
- Wide selection of instance types
- Pay-as-you-go pricing
- Secure and resizable compute capacity
- Integration with other AWS services

## Basic Usage

1. Launch an EC2 instance from the AWS Management Console
2. Choose an Amazon Machine Image (AMI)
3. Select an instance type
4. Configure instance details and storage
5. Add tags and configure security group
6. Review and launch

## Use Cases

- Hosting web applications
- Running batch jobs
- Development and test environments

## What I Have Learned (In Detail)

### 1. EC2 Concepts and Architecture

- **Instances:** Learned that EC2 instances are virtual servers running on AWS infrastructure. Each instance is based on an Amazon Machine Image (AMI) and can be launched in various types (t2.micro, m5.large, etc.) depending on CPU, memory, and network requirements.
- **AMI:** Understood how AMIs serve as templates for launching instances, including OS, application server, and applications.
- **Regions and Availability Zones:** Explored how EC2 resources are deployed in regions and AZs for high availability and fault tolerance.

### 2. Launching and Managing Instances

- **Step-by-step Launch (Console):**
  1. Navigated to EC2 Dashboard and clicked "Launch Instance".
  2. Selected an AMI (e.g., Amazon Linux 2, Ubuntu).
  3. Chose instance type (e.g., t2.micro for free tier testing).
  4. Configured network (VPC, subnet), storage (EBS), and added tags.
  5. Created/selected a key pair for SSH access.
  6. Configured security group to allow SSH (port 22) and HTTP (port 80) as needed.
  7. Launched the instance and monitored its state (pending, running, stopped, terminated).
- **Hands-on:** Launched, stopped, started, and terminated instances. Practiced connecting via SSH using key pairs.

### 3. Instance Types and Use Cases

- Compared general purpose, compute-optimized, memory-optimized, and storage-optimized instances.
- Used t2.micro for basic web server, c5.large for compute tasks, and r5.large for memory-intensive applications.

### 4. Networking and Security

- **VPC/Subnet:** Placed instances in public/private subnets. Understood the role of Internet Gateways and NAT Gateways.
- **Security Groups:** Configured rules to allow/deny traffic. Example: Allowed SSH from my IP, HTTP from anywhere.
- **Key Pairs:** Generated and used key pairs for secure SSH access. Practiced downloading and using PEM files.
- **IAM Roles:** Attached IAM roles to instances for secure access to S3 and other AWS services without embedding credentials.

### 5. Storage Management

- **EBS Volumes:** Attached, detached, and resized EBS volumes. Learned about volume types (gp3, io1, st1, etc.).
- **Snapshots:** Created EBS snapshots for backup and recovery.
- **Instance Store:** Understood the difference between ephemeral instance store and persistent EBS storage.

### 6. Automation and Initialization

- Used EC2 User Data to automate software installation (e.g., Apache, Nginx) at launch with shell scripts.
- Example User Data:
  ```bash
  #!/bin/bash
  yum update -y
  yum install -y httpd
  systemctl start httpd
  systemctl enable httpd
  echo "Hello from EC2" > /var/www/html/index.html
  ```

### 7. Monitoring and Management

- Used CloudWatch to monitor CPU, disk, and network metrics.
- Set up alarms for high CPU usage.
- Used EC2 Instance Connect and Session Manager for browser-based access.

### 8. Pricing Models

- **On-Demand:** Pay per hour/second, no commitment. Used for testing.
- **Reserved:** Committed for 1 or 3 years for cost savings.
- **Spot:** Used spare capacity at reduced rates for non-critical workloads.
- Compared costs using AWS Pricing Calculator.

### 9. CLI and SDK Experience

- Launched and managed instances using AWS CLI:
  ```sh
  aws ec2 run-instances --image-id ami-xxxx --instance-type t2.micro --key-name my-key --security-group-ids sg-xxxx --subnet-id subnet-xxxx
  aws ec2 describe-instances
  aws ec2 stop-instances --instance-ids i-xxxx
  aws ec2 terminate-instances --instance-ids i-xxxx
  ```
- Used Boto3 (Python SDK) for automation scripts.

### 10. Best Practices Learned

- Always use least privilege for security groups and IAM roles.
- Regularly back up data with EBS snapshots.
- Use tags for resource organization and cost allocation.
- Terminate unused instances to avoid unnecessary charges.

### 11. Connecting to EC2 Instances: Ubuntu & PuTTY

- **Ubuntu (Linux/Mac):**
  - Used the terminal and SSH to connect to EC2 instances:
    ```sh
    chmod 400 my-key.pem
    ssh -i my-key.pem ec2-user@<public-ip>
    ```
  - Understood the importance of setting correct permissions on the PEM file (chmod 400).
  - Practiced troubleshooting SSH issues (e.g., security group rules, correct username for AMI).
- **PuTTY (Windows):**
  - Converted PEM key to PPK format using PuTTYgen.
  - Configured PuTTY session with EC2 public IP and PPK key.
  - Successfully connected to EC2 instance and managed it via Windows.
  - Noted common issues: security group settings, username (ec2-user/ubuntu), and key format.

---

**This hands-on experience and understanding of EC2 covers both the theoretical concepts and practical skills needed to deploy, secure, automate, and manage compute resources on AWS.**
