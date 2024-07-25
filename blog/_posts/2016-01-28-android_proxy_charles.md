---
layout: post
title: "Intercepting Android traffic using Charles"
date: 2016-01-28 14:20:45
---

When testing for Application Security, sometimes A PenTester need to Analyze the network connections that some Application makes, like how uses APIs, what data transfer
over the Web and if it uses HTTPS!

In this Post I want to cover the Configuration of the Proxy Connection,
if you don't know how to use Charles read the [Charles Website](http://www.charlesproxy.com/).

If you want to use OWASP ZAP read [Intercepting Android traffic using OWASP ZAP]({{ site.url }}/blog/2016/01/25/android_proxy_zap)

If you want more Deep Packet Inspection, you can:

 - set your PC as WiFi Hotspot and Run [Wireshark](https://www.wireshark.org/)
 - [ARP-Poison your device](http://openmaniak.com/ettercap_arp.php) and Run Wireshark
 - Playing with [BetterCap](http://www.bettercap.org/)

<h3>Requirement</h3>

 - Charles Installed on your PC
 - Genymotion/Android Emulator (*if you want emulate the App*)
 - An Android Device

<h3>Configuring Charles Proxy</h3>

1. Fire up Charles Proxy.

2. Now you need to install an SSL Certificate on your device
   - If you want to generate your certificate, follow [Generate your own CA cert for charles](https://muffinresearch.co.uk/proxying-connections-from-ffos/)
   and then Transfer the Certificate to the Android Device with `adb push ca_cert.pem sdcard/`<br/>
   In GenyMotion you can also Drag&Drop the Cert file on the Emulator.
   - Otherwise you can use a Cert from Charles CA visiting this url:<br/>`http://www.charlesproxy.com/getssl/`

3. Install the Certificate from **Settings->WiFi->Advanced->Install Certificate**, select your file and Install it.<br/><br/>
*Since the Certificate is not Trusted and we are MiTM-ing the connection, a notification will pop-up saying:* `Network May be monitored by an Unknown Third party`<br/>
**It's ok**, the Cert is working :D<br/>
*Remember to remove the Cert when you finish your Proxy session*

5. **If you are using GenyMotion ignore this step**<br/>Now we need to tell Charles to listen from all the device in the LAN.
By default Charles listen on `localhost:8080` so it's visible only on our PC.<br/>
Go to **Proxy > Access Control Settings...** press the **Add** button, and type in your local IP address and click **Ok**. (something like `192.168.1.2`...you know)

<h3>Configuring Android</h3>

Please read the **Configuring Android** section of the [OWASP ZAP Post]({{ site.url }}/blog/2016/01/25/android_proxy_zap#Configuring) (it's the same)

**Source**

 - Thanks [Rex St John](http://rexstjohn.com/using-genymotion-charles-proxy/) for GenyMotion configuration
 - [NCCGroup Post](https://www.nccgroup.trust/us/about-us/newsroom-and-events/blog/2012/july/network-analysis-with-proxydroid-burpsuite-and-hipster-dog/) about ProxyDroid and Burp
 - [Intercepting traffic using a proxy on Firefox OS](https://developer.mozilla.org/en-US/Firefox_OS/Debugging/Intercepting_traffic_using_a_proxy)
