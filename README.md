## Getting Started

Pre reqs:
Ensure that node.js is installed on your device. Link to download if you have not done so:(https://nodejs.org/en/download/package-manager)

First, run the following command to install node_modules:

```
npm install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


## Google Spreadsheet Guide/Documentation

The google spreadsheet serves as the content management system. It stores all upcoming events. Please read this guide on how to fill it in.

- Please ensure events are in order in terms of date from top to bottom. Any events that are in the past may be deleted.


## Merging Changes With Main

Finished a task and want to merge your changes with development branch?

Follow this:

1. First, ensure your branch and development branch have the latest changes in your local repository
```
git pull origin your-branch-name
```
this command ensures that your local repo pulls the latest repository. Now switch to dev branch and ensure that it is up to date

```
git checkout development
```
```
git pull origin development
```
2. Next, merge your branch with development
```
git merge origin -Development
```
3. Resolve any conflicts if neccsary

In the event that conflicts emerge, git will notify you. You must resolve these manually.

4. Push your changes

Push your changes now. This will create a pull request!
```
git add .
git commit -m "Task completion #"
git push origin 
```


 
