import { setupServer } from 'msw/node'

import { rest } from 'msw';

export const server = setupServer(

  rest.post( 'http://mektebli.local/wp-json/jwt-auth/v1/token', ( req, res, ctx ) => {
    
    return res(

      ctx.status( 200 ),

      ctx.json( {

          "success": true,
          "statusCode": 200,
          "code": "jwt_auth_valid_credential",
          "message": "Credential is valid",
          "data": {
            "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9tZWt0ZWJsaS5sb2NhbCIsImlhdCI6MTY0NDg5OTY2MCwibmJmIjoxNjQ0ODk5NjYwLCJleHAiOjE2NDU1MDQ0NjAsImRhdGEiOnsidXNlciI6eyJpZCI6MiwiZGV2aWNlIjoiIiwicGFzcyI6IjhmZWI3MzdkY2Y0Y2U2NTgxNDRjYzhkYjQzNjc2N2ZjIn19fQ.tAZQEoGbzV9kuekslV_kVv4seVWjMs9gbJOZWyIqKU8",
            "id": 2,
            "email": "asadovtahir@gmail.com",
            "nicename": "admin",
            "firstName": "Tahir",
            "lastName": "Asadov",
            "displayName": "admin"

          }

      } ),

    )

  } ),

)