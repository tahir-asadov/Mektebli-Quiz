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

  rest.get( 'http://mektebli.local/wp-json/symplequiz/v1/quizzes', ( req, res, ctx ) => {
    
    return res(

      ctx.status( 200 ),

      ctx.json(
        [
          {
            "id": "102",
            "title": "\u041f\u043e\u0437\u043d\u0430\u043d\u0438\u0435 \u043c\u0438\u0440\u0430 2\u043a\u043b\u0430\u0441\u0441 - \u041c\u0421\u041e\u21165",
            "description": "",
            "shuffle_questions": "1",
            "shuffle_answers": "1",
            "require_user_login": "0",
            "single_page": "1",
            "has_timer": "1",
            "published": "1",
            "num_of_question": "16",
            "num_of_taken": "51"
          },
          {
            "id": "101",
            "title": "\u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a 2\u043a\u043b\u0430\u0441\u0441 \u0420\u0430\u0431\u043e\u0442\u0430 \u043d\u0430\u0434 \u0442\u0435\u043a\u0441\u0442\u043e\u043c",
            "shuffle_questions": "1",
            "shuffle_answers": "1",
            "require_user_login": "0",
            "single_page": "1",
            "has_timer": "1",
            "published": "1",
            "num_of_question": "10",
            "num_of_taken": "57"
          }
        ]
       ),

    )

  } ),

  rest.get( 'http://mektebli.local/wp-json/symplequiz/v1/quiz/:quiz_id', ( req, res, ctx ) => {
    
    return res(

      ctx.status( 200 ),

      ctx.json( 
        {
          "quiz": {
            "id": "102",
            "title": "\u041f\u043e\u0437\u043d\u0430\u043d\u0438\u0435 \u043c\u0438\u0440\u0430 2\u043a\u043b\u0430\u0441\u0441 - \u041c\u0421\u041e\u21165",
            "description": "",
            "shuffle_questions": "1",
            "shuffle_answers": "1",
            "require_user_login": "0",
            "single_page": "1",
            "has_timer": "1",
            "result": "<h3 style=\\\"text-align: center;\\\"><strong>\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c!<\/strong><\/h3>\r\n<div class=\\\"quiz-text\\\">\u0412\u044b \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043b\u0438 \u0442\u0435\u0441\u0442 <strong>%%QUIZ_NAME%%<\/strong>. \u0412\u044b \u043d\u0430\u0431\u0440\u0430\u043b\u0438 <strong><em>%%POINTS_USER%%<\/em><\/strong> \u0431\u0430\u043b\u043b\u043e\u0432 \u0438\u0437 <strong><em>%%POINTS_TOTAL%%<\/em><\/strong> \u0431\u0430\u043b\u043b\u043e\u0432.<\/div>\r\n<table>\r\n<tbody>\r\n<tr>\r\n<td class=\\\"total-question-count\\\">\u041e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432:<\/td>\r\n<td>%%TOTAL_COUNT%%<\/td>\r\n<\/tr>\r\n<tr>\r\n<td class=\\\"answered-question-count\\\">\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u0435\u0448\u0451\u043d\u043d\u044b\u0445 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432:<\/td>\r\n<td>%%TOTAL_USER%%<\/td>\r\n<\/tr>\r\n<tr>\r\n<td class=\\\"correct-answers-count\\\">\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u0435\u0440\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432:<\/td>\r\n<td>%%CORRECT_USER%%<\/td>\r\n<\/tr>\r\n<tr>\r\n<td class=\\\"incorrect-answers-count\\\">\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432:<\/td>\r\n<td>%%INCORRECT_USER%%<\/td>\r\n<\/tr>\r\n<tr>\r\n<td class=\\\"total-time\\\">\u0422\u0430\u0439\u043c\u0435\u0440:<\/td>\r\n<td>%%TIMER_USER%%<\/td>\r\n<\/tr>\r\n<\/tbody>\r\n<\/table>\r\n%%ANSWERS%%",
            "published": "1"
          },
          "questions": {
            "1209": {
              "id": "1209",
              "quiz_id": "102",
              "description": "\u041a\u0442\u043e \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u043f\u0440\u0430\u0432\u0430 \u0434\u0435\u0442\u0435\u0439?",
              "type": "1",
              "media_type": "1",
              "answers": [
                {
                  "id": "6650",
                  "question_id": "1209",
                  "title": "\u0434\u0440\u0443\u0437\u044c\u044f",
                  "point": "0"
                },
                {
                  "id": "6651",
                  "question_id": "1209",
                  "title": "\u0432\u0440\u0430\u0447\u0438",
                  "point": "0"
                },
                {
                  "id": "6652",
                  "question_id": "1209",
                  "title": "\u0433\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043e",
                  "point": "1"
                }
              ]
            },
            "1210": {
              "id": "1210",
              "quiz_id": "102",
              "description": "\u041a\u0430\u043a\u043e\u0439 \u0433\u043e\u0440\u043e\u0434 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0442\u043e\u043b\u0438\u0446\u0435\u0439 \u043d\u0430\u0448\u0435\u0439 \u0441\u0442\u0440\u0430\u043d\u044b?",
              "type": "1",
              "media_type": "1",
              "answers": [
                {
                  "id": "6653",
                  "question_id": "1210",
                  "title": "\u0428\u0443\u0448\u0430",
                  "point": "0"
                },
                {
                  "id": "6654",
                  "question_id": "1210",
                  "title": "\u0413\u044f\u043d\u0434\u0436\u0430",
                  "point": "0"
                },
                {
                  "id": "6655",
                  "question_id": "1210",
                  "title": "\u0411\u0430\u043a\u0443",
                  "point": "1"
                }
              ]
            },
            "1211": {
              "id": "1211",
              "quiz_id": "102",
              "description": "\u041a\u043e\u0433\u0434\u0430 \u043e\u0442\u043c\u0435\u0447\u0430\u044e\u0442 \u0414\u0435\u043d\u044c \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0438 \u0432 \u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d\u0435?",
              "type": "1",
              "media_type": "1",
              "answers": [
                {
                  "id": "6656",
                  "question_id": "1211",
                  "title": "28 \u043c\u0430\u044f",
                  "point": "1"
                },
                {
                  "id": "6657",
                  "question_id": "1211",
                  "title": "9 \u043d\u043e\u044f\u0431\u0440\u044f",
                  "point": "0"
                },
                {
                  "id": "6658",
                  "question_id": "1211",
                  "title": "8 \u043d\u043e\u044f\u0431\u0440\u044f",
                  "point": "0"
                }
              ]
            },
            "1212": {
              "id": "1212",
              "quiz_id": "102",
              "description": "\u041a\u0430\u043a \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043e\u0431\u0449\u0430\u044f \u0441\u0443\u043c\u043c\u0430, \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u0430\u044f \u0432\u0441\u0435\u043c\u0438 \u0447\u043b\u0435\u043d\u0430\u043c\u0438 \u0441\u0435\u043c\u044c\u0438 \u0437\u0430 \u043c\u0435\u0441\u044f\u0446?",
              "type": "1",
              "media_type": "1",
              "answers": [
                {
                  "id": "6659",
                  "question_id": "1212",
                  "title": "\u043a\u0440\u0435\u0434\u0438\u0442",
                  "point": "0"
                },
                {
                  "id": "6660",
                  "question_id": "1212",
                  "title": "\u0434\u043e\u0445\u043e\u0434",
                  "point": "1"
                },
                {
                  "id": "6661",
                  "question_id": "1212",
                  "title": "\u0440\u0430\u0441\u0445\u043e\u0434",
                  "point": "0"
                }
              ]
            },
            "1213": {
              "id": "1213",
              "quiz_id": "102",
              "description": "\u041a\u0430\u043a\u0438\u0435 \u0442\u0440\u0430\u0442\u044b \u0441\u0435\u043c\u044c\u0438 \u043d\u0435 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043f\u0435\u0440\u0432\u043e\u0441\u0442\u0435\u043f\u0435\u043d\u043d\u044b\u043c\u0438?",
              "type": "1",
              "media_type": "3",
              "answers": [
                {
                  "id": "6698",
                  "question_id": "1213",
                  "title": "\u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b \u043f\u0438\u0442\u0430\u043d\u0438\u044f",
                  "point": "0"
                },
                {
                  "id": "6699",
                  "question_id": "1213",
                  "title": "\u043a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u043b\u0430\u0442\u0435\u0436\u0438",
                  "point": "0"
                },
                {
                  "id": "6700",
                  "question_id": "1213",
                  "title": "\u043f\u043e\u0435\u0437\u0434\u043a\u0430 \u0432 \u044d\u043a\u0437\u043e\u0442\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0443",
                  "point": "1"
                }
              ]
            },
            "1214": {
              "id": "1214",
              "quiz_id": "102",
              "description": "\u041a\u0430\u043a\u043e\u0432\u0430 \u043f\u043b\u043e\u0449\u0430\u0434\u044c \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0438 \u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d\u0441\u043a\u043e\u0433\u043e \u0433\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0430?",
              "type": "1",
              "media_type": "1",
              "answers": [
                {
                  "id": "6665",
                  "question_id": "1214",
                  "title": "86.6 \u0442\u044b\u0441. \u043a\u043c\u00b2",
                  "point": "1"
                },
                {
                  "id": "6666",
                  "question_id": "1214",
                  "title": "96.6 \u0442\u044b\u0441. \u043a\u043c\u00b2",
                  "point": "0"
                },
                {
                  "id": "6667",
                  "question_id": "1214",
                  "title": "66.6 \u0442\u044b\u0441. \u043a\u043c\u00b2",
                  "point": "0"
                }
              ]
            },
            "1215": {
              "id": "1215",
              "quiz_id": "102",
              "description": "\u041a\u043e\u0433\u0434\u0430 \u0431\u044b\u043b \u043f\u0440\u0438\u043d\u044f\u0442 \u041a\u043e\u043d\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0410\u043a\u0442 \u043e \u0433\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d\u0441\u043a\u043e\u0439 \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0438?",
              "type": "1",
              "media_type": "3",
              "answers": [
                {
                  "id": "6716",
                  "question_id": "1215",
                  "title": "18 \u043e\u043a\u0442\u044f\u0431\u0440\u044f 1991 \u0433\u043e\u0434\u0430",
                  "point": "1"
                },
                {
                  "id": "6717",
                  "question_id": "1215",
                  "title": "28 \u043c\u0430\u044f 1991 \u0433\u043e\u0434\u0430",
                  "point": "0"
                },
                {
                  "id": "6718",
                  "question_id": "1215",
                  "title": "12 \u043d\u043e\u044f\u0431\u0440\u044f 1991 \u0433\u043e\u0434\u0430",
                  "point": "0"
                }
              ]
            },
            "1216": {
              "id": "1216",
              "quiz_id": "102",
              "description": "\u041a\u0430\u043a\u043e\u0439 \u044f\u0437\u044b\u043a \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0433\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u044f\u0437\u044b\u043a\u043e\u043c \u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d\u0441\u043a\u043e\u0439 \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0438?",
              "type": "1",
              "media_type": "1",
              "answers": [
                {
                  "id": "6671",
                  "question_id": "1216",
                  "title": "\u0440\u0443\u0441\u0441\u043a\u0438\u0439",
                  "point": "0"
                },
                {
                  "id": "6672",
                  "question_id": "1216",
                  "title": "\u0430\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d\u0441\u043a\u0438\u0439",
                  "point": "1"
                },
                {
                  "id": "6673",
                  "question_id": "1216",
                  "title": "\u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439",
                  "point": "0"
                }
              ]
            },
            "1217": {
              "id": "1217",
              "quiz_id": "102",
              "description": "\u0412\u044b\u0431\u0435\u0440\u0438 \u0432\u0430\u043b\u044e\u0442\u0443 \u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d\u0430. ",
              "type": "1",
              "media_type": "1",
              "answers": [
                {
                  "id": "6674",
                  "question_id": "1217",
                  "title": "\u043b\u0438\u0440\u0430",
                  "point": "0"
                },
                {
                  "id": "6675",
                  "question_id": "1217",
                  "title": "\u043c\u0430\u043d\u0430\u0442",
                  "point": "1"
                },
                {
                  "id": "6676",
                  "question_id": "1217",
                  "title": "\u0440\u0443\u0431\u043b\u044c",
                  "point": "0"
                }
              ]
            },
            "1218": {
              "id": "1218",
              "quiz_id": "102",
              "description": "\u0427\u0442\u043e \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0433\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u043c \u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d\u0430?",
              "type": "1",
              "media_type": "1",
              "answers": [
                {
                  "id": "6677",
                  "question_id": "1218",
                  "title": "\u0433\u0435\u0440\u0431",
                  "point": "0"
                },
                {
                  "id": "6678",
                  "question_id": "1218",
                  "title": "\u043a\u043e\u043d\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u044f",
                  "point": "1"
                },
                {
                  "id": "6679",
                  "question_id": "1218",
                  "title": "\u0433\u0438\u043c\u043d",
                  "point": "0"
                }
              ]
            },
            "1219": {
              "id": "1219",
              "quiz_id": "102",
              "description": "\u0421\u0430\u043c\u043e\u0435 \u043b\u0443\u0447\u0448\u0435\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043e \u044d\u043a\u043e\u043d\u043e\u043c\u0438\u0438 - \u044d\u0442\u043e ... .",
              "type": "1",
              "media_type": "3",
              "answers": [
                {
                  "id": "6707",
                  "question_id": "1219",
                  "title": "\u043d\u0435 \u0442\u0440\u0430\u0442\u0438\u0442\u044c \u0434\u0435\u043d\u044c\u0433\u0438 \u0432\u043e\u043e\u0431\u0449\u0435",
                  "point": "0"
                },
                {
                  "id": "6708",
                  "question_id": "1219",
                  "title": "\u0438\u0437\u0431\u0435\u0433\u0430\u0442\u044c \u0440\u0430\u0441\u0442\u043e\u0447\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430",
                  "point": "1"
                },
                {
                  "id": "6709",
                  "question_id": "1219",
                  "title": "\u0431\u0440\u0430\u0442\u044c \u043a\u0440\u0435\u0434\u0438\u0442",
                  "point": "0"
                }
              ]
            },
            "1220": {
              "id": "1220",
              "quiz_id": "102",
              "description": "\u041a\u0442\u043e \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0438\u0442 \u043d\u0430\u0448\u0435\u0439 \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0439?",
              "type": "1",
              "media_type": "1",
              "answers": [
                {
                  "id": "6683",
                  "question_id": "1220",
                  "title": "\u043f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442",
                  "point": "1"
                },
                {
                  "id": "6684",
                  "question_id": "1220",
                  "title": "\u041c\u0438\u043b\u043b\u0438 \u041c\u0435\u0434\u0436\u043b\u0438\u0441",
                  "point": "0"
                },
                {
                  "id": "6685",
                  "question_id": "1220",
                  "title": "\u043f\u0440\u0435\u043c\u044c\u0435\u0440-\u043c\u0438\u043d\u0438\u0441\u0442\u0440",
                  "point": "0"
                }
              ]
            },
            "1221": {
              "id": "1221",
              "quiz_id": "102",
              "description": "\u041a\u0442\u043e \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u043d\u0430\u0448\u0443 \u0441\u0442\u0440\u0430\u043d\u0443?",
              "type": "1",
              "media_type": "3",
              "answers": [
                {
                  "id": "6701",
                  "question_id": "1221",
                  "title": "\u043f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442 \u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d\u0441\u043a\u043e\u0439 \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0438",
                  "point": "0"
                },
                {
                  "id": "6702",
                  "question_id": "1221",
                  "title": "\u0430\u0440\u043c\u0438\u044f \u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d\u0441\u043a\u043e\u0439 \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0438",
                  "point": "1"
                },
                {
                  "id": "6703",
                  "question_id": "1221",
                  "title": "\u043d\u0430\u0440\u043e\u0434 \u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d\u0441\u043a\u043e\u0439 \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0438",
                  "point": "0"
                }
              ]
            },
            "1222": {
              "id": "1222",
              "quiz_id": "102",
              "description": "\u041a\u043e\u0433\u0434\u0430 \u0432\u043f\u0435\u0440\u0432\u044b\u0435 \u0431\u044b\u043b\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0430 \u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430?",
              "type": "1",
              "media_type": "3",
              "answers": [
                {
                  "id": "6704",
                  "question_id": "1222",
                  "title": "28 \u043c\u0430\u044f 1918 \u0433\u043e\u0434\u0430",
                  "point": "1"
                },
                {
                  "id": "6705",
                  "question_id": "1222",
                  "title": "18 \u043e\u043a\u0442\u044f\u0431\u0440\u044f 1918 \u0433\u043e\u0434\u0430",
                  "point": "0"
                },
                {
                  "id": "6706",
                  "question_id": "1222",
                  "title": "28 \u0430\u043f\u0440\u0435\u043b\u044f 1991 \u0433\u043e\u0434\u0430",
                  "point": "0"
                }
              ]
            },
            "1223": {
              "id": "1223",
              "quiz_id": "102",
              "description": "\u0413\u0434\u0435 \u0431\u044b\u043b\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u044b \u043f\u0435\u0440\u0432\u044b\u0435 \u0431\u0443\u043c\u0430\u0436\u043d\u044b\u0435 \u0434\u0435\u043d\u044c\u0433\u0438?",
              "type": "1",
              "media_type": "1",
              "answers": [
                {
                  "id": "6692",
                  "question_id": "1223",
                  "title": "\u0432 \u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d\u0435",
                  "point": "0"
                },
                {
                  "id": "6693",
                  "question_id": "1223",
                  "title": "\u0432 \u0410\u043c\u0435\u0440\u0438\u043a\u0435",
                  "point": "0"
                },
                {
                  "id": "6694",
                  "question_id": "1223",
                  "title": "\u0432 \u041a\u0438\u0442\u0430\u0435",
                  "point": "1"
                }
              ]
            },
            "1224": {
              "id": "1224",
              "quiz_id": "102",
              "description": "\u041a\u0430\u043a\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0435\u0441\u0442\u044c \u043d\u0430 \u0432\u0441\u0435\u0445 \u0430\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d\u0441\u043a\u0438\u0445 \u043c\u043e\u043d\u0435\u0442\u0430\u0445?",
              "type": "1",
              "media_type": "3",
              "answers": [
                {
                  "id": "6710",
                  "question_id": "1224",
                  "title": "\u043a\u0430\u0440\u0442\u0430 \u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d\u0430",
                  "point": "1"
                },
                {
                  "id": "6711",
                  "question_id": "1224",
                  "title": "\u0433\u0435\u0440\u0431 \u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d\u0430",
                  "point": "0"
                },
                {
                  "id": "6712",
                  "question_id": "1224",
                  "title": "\u0444\u043b\u0430\u0433 \u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d\u0430",
                  "point": "0"
                }
              ]
            }
          },
          "answers": [
            {
              "id": "6650",
              "question_id": "1209",
              "title": "\u0434\u0440\u0443\u0437\u044c\u044f",
              "point": "0"
            },
            {
              "id": "6651",
              "question_id": "1209",
              "title": "\u0432\u0440\u0430\u0447\u0438",
              "point": "0"
            },
            {
              "id": "6652",
              "question_id": "1209",
              "title": "\u0433\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043e",
              "point": "1"
            },
            {
              "id": "6653",
              "question_id": "1210",
              "title": "\u0428\u0443\u0448\u0430",
              "point": "0"
            },
            {
              "id": "6654",
              "question_id": "1210",
              "title": "\u0413\u044f\u043d\u0434\u0436\u0430",
              "point": "0"
            },
            {
              "id": "6655",
              "question_id": "1210",
              "title": "\u0411\u0430\u043a\u0443",
              "point": "1"
            },
            {
              "id": "6656",
              "question_id": "1211",
              "title": "28 \u043c\u0430\u044f",
              "point": "1"
            },
            {
              "id": "6657",
              "question_id": "1211",
              "title": "9 \u043d\u043e\u044f\u0431\u0440\u044f",
              "point": "0"
            },
            {
              "id": "6658",
              "question_id": "1211",
              "title": "8 \u043d\u043e\u044f\u0431\u0440\u044f",
              "point": "0"
            },
            {
              "id": "6659",
              "question_id": "1212",
              "title": "\u043a\u0440\u0435\u0434\u0438\u0442",
              "point": "0"
            },
            {
              "id": "6660",
              "question_id": "1212",
              "title": "\u0434\u043e\u0445\u043e\u0434",
              "point": "1"
            },
            {
              "id": "6661",
              "question_id": "1212",
              "title": "\u0440\u0430\u0441\u0445\u043e\u0434",
              "point": "0"
            },
            {
              "id": "6665",
              "question_id": "1214",
              "title": "86.6 \u0442\u044b\u0441. \u043a\u043c\u00b2",
              "point": "1"
            },
            {
              "id": "6666",
              "question_id": "1214",
              "title": "96.6 \u0442\u044b\u0441. \u043a\u043c\u00b2",
              "point": "0"
            },
            {
              "id": "6667",
              "question_id": "1214",
              "title": "66.6 \u0442\u044b\u0441. \u043a\u043c\u00b2",
              "point": "0"
            },
            {
              "id": "6671",
              "question_id": "1216",
              "title": "\u0440\u0443\u0441\u0441\u043a\u0438\u0439",
              "point": "0"
            },
            {
              "id": "6672",
              "question_id": "1216",
              "title": "\u0430\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d\u0441\u043a\u0438\u0439",
              "point": "1"
            },
            {
              "id": "6673",
              "question_id": "1216",
              "title": "\u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439",
              "point": "0"
            },
            {
              "id": "6674",
              "question_id": "1217",
              "title": "\u043b\u0438\u0440\u0430",
              "point": "0"
            },
            {
              "id": "6675",
              "question_id": "1217",
              "title": "\u043c\u0430\u043d\u0430\u0442",
              "point": "1"
            },
            {
              "id": "6676",
              "question_id": "1217",
              "title": "\u0440\u0443\u0431\u043b\u044c",
              "point": "0"
            },
            {
              "id": "6677",
              "question_id": "1218",
              "title": "\u0433\u0435\u0440\u0431",
              "point": "0"
            },
            {
              "id": "6678",
              "question_id": "1218",
              "title": "\u043a\u043e\u043d\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u044f",
              "point": "1"
            },
            {
              "id": "6679",
              "question_id": "1218",
              "title": "\u0433\u0438\u043c\u043d",
              "point": "0"
            },
            {
              "id": "6683",
              "question_id": "1220",
              "title": "\u043f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442",
              "point": "1"
            },
            {
              "id": "6684",
              "question_id": "1220",
              "title": "\u041c\u0438\u043b\u043b\u0438 \u041c\u0435\u0434\u0436\u043b\u0438\u0441",
              "point": "0"
            },
            {
              "id": "6685",
              "question_id": "1220",
              "title": "\u043f\u0440\u0435\u043c\u044c\u0435\u0440-\u043c\u0438\u043d\u0438\u0441\u0442\u0440",
              "point": "0"
            },
            {
              "id": "6692",
              "question_id": "1223",
              "title": "\u0432 \u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d\u0435",
              "point": "0"
            },
            {
              "id": "6693",
              "question_id": "1223",
              "title": "\u0432 \u0410\u043c\u0435\u0440\u0438\u043a\u0435",
              "point": "0"
            },
            {
              "id": "6694",
              "question_id": "1223",
              "title": "\u0432 \u041a\u0438\u0442\u0430\u0435",
              "point": "1"
            },
            {
              "id": "6698",
              "question_id": "1213",
              "title": "\u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b \u043f\u0438\u0442\u0430\u043d\u0438\u044f",
              "point": "0"
            },
            {
              "id": "6699",
              "question_id": "1213",
              "title": "\u043a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u043b\u0430\u0442\u0435\u0436\u0438",
              "point": "0"
            },
            {
              "id": "6700",
              "question_id": "1213",
              "title": "\u043f\u043e\u0435\u0437\u0434\u043a\u0430 \u0432 \u044d\u043a\u0437\u043e\u0442\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0443",
              "point": "1"
            },
            {
              "id": "6701",
              "question_id": "1221",
              "title": "\u043f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442 \u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d\u0441\u043a\u043e\u0439 \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0438",
              "point": "0"
            },
            {
              "id": "6702",
              "question_id": "1221",
              "title": "\u0430\u0440\u043c\u0438\u044f \u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d\u0441\u043a\u043e\u0439 \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0438",
              "point": "1"
            },
            {
              "id": "6703",
              "question_id": "1221",
              "title": "\u043d\u0430\u0440\u043e\u0434 \u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d\u0441\u043a\u043e\u0439 \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0438",
              "point": "0"
            },
            {
              "id": "6704",
              "question_id": "1222",
              "title": "28 \u043c\u0430\u044f 1918 \u0433\u043e\u0434\u0430",
              "point": "1"
            },
            {
              "id": "6705",
              "question_id": "1222",
              "title": "18 \u043e\u043a\u0442\u044f\u0431\u0440\u044f 1918 \u0433\u043e\u0434\u0430",
              "point": "0"
            },
            {
              "id": "6706",
              "question_id": "1222",
              "title": "28 \u0430\u043f\u0440\u0435\u043b\u044f 1991 \u0433\u043e\u0434\u0430",
              "point": "0"
            },
            {
              "id": "6707",
              "question_id": "1219",
              "title": "\u043d\u0435 \u0442\u0440\u0430\u0442\u0438\u0442\u044c \u0434\u0435\u043d\u044c\u0433\u0438 \u0432\u043e\u043e\u0431\u0449\u0435",
              "point": "0"
            },
            {
              "id": "6708",
              "question_id": "1219",
              "title": "\u0438\u0437\u0431\u0435\u0433\u0430\u0442\u044c \u0440\u0430\u0441\u0442\u043e\u0447\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430",
              "point": "1"
            },
            {
              "id": "6709",
              "question_id": "1219",
              "title": "\u0431\u0440\u0430\u0442\u044c \u043a\u0440\u0435\u0434\u0438\u0442",
              "point": "0"
            },
            {
              "id": "6710",
              "question_id": "1224",
              "title": "\u043a\u0430\u0440\u0442\u0430 \u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d\u0430",
              "point": "1"
            },
            {
              "id": "6711",
              "question_id": "1224",
              "title": "\u0433\u0435\u0440\u0431 \u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d\u0430",
              "point": "0"
            },
            {
              "id": "6712",
              "question_id": "1224",
              "title": "\u0444\u043b\u0430\u0433 \u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d\u0430",
              "point": "0"
            },
            {
              "id": "6716",
              "question_id": "1215",
              "title": "18 \u043e\u043a\u0442\u044f\u0431\u0440\u044f 1991 \u0433\u043e\u0434\u0430",
              "point": "1"
            },
            {
              "id": "6717",
              "question_id": "1215",
              "title": "28 \u043c\u0430\u044f 1991 \u0433\u043e\u0434\u0430",
              "point": "0"
            },
            {
              "id": "6718",
              "question_id": "1215",
              "title": "12 \u043d\u043e\u044f\u0431\u0440\u044f 1991 \u0433\u043e\u0434\u0430",
              "point": "0"
            }
          ]
        }
       ),

    )

  } ),

)