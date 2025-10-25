

 Ejercicio 1 — Servicio Base con Dockerfile

**Objetivo:** Crear un servicio Node.js funcional y contenerizado.
  

**Comandos utilizados:**
```bash
docker build -t parcial-api .
docker run -d -p 3000:3000 parcial-api
curl http://localhost:3000/
curl http://localhost:3000/health


## Ejercicio 2 – Persistencia con PostgreSQL

### Comandos ejecutados:
- docker volume create db_data
- docker run -d --name parcial-db ...
- docker exec -it parcial-db psql -U admin -d parcial_db

### SQL ejecutado:
```sql
CREATE TABLE estudiantes (
  id SERIAL PRIMARY KEY,
  nombre TEXT NOT NULL,
  expediente TEXT NOT NULL
);

INSERT INTO estudiantes (nombre, expediente)
VALUES ('Estiven', 'EXP123'), ('Ana', 'EXP456');


## Ejercicio 3 – Integración con Docker Compose

### Comandos ejecutados:
- docker compose up -d --build

### Configuración:
- Servicios: `api` y `db`
- Red: `default`
- Volumen: `db_data`
- Variables de entorno: `.env`
- Comunicación entre contenedores: exitosa




