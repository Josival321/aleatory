# @kagchi/kag-api
Collection of useful api for discord bot's


# Installation
 ### Stable version
 - npm install @kagchi/kag-api
 ### Dev version
 - npm install KagChi/kagchi-api

## Upgrading from 1.5.5 to 2.0.0
  - Image response completely changed
     ```diff
     const kagApi = require("@kagchi/kag-api")
     - msg.channel.send(await kagApi.waifu.nezuko());
     + msg.channel.send((await kagApi.waifu.nezuko()).url);
     ```
     
  - Random users response completely changed
    ```diff
    const KagApi = require("@kagchi/kag-api");
    const users = await kagApi.user();
    - message.channel.send(`${users.name}`)
    + message.channel.send(`${users[0].name}`)
    ```
     
  - Changes
    - removed inactive api endpoints
    - removed wikihow endpoints
    - add typings for typescript user
