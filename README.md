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

6.)in counter.js,create buttons that increases/decreases the counter value using useState() hook.

7.)comment the usestate hook and import useRecoilState hook from recoil and also import counterState.js file init and use the useRecoilState hook to change the state of count.

8.)create countDislay.js file under src,create the countDisplay component init.THis component should display count value using the useRecoilState Hook and then import it in app.js as a component.

9.)create the counterdoubleselector that multiplies the counterState value by 2 by importing selector form recoil in counterState.js file.

10.)create countDoubleDisplay.js file under src and create the countDoubleDiplay component that returns the countValue as doubled by importing counterDoubleSelector from counterState.js and useRecoilState hook and import this as component in app.js