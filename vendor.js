/*
used by webpack in prod build only

seperate vendor bundle as unlikely to chnage often. allows caching, user only has to 
download vendor.js when vendor library changes.

any files not referenced here will be bundled into main.js
*/

import fetch from 'whatwg-fetch';