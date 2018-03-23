To install the AWS CLI and Docker and for more information on the steps below, visit the ECR documentation page.
1) Retrieve the docker login command that you can use to authenticate your Docker client to your registry: 
Note: 
If you receive an "Unknown options: --no-include-email" error, install the latest version of the AWS CLI. Learn more


    aws ecr get-login --no-include-email --region us-east-2

2) Run the docker login command that was returned in the previous step. 
Note: 
If you are using Windows PowerShell, run the following command instead.


    Invoke-Expression -Command (aws ecr get-login --no-include-email --region us-east-2)

3) Build your Docker image using the following command. For information on building a Docker file from scratch see the instructions here. You can skip this step if your image is already built:
    
    
    docker build -t getcontact .

4) After the build completes, tag your image so you can push the image to this repository:


    docker tag getcontact:latest 197229461665.dkr.ecr.us-east-2.amazonaws.com/getcontact:latest

5) Run the following command to push this image to your newly created AWS repository:


    docker push 197229461665.dkr.ecr.us-east-2.amazonaws.com/getcontact:latest

