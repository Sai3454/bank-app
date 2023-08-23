pipeline {
    agent any
    
    environment {
        GIT_REPO_URL = 'https://github.com/Sai3454/bank-app.git'
        EC2_INSTANCE_IP = '54.152.245.130'
        EC2_INSTANCE_USER = 'ec2-user'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], userRemoteConfigs: [[url: GIT_REPO_URL]]])
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Deploy to EC2') {
            steps {
                // Copy build files to EC2 instance
                sh "scp -r ./build/* ${EC2_INSTANCE_USER}@${EC2_INSTANCE_IP}:/usr/share/nginx/html"

                // SSH into EC2 instance and restart Nginx
                sh "ssh ${EC2_INSTANCE_USER}@${EC2_INSTANCE_IP} 'sudo systemctl restart nginx'"
            }
        }
    }
}
