# GPNL uniform cookie consent
By switching to a suite of engagement tools hosted on a different domain than the main website we lost the ability to effectively give and check for cookie consent. This set of scripts/GTM tags have been developed to provide for a way of sharing the cookie consent between two separate domains. This both ensures GDPR conformity and effective tracking using GTM.

*Note : for now this only work on the main domain (but cookies are synced in both directions)*

## Overview
Communication between the sites is happening by embedding an iframe of the other site and establishing communication in Javascript by using postMessage and eventlisteners for these messages.  
*For sake of readabilty we'll be talking about the primary domain (parent / main content website) and secondary domain (child / engagement tools platform)*

**Communication**  
On the primary domain the secondary domain is loaded in an iframe, and an eventlistener is listening for messages from the secondary domain. The secondary domain starts posting messages that it's ready for communication when it detects it is loaded within an iframe. When the primary domain receives this "childReady" message it posts back its own "parentReady" message and communication is established. This established communication is then used to set up the cross-site cookie consent.  

On the secondary domain the setup tag loads, which displays a cookie consent banner when applicable. At the same time the setup tag embeds several global functions to provide functionality for cookie consent on this secondary domain.  

**Establishing consent**  
The cross-site consent is determined by checking the cookie consents from both domains against a truth table to find out the appropriate merged value of both. This calculated consent is then set on both domains. This calculation of the consent is done when landing on the primary domain. When changing consent (add,remove or change) the selected value is set across domains.

|      | null |  0  |  1  |  2 |      
| ---- | ---- | --- | --- | ---|      
| null | null |  0  |  1  |  2 |      
|    0 | 0    |  0  |  0  |  0 | 
|    1 | 1    |  0  |  1  |  1 | 
|    2 | 2    |  0  |  1  |  2 | 

*null=no cookie set, 0=do not track, 1=necessary cookies, 2=all cookies*

**Contents**
* Setup:  banner.html
* Parent: websiteScript.html
* Child:  formsScript.html (has to be loaded after the setup tag)


## Notes
***Credit where credit is due.***  
[Original source](https://www.simoahava.com/analytics/cookieless-tracking-cross-site-iframes/) is from Simo Ahava's blog about tracking across iframe without using cookies.

**Caveat**  
There is a GDPR concern to consider before using these tags. It would technically be very possible to use this across different GTM containers or otherwise environments where the conditions for cookie consent could or would be different.
Under GDPR this can only be used when the cookie consent on both domains is pertaining to the same conditions. i.e. The same tags are loaded under the same conditions on both domains and the domains are separate sites by the same entity.
