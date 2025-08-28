FROM node:20

WORKDIR /app

COPY frontend/package*.json ./frontend/
COPY backend/package*.json ./backend/

RUN npm install --prefix frontend
RUN npm install --prefix backend
RUN npm install -g serve

COPY . .

# Expose ports
EXPOSE 3000 5500

# Start both backend and frontend
CMD sh -c "npm start --prefix backend & npx serve -s frontend -l 5500"
