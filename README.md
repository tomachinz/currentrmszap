# currentrmszap
Current-RMS Zap connects this rental management web app talk to the Zapier code-free automation API

# Current-RMS Zap 
## THIS ZAP IS PRE-RELEASE ALPHA QUALITY
This is the official repo of the converted CLI version of 1.1.2 of this Zap: 
https://zapier.com/app/developer/app/29697/

By Tom Atkinson http://www.funk.co.nz/

Current-RMS https://current-rms.com/ is a commercial Rental Management System great for company that rents out equipment. Since Current-RMS didn't have a Zap at the time, I decided to make this one!
The "Zap" connects the rental CRM to the awesome Zapier code-free web API automation system.

## Sponsorred by The Rock Factory, NZ
https://therockfactory.net/
Thanks to our sponsor for open-sourcing this Zap. At The Rock Factory we do Stage, Sound, Backline, Lighting Hire in Auckland, in New Zealand. Zapier and Current-RMS are apps we use at The Rock Factory where I work on this integration for my awesome boss bless her. 


## Environment
Be sure to update the .env file with:

- SUBDOMAIN=YOUR_SUBDOMAIN (set inside your current-rms.com account)
- CLIENT_ID=YOUR_CLIENT_ID (set inside your current-rms.com account)
- CLIENT_SECRET=YOUR_CLIENT_SECRET (set inside your current-rms.com account)
- ACCESS_TOKEN=YOUR_ACCESS_TOKEN  (maybe not used - to be removed)
- REFRESH_TOKEN=YOUR_REFRESH_TOKEN (maybe not used - to be removed)

You can get those from https://YOUR_SUBDOMAIN.current-rms.com/oauth2/applications if you are a user of Current-RMS.
