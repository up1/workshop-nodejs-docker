#!/bin/bash
docker-compose down
docker-compose up -d frontend

# Check started
STATUS="starting"
while [ "$STATUS" != "healthy" ]
do
	STATUS=$(docker container inspect --format {{.State.Health.Status}} frontend)
	echo "Status= $STATUS"
	sleep 5
done

echo "Frontend done."