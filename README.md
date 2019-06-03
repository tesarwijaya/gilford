# gilford

a [Sails v1](https://sailsjs.com) application

### How to run

- Fork the repo
- run `docker-compose -f docker-compose.yaml up`
- your app run in `localhost:3000`

### Running Test

- run `yarn test` or `npm run test` either from inside container or your local machine please be sure to install dependencies before if you do so


### API Docs

```
# Post a new tax
curl --request POST \
  --url http://localhost:3000/tax \
  --header 'content-type: application/json' \
  --data '{
	"name": "Lucky Stretch",
	"code": 2,
	"price": 1000
}'
```

```
# Get your bill
curl --request GET \
  --url http://localhost:3000/tax

# Response is gonna be like this
{
  "priceSubTotal": 2150,
  "taxSubTotal": 130.5,
  "Grantotal": 2280.5,
  "items": [
    {
      "createdAt": 1559489842074,
      "updatedAt": 1559489842074,
      "id": 1,
      "name": "Movie",
      "code": 3,
      "price": 150,
      "type": "Entertainment",
      "refundable": false,
      "tax": 0.5,
      "amount": 150.5
    },
    {
      "createdAt": 1559490100770,
      "updatedAt": 1559490100770,
      "id": 2,
      "name": "Big Mac",
      "code": 1,
      "price": 1000,
      "type": "Food & Beverages",
      "refundable": true,
      "tax": 100,
      "amount": 1100
    },
    {
      "createdAt": 1559490127979,
      "updatedAt": 1559490127979,
      "id": 3,
      "name": "Lucky Stretch",
      "code": 2,
      "price": 1000,
      "type": "Tobacco",
      "refundable": false,
      "tax": 30,
      "amount": 1030
    }
  ]
}
```
