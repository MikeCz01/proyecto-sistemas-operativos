# Imagen base
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias e instala
COPY package*.json ./
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Expone el puerto que usará la app
EXPOSE 3000

# Comando que inicia la app
CMD ["npm", "start"]
