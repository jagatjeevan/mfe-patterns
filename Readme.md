# Run time + Reverse Composition
## Context:
We have a monolithic codebase inside spa folder. We need to slice our codebase w.r.t routes. One mfe can be product list and product details while other can be the whole application. This way we can gradually move to separate mfes.

## Tasks:
- Create a server which can redirect the requests
- Separate out the products related code to separate folder within the repo.
- Check all functionality is working.
- We have used context to pass data from page to page. Ignore the data related things until it is breaking the application.
- We have a dummy repo. Use the repo for new mfe rather than creating using create-react-app. This is to help us with time involved incase of incompatibility of versions.

## Running the application
```
cd spa
npm install
npm start
```

The application would start on `http://localhost:3000`.

## Running different mfes
```
cd <folder>
npm install
npm start
```

To check which port it opens, check for the `<folder>/config/wepack.dev.js` file.