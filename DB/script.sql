CREATE TABLE eventos (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    tiempo_inicio TIMESTAMP NOT NULL,
    tiempo_termino TIMESTAMP NOT NULL
);

CREATE TABLE pre_registro (
    id SERIAL PRIMARY KEY,
    id_evento INT NOT NULL,
    id_usuario INT NOT NULL
);

CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    rut VARCHAR(255) NOT NULL UNIQUE,
    nombres VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    apellido_materno VARCHAR(255) NOT NULL,
    fecha_nacimiento TIMESTAMP NOT NULL,
    genero INT NOT NULL,
    correo VARCHAR(255) NOT NULL
);

CREATE TABLE datos_extra (
    id SERIAL PRIMARY KEY,
    id_usuario INT NOT NULL
);

CREATE TABLE asistencia (
    id SERIAL PRIMARY KEY,
    id_evento INT NOT NULL,
    id_usuario INT NOT NULL
);

CREATE TABLE usuario_aplicativo (
    id SERIAL PRIMARY KEY,
    correo VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    administrador BOOLEAN DEFAULT false
);

ALTER TABLE pre_registro ADD CONSTRAINT pre_registro_fk0 FOREIGN KEY (id_evento) REFERENCES eventos(id);
ALTER TABLE pre_registro ADD CONSTRAINT pre_registro_fk1 FOREIGN KEY (id_usuario) REFERENCES usuario(id);
ALTER TABLE datos_extra ADD CONSTRAINT datos_extra_fk0 FOREIGN KEY (id_usuario) REFERENCES usuario(id);
ALTER TABLE asistencia ADD CONSTRAINT asistencia_fk0 FOREIGN KEY (id_evento) REFERENCES eventos(id);
ALTER TABLE asistencia ADD CONSTRAINT asistencia_fk1 FOREIGN KEY (id_usuario) REFERENCES usuario(id);