const express = require("express");
const {
  handleGenerateNewShortUrl,
  hanldeShowRedirectUrl,
  handleShowAnalytics,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShortUrl);

router.get("/:shortId", hanldeShowRedirectUrl);

router.get("/analytics/:shortid", handleShowAnalytics);

module.exports = router;

// cloud storage big query firestore yeh multi region ko support karte hai
// vm zonal hote hai ab backup create kar sakhtay hain
// region service complete region ko support karte hai app engine
// region always end with number where as zone ends with alphabtes

// while selecting zone following points to be consider
// cost
// redundancy backups multiple zones or region may ban sakhtay hain

// Node js series
// authentication
// there are two patterns of authentication statefull stateless

// koi state or data server side pay manage keyai jaye
// aik data jis ke sath kese data ko map karna
// parking boy example
// cookie hamsha server banta hai

// hum jab jwt ke implementation karnay lagay hai so different cheezain ate hai humharaty
// pehele cheez kay token generate karna woh easy process by taken user name password and some little information we create token
// now the biggest corncern how we pass token in to the client there are two methods to do that
// 0ne is store token in cookies or broswer ka by default feature hota hai woh cookies ko broswer may store kar laytay hain
// jab bhi server ko kese bhi tarha ke request karain kay tau yeh cookies by default jaye ge
// check the validity of the token
// cookies domain specific

// ip address
// address two types in computer world physical and logical address
// name physical and my actual address is logical address
// mac address physical logical address ip address
// jitnay tarqeay say network ya internet say connect hosakhta hai uthay mac address us system may hongay
// network inteface card hai  untay mac address hotay hain

// mac address nic pay depend karta hai
// interent protocol
// two version of ip4 ip6
// ipv4 32 bits binary format may hota hai

// ipv4 classes
// ip version has 5 classes class A B C D E
// Class A largest network its expensive its hold for its self
// class A 0-127 class B -128 -191 C 192-223 D 224-239 E 240 - 255
// network id host id subnet mask broad cast
