Note:

visit recoiljs.org to know more about recoil

the main idea of recoil is instead of normal state you create a shared state.that is we create a state that can be ued by multiple components rather than using in its own component only like usestate.

shared state is also created by providers and context ,but the drawback with them is that they render all the components.To overcome this issue,we use recoil that create the shared state which can be accesed by all components and can render only the requiired compnent instead of rendering the all components.

1.)yarn add recoil

2.)create app component and import it in index.js,use it as root component

3.)import RecoilRoot from recoil in idnex.js and wrap all components under RecoilRoot component

note:

check in inspect->components section.recoil creates the provider,but you wnt see values init instead you see only methods.These methods actually creates publisher and sunscriber model for our compoonent so that it doesnt change the value instead it will fire events whenever any changes occurs.

4.)create recoil folder under src and create counterState.js file init.

5.)create counter.js file in src and create counter component init and import it in app.js as component.

6.)in counter.js,create buttons that increases/decreases the counter value using useState() hook which decribe the regular implementation ofthe state instead of shared state.

7.)comment the usestate hook and import useRecoilState hook from recoil and also import counterState.js file init and use the useRecoilState hook to change the state of count.

8.)create countDislay.js file under src,create the countDisplay component init.THis component should display count value using the useRecoilState Hook and then import it in app.js as a component.

9.)create the counterdoubleselector that multiplies the counterState value by 2 by importing selector form recoil in counterState.js file.

10.)create countDoubleDisplay.js file under src and create the countDoubleDiplay component that returns the countValue as doubled by importing counterDoubleSelector from counterState.js and useRecoilState hook and import this as component in app.js

NOTE:

useRecoilState is used When we want to both read & edit a state

useRecoilValue is used When we want to read a state.
which may increase the performance

usesetRecoilState is used When we want to edit a state.

useResetRecoilState() is used When we want to reset a state value.

11.)change useRecoilState to useRecoilValue in all components.

reason Why hooks are available is that we can reduce logic into reusable pieces which can be used anywhere.

12.)create Re component in ReusableHook.js and import it as component in app.js

13.)In ReusableHook.js,create a fetch request in useEffecthook and return it in as array of p-tag.

14)create UseFetch.js in recoil folder and create a custom hook named useFetch that feteches array of data from an url using useEffect and import the useFetch hook in ReusableHook.js

15.)In useFetch.js,add the Loading and error indiactors make sure that you json.

16.)Import the loading and error indicators in ReuableHook.js.Make sure you stringify the error as it will be in json format when u fetch the data from an server.

17.)In useFetch.js,add url,config={} as props so that we can use it in any other components too with different URLS .

NOTES:

https://usehooks.com/ to know more about creating custom hooks

Commonly Used TOOLS:

For data fetching -> https://react-query.tanstack.com/docs/overview

For tables -> https://react-table-omega.vercel.app/

For forms -> https://react-hook-form.com/api

Animation library -> https://www.framer.com/motion/

Anime in framer

NOTE:

"test": "react-scripts test",-It runs all Unit/Integration Tests in cli

TOOl:
Jest developed FB
Jest you need to add additional code to check ether our code works or not

JS TESTING: https://jestjs.io/en/
React testing: https://testing-library.com/docs/react-testing-library/intro

"eject": "react-scripts eject"-In react-create-app,all the node files comes with by default to add some additional functionality to the files eject will give the files from the node_modules so that we can make a change init.

Note:
Before ejecting make sure you do a commit to avoid havng multiple files.
git reset --hard for reverting to previous commit

"build": "react-scripts build":

        1.)git init->git add .->git commit->npm run built or yarn build this will create chunk of files under build directory

        Note:the npm run build will always the files of build so we need to add it in gitignore.

        2.)git status

        Reason for chunk files:
                        React is Single Page Application(SPA) means all the assets are downloaded initially.
                        Since it is SPA it doesnt mean you have to dowload aal the files initally.Example you have home page and about page.When user visits home page its not necessary to load about page along with it.About page should be loaded only after the user vists about page.To achieve this build command intelligently creates chunks of JS files which can be loaded when needed.This chunk are done by some of the tools which inbuild the create-react-app has done internally so we dont worry about it.

                        build files has random numbers that makes browser that it is a new file which is termed as cache bursting.

      3)run npx serve build to run production build

THere are two kinds of server:

1.)static server.For only serving files without need of server we use static servers.we provide only build folder they host it directly.

CLI-gh-pages which allows command line utility.

Eaxmple:github pages,Netlify

2.)VPS(virtual Private Server) cloud.which means on their remote cloud they allocate a working computer and you run your project on the computer which will be accessed by public.Vps are used when you need to hosting app which has server logic.Like node.js

example:VULTR,Heroku,DigitalOcean.

Deploying in githubpages:

1.)npm i -D gh-pages
2.)In package.json,Add homepages(use the url after deploying which will be in the settings of the repo),repostory(with url of github repo) and deploy cli command in script

//Learn more on:
PWA - https://create-react-app.dev/docs/making-a-progressive-web-app

Deployment - https://create-react-app.dev/docs/deployment

Custom Templates - https://create-react-app.dev/docs/custom-templates

Next.js:https://nextjs.org/learn/basics/create-nextjs-app?utm_source=next-site&utm_medium=homepage-cta&utm_campaign=next-website

React + Express=Next.js

SEO:https://searchengineland.com/guide/seo
