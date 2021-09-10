create database pruebaMVC_1;
use pruebaMVC_1;

create table poblaciones(
id_poblacion int unsigned auto_increment,
nombre varchar(200) not null,
ubi_lat double,
ubi_long double,
primary key (id_poblacion));

insert into poblaciones (nombre, ubi_lat, ubi_long) values
('Tarragona', 41.11667, 1.25),
('Barcelona', 41.38879, 2.15899),
('Sevilla', 37.38283, -5.97317),
('Madrid', 40.4165, -3.70256),
('Zaragoza', 41.65606, -0.87734),
('Gerona', 35.65606, 1.2587734);

create table hoteles(
id_hotel int unsigned auto_increment,
nombre varchar(200) not null,
categoria enum('1', '2', '3', '4', '5') not null,
ubi_lat double,
ubi_long double,
precio_noche float,
valoracion enum('basico', 'bien', 'muybien', 'excelente'),
imagen text,
telefono varchar(9) not null,
id_poblacion int unsigned,
primary key (id_hotel),
foreign key (id_poblacion) references poblaciones(id_poblacion) on delete restrict on update cascade);

insert into hoteles (nombre, categoria, ubi_lat, ubi_long, precio_noche, valoracion, imagen, telefono, id_poblacion) values
('Sevilla Ayre Hotel', '4', 37.389538, -5.974852, 67, 'muy bien', 'url de la imagen', '954919797', 3),
('H10', '4', 41.115248, 1.256901, 80, 'excelente', 'url de la imagen', '900400466', 1),
('Astari', '3', 41.117412, 1.265011, 80, 'muybien', 'imagen del hotel', '977236900', 1),
('Hotel W Barcelona', '5', 41.368341, 2.190043, 317, 'muybien', 'url de la imagen', '932952800', 2),
('Hotel Gran Ultonia', '4', 41.985255, 2.821277, 61, 'muybien', 'url de la imagen', '972203850', 6),
('Ibis Girona', '2', 41.998179, 2.817517, 57, 'bien', 'url de la imagen', '972391538', 6),
('Hotel Granvia', '3', 41.390006, 2.169551, 105, 'excelente', 'url de la imagen', '933181900', 2),
('Hotel Palacio de Villapanés', '5', 37.391493, -5.986297, 102, 'excelente', 'url de la imagen', '954502063', 3),
('Mercure Madrid Centro', '4', 40.414067, -3.694522, 84, 'muybien', 'url de la imagen', '913600011', 4),
('Hotel Villa Real', '5', 40.415497, -3.69703, 102, 'muybien', 'url de la imagen', '914203767', 4),
('Hotel Río Arga', '2', 41.654807, -0.880873, 48, 'muybien', 'url de la imagen', '976399065', 5),
('Hotel Zentral Ave', '4', 41.66113, -0.906702, 57, 'muybien', 'url de la imagen', '976287950', 5);

select * from poblaciones;
select * from hoteles;