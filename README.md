# Fetch Receipt Assessment 

This project is built with Node.js using Express and includes a Dockerized setup so you can run it easily without installing Node manually.

## 1. Clone the Repo 
```bash
git clone https://github.com/Jisolp/fetchAssessment.git
cd fetchAssessment
```
## 2. Build Docker 
```bash 
docker build -t receipt .
```

## 3. Run 
```bash
docker run -p 3000:3000 receipt
```
it should run at http://localhost:3000

---
if port 3000 is already in use on your machine, you can map to 
```bash
docker run -p 4000:3000 receipt
```
and it should run at http://localhost:4000