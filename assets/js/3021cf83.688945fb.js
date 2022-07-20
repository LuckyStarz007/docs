"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2538],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),g=r,m=p["".concat(i,".").concat(g)]||p[g]||u[g]||s;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2418:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),o=["components"],l={sidebar_position:2,slug:"getting-started"},i="Getting Started",c={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Get started with Sequence with just a few lines of code, follow along below.",source:"@site/docs/getting-started.mdx",sourceDirName:".",slug:"/getting-started",permalink:"/getting-started",editUrl:"https://github.com/0xsequence/docs/edit/master/docs/getting-started.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"getting-started"},sidebar:"sidebar",previous:{title:"Ethereum Compatibility",permalink:"/introduction/eth-compat"},next:{title:"Installation",permalink:"/build-with-sequence/installation"}},d={},u=[{value:"Install",id:"install",level:2},{value:"Connect your wallet",id:"connect-your-wallet",level:2},{value:"Get the wallet address",id:"get-the-wallet-address",level:2},{value:"Open the wallet from your dapp",id:"open-the-wallet-from-your-dapp",level:2},{value:"Get the blockchain network ID",id:"get-the-blockchain-network-id",level:2},{value:"Sign &amp; verify a message",id:"sign--verify-a-message",level:2},{value:"Sending an ERC-20 token",id:"sending-an-erc-20-token",level:2}],p={toc:u};function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"getting-started"},"Getting Started"),(0,s.kt)("p",null,"Get started with Sequence with just a few lines of code, follow along below."),(0,s.kt)("h2",{id:"install"},"Install"),(0,s.kt)("p",null,"First, install the ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/0xsequence"},"0xsequence")," package from NPM:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add 0xsequence\n")),(0,s.kt)("p",null,"or"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"npm install 0xsequence\n")),(0,s.kt)("p",null,"You can find the source of the ",(0,s.kt)("inlineCode",{parentName:"p"},"0xsequence")," package on ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js"},"Github"),"."),(0,s.kt)("h2",{id:"connect-your-wallet"},"Connect your wallet"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Connecting to Ethereum Mainnet:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { sequence } from '0xsequence'\n\nconst wallet = sequence.initWallet('mainnet')\nconst connectDetails = await wallet.connect()\n\nconsole.log('=> connected?', connectDetails.connected)\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Connecting to Polygon:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { sequence } from '0xsequence'\n\nconst wallet = sequence.initWallet('polygon')\nconst connectDetails = await wallet.connect()\n\nconsole.log('=> connected?', connectDetails.connected)\n")),(0,s.kt)("h2",{id:"get-the-wallet-address"},"Get the wallet address"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const wallet = sequence.getWallet()\nconst walletAddress = await wallet.getAddress()\n\nconsole.log(walletAddress)\n// # => '0xabcd....'\n")),(0,s.kt)("h2",{id:"open-the-wallet-from-your-dapp"},"Open the wallet from your dapp"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const wallet = sequence.getWallet()\nwallet.openWallet()\n")),(0,s.kt)("h2",{id:"get-the-blockchain-network-id"},"Get the blockchain network ID"),(0,s.kt)("p",null,"You can use a variety of methods to query the chain ID which the wallet is presently\nconnected to."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const wallet = sequence.getWallet()\n\nconsole.log('chainId:', await wallet.getChainId())\n\nconst provider = wallet.getProvider()\nconsole.log('provider.getChainId()', await provider.getChainId())\n\nconst signer = wallet.getSigner()\nconsole.log('signer.getChainId()', await signer.getChainId())\n")),(0,s.kt)("h2",{id:"sign--verify-a-message"},"Sign & verify a message"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// Get the wallet provider and signer instances\nconst wallet = sequence.getWallet()\nconst provider = wallet.getProvider()\nconst signer = wallet.getSigner()\n\n// Prepare the message string\nconst message = `I've been to Web3 & back again :D`\n\n// Sign the message\nconst signature = await signer.signMessage(message)\nconsole.log('message signature:', signature)\n\n// Validate the signed message. The sequence utils `isValidMessageSignature` method\n// supports validating both EOA and Smart Wallet (EIP1271) signatures with this simple call.\nconst isValid = await sequence.utils.isValidMessageSignature(\n  await wallet.getAddress(),\n  message,\n  signature,\n  provider\n)\n\nconsole.log('isValid?', isValid)\nif (!isValid) throw new Error('signature is invalid')\n")),(0,s.kt)("h2",{id:"sending-an-erc-20-token"},"Sending an ERC-20 token"),(0,s.kt)("p",null,"Let's now send some USDC tokens to another wallet address on the network."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// Part of the ERC20 ABI, so we can encode a `transfer` call\nconst erc20Interface = new ethers.utils.Interface([\n  'function transfer(address _to, uint256 _value)'\n])\n\n// Get the wallet signer interface\nconst wallet = sequence.getWallet()\nconst signer = wallet.getSigner()\n\n// USDC contract address on Polygon network\nconst usdcContractAddress = '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'\n\n// Sending to a recipient address\nconst recipientAddress = '0x8b4de256180cfec54c436a470af50f9ee2813dbb'\n\n// Sending 1.50 USDC, note USDC has 6 decimal places\nconst amount = ethers.utils.parseUnits('1.50', 6)\n\n// Encode an ERC-20 token transfer to recipient of the specified amount\nconst data = erc20Interface.encodeFunctionData(\n  'transfer', [recipientAddress, amount]\n)\n\n// Prepare Transaction object\nconst tx: sequence.transactions.Transaction = {\n  to: usdcContractAddress,\n  data: data\n}\n\n// Send the transaction via the signer to the blockchain :D The signer will prompt the user\n// sign+send the transaction, and once the user confirms it will be transmitted.\nconst txnResp = await signer.sendTransaction(tx)\n\n// Wait for the transaction to be mined by the network\nawait txnResp.wait()\n\n// We're done, print the transaction hash, and open it up in your block explorer\nconsole.log('transaction hash:', txnResp.hash)\n")))}g.isMDXComponent=!0}}]);