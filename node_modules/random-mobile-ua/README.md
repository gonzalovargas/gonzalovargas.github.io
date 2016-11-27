How to use:
```js
var agent = (require 'random-mobile-ua').randomAgent()
console.log(agent.type);  // "phone" or "tablet"
console.log(agent.os);    // "android" or "ios"
console.log(agent.agent); // Mozilla/5.0 (iPhone; U; CP....
```

Available methods:
```js
// generates random mobile phone & tablet user-agent
(require 'random-mobile-ua').randomAgent()

// generates random phone user-agent
(require 'random-mobile-ua').randomPhoneAgent()

// generates random android phone user-agent
(require 'random-mobile-ua').randomAndroidPhoneAgent()

// generates random iOS phone user-agent
(require 'random-mobile-ua').randomApplePhoneAgent()

// generates random tablet user-agent
(require 'random-mobile-ua').randomTabletAgent()

// generates random Android tablet user-agent
(require 'random-mobile-ua').randomAndroidTabletAgent()

// generates random iOS tablet user-agent
(require 'random-mobile-ua').randomAppleTabletAgent()
```
