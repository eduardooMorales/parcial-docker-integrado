

 Ejercicio 1 — Servicio Base con Dockerfile

**Objetivo:** Crear un servicio Node.js funcional y contenerizado.
  

**Comandos utilizados:**
```bash
docker build -t parcial-api .
docker run -d -p 3000:3000 parcial-api
curl http://localhost:3000/
curl http://localhost:3000/health
