# Koverj Falcon server

Server for locators

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Usage

- `npm install && npm run build`: build the project
- `npm run start:dev`: start development server watching changes in ./src
- `npm start`: start production server running the compiled app in ./lib
- `npm run build:docker`: build Docker container image
- `npm run start:docker`: launch Docker container using the image


Accepts:

```
{
  "buildId": 'a601ff0c-925b-4e06-beef-3882a628bdf7',
  "testName": "testTodoDeletedIfEmptyName()",
  "locators": [
    {
      "url": "http://todomvc.com/examples/typescript-angular/#/",
      "locator": "body > section > header > form > input"
    }
   ]
}
```

url -  required
locator - required