# Personal Website
My Website Link: https://andy-qian123.github.io/Personal-Web/build/index.html .
</br>
This is my personal website. built using modern JavaScript, base on create-react-app with React-Router, Less, Ant Design, GitHub actions, and many other userful technologies.

# Adapting this Project
If you want to build your own personal website from this project, it will very faster. Please feel free to reach out to me by filing an issue or emailing me at qianyuandream@gmail.com for help configuring your project.

# Dependencies
My development environment is MacOS. using Visual Studio.
Tested with: node == v12.16.0 and optional brew for managing node versions.(windows can use nvm for managing node versions.)

# Set up
To download the repository and install dependencies, run the following commands:
`git clone https://github.com/ANDY-QIAN123/Personal-Web.git`
`cd Personal-Web`
`nvm install`
`npm install  or  yarn install`

# Running

Run the following command to build the react application and serve it with fast refresh:
`npm start`
or
`yarn start`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Deploying
<h2>Deploying to Github Pages</h2>
1. Modify the environmental variables and git remote url in .github/workflows/github-pages.yml.
2. Modify homepage in package.json to point to where you plan to host your site. If you do not plan on using a custom domain name, it should look like https://[your-gh-username].github.io/[repository-name - default:personal-site]/
3. If you plan on using a custom domain, modify public/CNAME. If you don't, delete public/CNAME.
Make a commit to main and push your changes. That's it.

<h2>Static Export</h2>
To statically export the site without deploying to github pages, delete or disable .github/workflows/github-pages.yml and run npm run predeploy. This generates a static export of the website as personal-site/build/. Copy this and self-host or deploy to a CDN.