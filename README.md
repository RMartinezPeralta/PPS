Trabajo practico PPS y LC 4.

FerreTech, Tienda de Computacion.

Fernandez Ignacio Faustino y Melchisedech Belizaire.

Instrucciones para correr:

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Base de datos:

Correr el script en un servidor de SQL server Management Studio.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

API:

Modificar el atributo conection strings en appsettings.json para reflejar la localizacion de la base de datos local

Ejemplo:

"ConnectionStrings": { "FerreConnection": "Server=DESKTOP-2HSK05T\\SQLEXPRESS;Database= FerreTechs; Trusted_Connection = True; Encrypt=False;" }

Modificar " protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)" en FerreTechContext.cs, dentro de DataModels, Context para reflejar la localizacion de la base de datos local

Ejemplo:

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=DESKTOP-2HSK05T\\SQLEXPRESS;Database= FerreTechs; Trusted_Connection = True; Encrypt=False;");
            }
        }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

React:

Modificar el atributo proxy en package.json para reflejar el puerto de Localhost en el que corre la api.

Ejemplo:

"proxy": "https://localhost:7167/api".
