# library-back

## Installation

### Required programs

For this application, the requirement is Node 12 or newer. There are many guides online for installing Node. I personally recommend [this one from Microsoft](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows).

### Installing the application

After installing Node (hopefully successfully), the order of installation goes as such:

1. Compiling the API. This is done by running _npm run build_ in the root of the project folder with a terminal of your choice.
2. ???
3. Profit.

### Final prerequisites

If you wish to run this on your own machine, be prepared to create a free MongoDB Atlas account if you don't already have one. After, you should create a _.env_-file, with a structure something like below, replacing all the details within brackets with your own. Note that the port is where the server will run, though you can change this if you wish to run it on a different port.

`MONGODB_URI=mongodb+srv://<user>:<password>@<cluster address>/library?retryWrites=true&w=majority PORT=8080`

## Executing

### Production

To run the API in production mode, like when deploying to Heroku or other hosting providers, you can run _npm start_ which starts the backend in production mode. After, you can navigate to the domain you deployed the application to in order to see if it has appeared there.

### Development

If you want to develop this API further, or just see what's going on under the hood, you can run _npm run dev_ in order to really see all the magic.

### Heroku deployment

This backend is now available at [https://eliaspeteri-library-back.herokuapp.com/](https://eliaspeteri-library-back.herokuapp.com/api/books), and free to browse by anyone. If not, please refer [here to see how to get your own copy](#installation).

## Troubleshooting

### Backend will not run or is outdated

You need to compile the TypeScript project files back into CommonJS for Node to be able to read them. You can do this by simply running `npm run build`.

### Mongoose can't connect to a database

Remember to add your connection URI to the environment variable file.
