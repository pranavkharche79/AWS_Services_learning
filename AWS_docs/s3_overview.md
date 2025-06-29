# S3 Overview

## What is S3?

Amazon S3 (Simple Storage Service) is an object storage service that offers industry-leading scalability, data availability, security, and performance.

## Key Features

- Store and retrieve any amount of data
- Highly durable and available
- Fine-grained access controls
- Multiple storage classes
- Lifecycle management

## Basic Usage

1. Create a bucket in the AWS Management Console
2. Upload objects (files) to the bucket
3. Set permissions and access policies
4. Organize data with folders and prefixes
5. Use versioning and lifecycle rules as needed

## Use Cases

- Backup and restore
- Data archiving
- Hosting static websites
- Big data analytics

## What I Have Learned (In Detail)

### 1. S3 Concepts and Architecture

- **Buckets:** Learned that S3 buckets are global containers for storing objects (files). Each bucket has a unique name and is created in a specific AWS region.
- **Objects:** Understood that objects are files stored in buckets, each with a unique key (path/filename) and associated metadata.
- **Data Consistency:** Explored S3's strong read-after-write consistency for new objects and eventual consistency for overwrite/delete operations.

### 2. Creating and Managing Buckets

- **Step-by-step (Console):**
  1. Navigated to S3 Dashboard and clicked "Create bucket".
  2. Chose a globally unique bucket name and selected a region.
  3. Configured options: versioning, encryption, public access settings.
  4. Created the bucket and viewed it in the console.
- **Hands-on:** Created multiple buckets for different projects and environments.

### 3. Uploading, Organizing, and Managing Objects

- Uploaded files and folders using the AWS Console and drag-and-drop interface.
- Used prefixes (folders) to organize data hierarchically.
- Set metadata and storage class for each object.
- Downloaded and deleted objects as needed.

### 4. Storage Classes and Cost Optimization

- Explored different storage classes: Standard, Intelligent-Tiering, Standard-IA, One Zone-IA, Glacier, and Glacier Deep Archive.
- Used lifecycle rules to automatically transition objects to lower-cost storage classes based on age or access patterns.
- Compared costs and use cases for each class.

### 5. Security and Access Management

- **Bucket Policies:** Configured JSON policies to allow/deny access at the bucket level.
- **IAM Policies:** Attached IAM user/group policies for fine-grained access control.
- **Block Public Access:** Enabled block public access to prevent accidental data exposure.
- **Encryption:** Enabled server-side encryption (SSE-S3, SSE-KMS) for sensitive data.
- **Access Logging:** Enabled logging to track access requests for auditing.

### 6. Versioning and Lifecycle Management

- Enabled versioning to keep multiple versions of an object for recovery and auditing.
- Set up lifecycle rules to expire old versions and delete incomplete multipart uploads.

### 7. Static Website Hosting

- Configured a bucket for static website hosting by enabling the feature and uploading HTML/CSS/JS files.
- Set index and error documents.
- Updated bucket policy to allow public read access for website files.
- Accessed the website via the S3 website endpoint URL.

### 8. Monitoring and Logging

- Used S3 metrics and CloudWatch to monitor storage usage and request counts.
- Set up event notifications for object creation/deletion (e.g., trigger Lambda functions).

### 9. CLI and SDK Experience

- Managed buckets and objects using AWS CLI:
  ```sh
  aws s3 mb s3://my-bucket
  aws s3 cp file.txt s3://my-bucket/
  aws s3 ls s3://my-bucket/
  aws s3 rm s3://my-bucket/file.txt
  aws s3 sync ./local-folder s3://my-bucket/backup/
  ```
- Used Boto3 (Python SDK) to automate uploads, downloads, and bucket management.

### 10. Troubleshooting and Best Practices

- Ensured bucket names are globally unique and follow naming conventions.
- Resolved access denied errors by reviewing bucket/IAM policies and public access settings.
- Used least privilege principle for all access policies.
- Regularly reviewed and cleaned up unused buckets and objects to optimize costs.
- Enabled MFA Delete for extra protection on critical buckets.

---

**This detailed experience demonstrates both theoretical understanding and practical skills in managing, securing, and optimizing S3 storage on AWS.**
