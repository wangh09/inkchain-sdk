/**
 * Created by wangh09 on 2017/12/12.
 */
require('../config');
let createChannelHandler = require('../create-channel');
createChannelHandler.createChannel("mychannel", "../test/alicloud/channel.tx", 'user', 'org1').then((result) => {
   console.log(result);
});