# Step to run workshop


## 1. Working with Docker
```
$docker-compose build
$docker-compose up -d db
$docker-compose ps

$docker-compose up -d web
$docker-compose ps
```

## 2. Working with Kubernetes
```
$cd k8s
$kubectl apply -f db.yml
$kubectl apply -f web.yml

$kubectl get all
```

