pipeline {
    agent none

    stages {
        stage('Monitor') {
			agent { label 'server01' }
            steps {
                git branch: 'main', url: 'https://github.com/up1/workshop-nodejs-docker.git'
            }
        }
		stage('Build') {
			agent { label 'server01' }
            steps {
                sh 'docker-compose build frontend'
            }
        }
		stage('Push') {
            steps {
                echo 'Push'
            }
        }
		stage('Deploy') {
            steps {
                echo 'Deploy'
            }
        }
		stage('Testing') {
            steps {
                echo 'Testing'
            }
        }
    }
}
