docker rm <PID> --force
docker ps -a
docker build -t tic-tac-toe .
docker run -p 5173:5173 react-docker 
docker run -p 5173:5173 -v "$(pwd):/app" -v  /app/node_modules tic-tac-toe

# Push to Docker hub
docker tag tic-tac-toe:latest reeveignatius/tic-tac-toe:latest
docker push reeveignatius/tic-tac-toe:latest