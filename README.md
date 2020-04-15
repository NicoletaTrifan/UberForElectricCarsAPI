


# Uber For Electric Cars API

This is the documentation for the Uber For Electric Cars API.

# Endpoints

The list below shows a list of all endpoints currently available in the API for each module.

>For all request there is a `Boolean` field in the body called "success". If the value of the field is `false` then besides the error code the field "message" contains the reason of the failed request.

# Auth Module


##  Login
### Endpoint
`POST /auth/login` 

Auth: None

#### Request Body

|FieldName		 |Datatype						 |Required					   |
|----------------|:-------------------------------:|:-----------------------------:|
|email			 |String  			         |yes			               |
|password		 |String		             	 |yes    				       |

#### Example Request Body:

```json
{
	"email": "user@test.com",
	"password": "user"
}
```


#### Response


|FieldName		 |Datatype						 |
|----------------|-------------------------------|
|success|Boolean  			         |
|message|String or null		             	 |



#### Headers:

`Auth-Token: <String>`
`Refresh-Token: <String>`

#### Example Response

```json
{
	"success":  true
}
```

Or
```json
{
	"success":  false,
	"message":  "Email or password incorrect"
}
```

#### Possible error codes and messages
```json 
404 Not Found - "Email or password incorrect"
403 Forbidden - "Email is not confirmed yet"
```



## Register
### Endpoint
`POST /auth/register` 

Auth: None

#### Request Body


|FieldName		 |Datatype						 |Required					   |
|----------------|:-------------------------------:|:-----------------------------:|
|lastName|String  			         |yes			               |
|firstName|String		             	 |yes    				       |
|phoneNumber|String|yes
|email|String| yes
|password|String| yes|

#### Example Request Body:

```json
{
	"lastName": "Black",
	"firstName": "Estelle",
	"phoneNumber": "+40777777777",
	"email": "user@test.com",
	"password": "user"
}
```

#### Response Body


|FieldName		 |Datatype						 |
|----------------|-------------------------------|
|success|Boolean  			         |
|message|String or null		             	 |


#### Example Response Body

```json
{
	"success":  true
}
```

Or
```json
{
	"success":  false,
	"message":  "User already exists!"
}
```

#### Possible error codes and messages
```json 
409 Conflict - "User already exists!"
```

## Forgot Password
### Endpoint
`POST /auth/forgotPassword` 

Auth: None

#### Request Body


|FieldName		 |Datatype						 |Required					   |
|----------------|:-------------------------------:|:-----------------------------:|
|email|String  			         |yes			               |
|method|String("sms"/"email")		             	 |yes    				       |

#### Example Request Body:

```json
{
	"email": "user@test.com",
	"method": "email"
}
```

#### Response Body


|FieldName		 |Datatype						 |
|----------------|-------------------------------|
|success|Boolean  			         |
|message|String or null		             	 |


#### Example Response Body

```json
{
	"success":  true
}
```

Or
```json
{
	"success":  false,
	"message":  "There already exists a request for this email. Please try again in few minutes"
}
```

#### Possible error codes and messages
```json 
409 Conflict - "There already exists a request for this email. Please try again in few minutes"
400 Bad Request - "Invalid method"
403 Forbidden - "Email is not confirmed yet"
```

## Validate Forgot Password
### Endpoint
`POST /auth/forgotPassword/validate` 

Auth: None

#### Request Body


|FieldName		 |Datatype						 |Required					   |
|----------------|:-------------------------------:|:-----------------------------:|
|email|String  			         |yes			               |
|code|String		             	 |yes    				       |

#### Example Request Body

```json
{
	"email": "user@test.com",
	"code": "1234"
}
```

#### Response Body


|FieldName		 |Datatype						 |
|----------------|-------------------------------|
|success|Boolean  			         |
|message|String or null		             	 |

#### Headers:

`Auth-Token: <String>`

>Keep in mind that this Auth-Token will only be available for 10 minutes


#### Example Response Body

```json
{
	"success":  true
}
```

Or
```json
{
	"success":  false,
	"message":  "The code has expired. Please try again. Keep in mind that the code is available only 10 minutes"
}
```

#### Possible error codes and messages
```json 
401 Unauthorized - "The code has expired. Please try again. Keep in mind that the code is available only 10 minutes"
404 Not Found - "The code is not valid. Please try again"
```

## Refresh Auth Token
### Endpoint
`GET /auth/refreshToken` 

Auth: (Header) `Refresh-Token: <String>`

#### Request Body
```json
{

}
```

#### Response Body


|FieldName		 |Datatype						 |
|----------------|-------------------------------|
|success|Boolean  			         |
|message|String or null		             	 |

#### Headers:

`Auth-Token: <String>`



#### Example Response Body

```json
{
	"success":  true
}
```

Or
```json
{
	"success":  false,
	"message":  "Token not found"
}
```

#### Possible error codes and messages
```json 
403 Forbidden- "Invalid token"
401 Unauthorized - "Token not found"
```

# User Module

## User Profile
### Endpoint
`GET /profile` 

Auth: (Header) `Auth-Token: <String>`

#### Request Body
```json
{

}
```

#### Response Body


|FieldName		 |Datatype						 |
|----------------|-------------------------------|
|success|Boolean  			         |
|message|String or null		             	 |
|user|User or null|


#### Example Response Body

```json
{
"success":  true,
"user":  {
"firstName":  "Neville",
"lastName":  "Bradlee",
"listOfCars":  [
{
	"id":  "5d161beec9eef4c250d9d225",
	"make":  "BMW",
	"carModel":  "i3s",
	"edition":  "94 Ah",
	"power":  135,
	"acceleration":  6.9,
	"topSpeed":  160,
	"torque":  270,
	"seats":  4,
	"weight":  1340,
	"width":  1791,
	"imagesData":  {
	"image":  {
		"id":  "5d9b3a0396801cc78502c3fc",
		"url":  "https://cars.chargetrip.io/5d9b3a0396801cc78502c3fc.png",
		"width":  1536,
		"height":  864,
		"type":  "image"
	},
	"image_thumbnail":  {
		"id":  "5d9b3a136731e7d8454f925d",
		"url":  "https://cars.chargetrip.io/5d9b3a0396801cc78502c3fc-1570454033.png",
		"width":  131,
		"height":  72,
		"type":  "image_thumbnail"
	},
	"brand":  {
		"id":  "5d9b3a0396801c8eb602c3fb",
		"url":  "https://cars.chargetrip.io/5d9b3a0396801c8eb602c3fb.png",
		"width":  768,
		"height":  432,
		"type":  "brand"
	},
	"brand_thumbnail":  {
		"id":  "5d9b3a116731e718854f925c",
		"url":  "https://cars.chargetrip.io/5d9b3a0396801c8eb602c3fb-1570454033.png",
		"width":  56,
		"height":  24,
		"type":  "brand_thumbnail"
	}
	}
},
],
"listOfChargingStations":  []
}
}
```

Or
```json
{
	"success":  false,
	"message":  "Token not found"
}
```

#### Possible error codes and messages
```json 
403 Forbidden- "Invalid token"
401 Unauthorized - "Token not found"
401 Unauthorized - "Token Expired"
```

## Change Password
### Endpoint
`POST /profile/changePassword` 

Auth: (Header) `Auth-Token: <String>`

#### Request Body

|FieldName		 |Datatype						 |
|----------------|-------------------------------|
|oldPassword|String or null  			         |
|newPassword|String		             	 |

#### Example Request Body
```json
{
	"oldPassword":  "password",
	"newPassword":  "p@ssword"
}
```

#### Response Body


|FieldName		 |Datatype						 |
|----------------|-------------------------------|
|success|`Boolean`  			         |
|message|`String or null`		             	 |


#### Example Response Body

```json
{
	"success":  true
}
```

Or
```json
{
	"success":  false,
	"message":  "Token not found"
}
```

#### Possible error codes and messages
```json 
403 Forbidden- "Invalid token"
401 Unauthorized - "Token not found"
401 Unauthorized - "Token Expired"
401 Unauthorized - "Old Password incorrect"
```

## Add Car
### Endpoint
`POST /profile/addCar` 

Auth: (Header) `Auth-Token: <String>`

#### Request Body

|FieldName		 |Datatype						 |
|----------------|-------------------------------|
|carId|String		             	 |

#### Example Request Body
```json
{
	"carId":  "5dcd60dd0b58c082922792ea"
}
```

#### Response Body


|FieldName		 |Datatype						 |
|----------------|-------------------------------|
|success|Boolean  			         |
|message|String or null		             	 |


#### Example Response Body

```json
{
	"success":  true
}
```

Or
```json
{
	"success":  false,
	"message":  "Token not found"
}
```

#### Possible error codes and messages
```json 
403 Forbidden- "Invalid token"
401 Unauthorized - "Token not found"
401 Unauthorized - "Token Expired"
```

## LogOut
### Endpoint
`POST /profile/logout` 

Auth: (Header) `Auth-Token: <String>`

#### Request Body

```json
{

}
```

#### Response Body


|FieldName		 |Datatype						 |
|----------------|-------------------------------|
|success|Boolean  			         |
|message|String or null		             	 |


#### Example Response Body

```json
{
	"success":  true
}
```

Or
```json
{
	"success":  false,
	"message":  "Token not found"
}
```

#### Possible error codes and messages
```json 
403 Forbidden- "Invalid token"
401 Unauthorized - "Token not found"
401 Unauthorized - "Token Expired"
```

# Station Module


##  Get All Stations
### Endpoint
`GET /station/getAll` 

Auth: (Header) `Auth-Token: <String>`

#### Request Body


```json
{

}
```


#### Response


|FieldName		 |Datatype						 |
|----------------|-------------------------------|
|success|Boolean  			         |
|message|String or null		             	 |
|data| JSON or null |



#### Example Response

```json
{
	"success":  true,
	"data" : "stationAround" : {
		[
			Station
		]
	}
}
```


Or
```json
{
	"success":  false,
	"message":  "Token not found"
}
```

#### Possible error codes and messages
```json 
403 Forbidden- "Invalid token"
401 Unauthorized - "Token not found"
401 Unauthorized - "Token Expired"
```

##  Get Nearby Stations
### Endpoint
`GET /station/getNearby` 

Auth: (Header) `Auth-Token: <String>`

#### Request Body

|FieldName		 |Datatype						 |Required					   |
|----------------|:-------------------------------:|:-----------------------------:|
|latitude|Float  			         |yes			               |
|longitude|Float		             	 |yes    				       |
|distance|Integer|no (default 5000)
|amenities|Array< String >| no

#### Example Request Body
```json
{
	"latitude" : 4.8979755,
	"longitude" : 52.3745403
}
```


#### Response


|FieldName		 |Datatype						 |
|----------------|-------------------------------|
|success|Boolean  			         |
|message|String or null		             	 |
|data| Array<[Station](#station)> or null |



#### Example Response

```json
{
	"success":  true,
	"data" : "stationAround" : {
		[
			Station
		]
	}
}
```


Or
```json
{
	"success":  false,
	"message":  "Token not found"
}
```

#### Possible error codes and messages
```json 
403 Forbidden- "Invalid token"
401 Unauthorized - "Token not found"
401 Unauthorized - "Token Expired"
```

### Station Object <a id="station"></a>

|Field name|Type|Description
|-|-|-|
|id|String| ChargeTrip ID
|externalID|String| API database ID
|name|String| Name of the charging Stations
|location|[Location](#Location)|The geo location coordinates
|elevation|Int|The elevation (altitude) level in m above sea level
|evse|Array< [Evse](#Evse) >|An array of embedded Charger
|chargers|Array < [Charger](#Charger) >|Groups of EVSEs by power and type
|operator| [Operator](#Operator) or null|The ref to the Operator collection
|owner|[Operator](#Operator) or null|The ref to the Operator collection
|address|[Adress](#Adress)|The embedded Address
|amenities|[Amenities](#Amenities)|An object with amenity types as key and number of amenities as value
|realtime|Boolean|A flag which indicates if the station has realtime information about the availability of the connectors
|private|Boolean|A flag which indicates if the station is on a private property
|openingHours|null or Array< String >|The time of day for each day of week when the charging station can be used or null in case is unknown (or if 24/7 is true or null)
|open24h|Boolean or null|A flag which indicates if the station is opened 24/7 (if null then true)
|timezone|String|The timezone for the location where the charging station is
|speed|[StationSpeedType](#StationSpeedType)|The global charging speed type for the station
|status|[EvPlugStatus](#EvPlugStatus)|The global status for the station
|review|[ReviewStats](#ReviewStats)|Stats info for the reviews of a station
|createdAt|String|The created at datetime
|updatedAt|String|The last modified at datetime

### Evse <a id="Evse"></a>
|Field name|Type|Description
|-|-|-|
|externalId|String
|evseId|String
|physicalReference|String 
|connectors|Array < [Connector](#Connector) >  
|paymentMethod| String or null
|price|[Price](#Price) or null

### Charger <a id="Charger"></a>
|Field name|Type|Description
|-|-|-|
|type|String
|power|Float
|price|String or null
|speed|[StationSpeedType](#StationSpeedType)
|total|Int|Total number of chargers

### Operator <a id="Operator"></a>
|Field name|Type|Description
|-|-|-|
|id|  String
|externalId|String 
|name|String 
|country|String
|contact|[Contact](#Contact)

### Contact <a id="Contact"></a>
|Field name|Type|Description
|-|-|-|
|phone|String    
|email|String 
|website| String 
|facebook|String 
|twitter|String 
|properties|String 

### Address <a id="Address"></a>
|Field name|Type|Description
|-|-|-|
|continent|String
|country|String
|county|String
|city|String
|street|String
|number|String
|postalCode|String
|what3Words|String
|formattedAddress|Array< String >

### StationSpeedType(ENUM) <a id="StationSpeedType"></a>
|Field name|
|-|
|"slow"|
|"fast"|
|"turbo"|

### EvPlugStatus(ENUM)  <a id="EvPlugStatus"></a>
|Field|
|-|
|"free"|
|"busy"|
|"error"|
|"unknown"|


### ReviewStats  <a id="ReviewStats"></a>
|Field name|Type|Description
|-|-|-|
|rating|Float
|count|Int

### Location  <a id="Location"></a>
|Field name|Type|Description
|-|-|-|
|type|String ("Point")
|coordintes|Array< Float >| coordinates[0] = latitude, coordinates[1] = longitude

### Amenities <a id="Amenities"></a>

|Field name|Type|Description
|-|-|-|
|restaurant|Integer|
|bathroom|Integer|
|supermarket|Integer|
|playground|Integer| 
|coffee|Integer|
|shopping|Integer| 
|museum|Integer|
|hotel|Integer|
|park|Integer|
|pharmacy|Integer| 

### Price <a id="Price"></a>

|Field name|Type|Description
|-|-|-|
|value|Float|
|currency|String|

### Connector <a id="Connector"></a>

|Field name|Type|Description
|-|-|-|
|externalId|String|Id from API
|ocpiId|String or null|
|power|Integer|
|amps|Integer| 
|voltage|Integer|
|type|String|