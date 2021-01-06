
## CONTRIBUTING TO DOCS
1. We are using webpack to package the frontend assets of the documentation, and all of the
    documentation assets are inside the /docs folder
- any changes on the styles/scripts should be done inside the same folder
- any changes on the markups should also be done inside the same folder
- any additional files should be imported on the main entry file ```webpack.js``` with corresponding loader if doesn't exist yet

2. start the live server. Alternatively, you can navigate to /public and use an npm package called 'serve'. [check its docs here](https://www.npmjs.com/package/serve)
```
yarn run server
```

3. changes on the styles should reflect once sass files are compiled into css. To do this, run the script. However since we are utilizing webpack, just run
```
yarn run docs:build
```

4. before commiting the changes you've made, make sure you build the /docs first. This will ouput the /public folder but all assets are minified for performance purposes. This folder is the one exposed to users and not the /docs folder
```
yarn run docs:build
```


## CONTRIBUTING A DEPARTMENT

1. when contributing a department, 
- add a department type into the object that is exported on /src/models/_departments.js

2. give the new department at least 2 properties, id and the department name
- if the department name has space, enclose it inside 2 double quotes
- give it a least 5 starting products types with images. (follow the guidlines on how to contribute a product)



## CONTRIBUTING A PRODUCT / PRODUCT IMAGES (existing department)

1. when contributing a product, 
- add a product type into a specific department's array on /src/models/_departments.js
- once this is done, proceed in adding the product image
- NOTE: make sure it is relative to its department
    

2. when contributing images for existing product type,
- images should be added in its respective department folder
- images should have a creative commons license. Use Google's advance search capabilities
- include the src url of the image for checking as well
- should be png w/ transparent background
- should be in 3 different sizes (150x150, 300x300, 600x600)
- once this is done, proceed in naming your image
Example: 
    if a product type is on "Health and Beauty" department,
    add it on the folder 'healthandbeauty' (department id)

3. image name should be the product type 
- name should be all small letters 
- name should w/o spaces and special characters (except _)
- name should be followed by _ then its size 150, 300, 600
