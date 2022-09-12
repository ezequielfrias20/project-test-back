## Descripcion

Para este proyecto se uso Node v14.16.0 y npm 6.14.15

### PASOS A SEGUIR

1. npm install.
2. crear una carpeta .env con los campos que se encuentran en .env.example y llenar los campos con la bd.
3. npm run start

### ENTPOINTS

- LOGIN:  http://localhost:3003/login (POST)
body : {
  "username":"elvin",
  "pass": "12345"
}

- CREAR FACTURA : http://localhost:3003/bills (POST)
body : {
    "date_bill": "2022-09-02T05:00:00.000Z",
    "user_id": 3,
    "value": "2000",
    "type": 1,
    "observation": "desayuno"
}

- TODAS LAS FACTURAS: http://localhost:3003/bills (GET)


- ACTUALIZAR FACTURA: http://localhost:3003/bills/2 (PUT)
body : {
    "user_id": 3,
    "value": "3000",
    "type": 1,
    "observation": "desayuno actualizado"
}

- ELIMINAR FACTURA: http://localhost:3003/bills/2 (DELETE)
