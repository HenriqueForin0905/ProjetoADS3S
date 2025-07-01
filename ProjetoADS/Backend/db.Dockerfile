FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=escola_infantil
ENV MYSQL_USER=user
ENV MYSQL_PASSWORD=password

COPY ./sql-scripts /docker-entrypoint-initdb.d/

EXPOSE 3306