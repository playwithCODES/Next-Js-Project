This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Next JS Routing

1. Simple Route
- create a folder inside /app directory
- create a `page.js` file inside this folder.
- Add a default export component.

2. Nested Route
- courses/frontend/react
- courses/frontend/vue
- courses/frontend/laravel
- courses/frontend/node-express

3. Dynamic Route
- Create a folder enclosed by []->`products/[id]`
- Route: `products/:id`

4. Nested dynamic Route
- Route:`products/:id/reviews/:reviewId`

5. Catch all segments
- Folder Structure:`/news/[...slug]`


6. Route Groups
- Route `login`,`register`
- But it should be inside  `/auth` folder
- name the `/auth` folder as `(auth)`

7. Private Folders

- `/_<folder_name>`->`/_components`

8. Not found route/page
- app`/not-found.js`

## NextJS File System

- page.js (Routing)
- not-found.js(Not Found page)
- layout.js/layout.tsx
- loading.js
- error.js

## Nested Layout

- Use layout inside a route

## Params and Search Params

- params:dynamic route parameter (id), page.js & layout.js
- searchParams:query parameter(?q=test), available only on page.js

## Metadata
- Metadata  api is used to define metadata of page
- can be used in page.js/layout.js
- Useful for SEO
- static:metadata 
- dynamic:generateMetadata

## Auth
- Credentials-> Login -> token(API) -> Store locally in the browser
- If token->User is logged in->Use this token in API request
- Else -> USer is not logged in

## Storage
- Local Storage:
  - Size:5 MB
  - Available only on browser
  - Data is stored forever

- Session Storage:
   - Size: 5 MB
   - Available only on browser
   - Data is cleared on tab close

- Cookie Storage:
    - Size:4 KB
    - Available on browser & server
    - Data is stored permanently , with expiry date
 

 ## HTTP Requests
- Hypertext Transfer Protocol
- GET:Fetch data(Read)
- POST:Create Data(Create)
- PUT:Update Data(Update)
- DELETE:Delete Head(Delete)

- PATCH:Partial Head
- HEAD

======================================= 

- error.js
- File hierarchy
- Rendering

## Global State Management(Redux)

The three concepts of redux :
1.Store:It stores data, one and only store, to maintain single source of truth 
2.Action:
3.Reducer:


============================================

- Form(React Hook Form)
   - register has 4 things which are name, ref, onChange and onBlur

- API integration (using axios)
- Global State Management(Redux)





