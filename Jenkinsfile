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
			agent { label 'server01' }
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USER')]) {
    				sh '''docker login -u $DOCKER_USER -p $DOCKER_PASSWORD
						docker image tag somkiat/pets-front:v1 somkiat/pets-front:v3
						docker image push somkiat/pets-front:v3'''
				}
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
