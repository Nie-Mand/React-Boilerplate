This a React Boilerplate:
+ bundled with Snowpack
+ supports Tailwind
+ supports Typescript
+ packed with react router dom
+ packed with Redux, and react Redux


## Adding a New Page (Route)
1. Create a Folder inside **src/pages** with the name of the page
2. the folder contains an **index.tsx** which exports the component representing the page
3. the folder can contains styling files (CSS/Sass) and helper functions and components
4. add a Route Object to **src/app.route.ts** wich contains 
   1. **path**: rooute of the page
   2. **component**: lazy imported component from the pages folder
   3. **roles**: array of allowed roles to access the route (empty for public) 

## Redux
+ You can add an Action file inside **src/redux/actions** using the createAction function that takes the Action constant and returns an object:
  + cte: Constant of the Action to use in the Switch Statement
  + run: An Action Creator to dispatch
+ You can add a Reducer file inside **src/redux/reducers** then import it in **src/redux/reducers/index.ts**