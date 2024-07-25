---
layout: post
title: "Intercepting Android traffic using OWASP ZAP"
date: 2016-01-25 20:33:45
---

When testing for Application Security, sometimes A PenTester need to Analyze the network connections that some Application makes, like how uses APIs, what data transfer
over the Web and if it uses HTTPS!

In this Post I want to cover the Configuration of the Proxy Connection,
if you don't know how to use ZAP read the [OWASP ZAP PAGE](https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project).

If you want to use Charles Proxy read [Intercepting Android traffic using Charles]({{ site.url }}/blog/2016/01/28/android_proxy_charles)

If you want more Deep Packet Inspection, you can:

 - set your PC as WiFi Hotspot and Run [Wireshark](https://www.wireshark.org/)
 - [ARP-Poison your device](http://openmaniak.com/ettercap_arp.php) and Run Wireshark
 - Playing with [BetterCap](http://www.bettercap.org/)

<h3>Requirements</h3>

 - OWASP ZAP Installed on your PC
 - Genymotion/Android Emulator (*if you want emulate the App*)
 - An Android Device

<h3>Configuring OWASP ZAP</h3>

1. Fire up ZAP Proxy, Create your Session and Contest if you want.
Now export the OWASP Root Certificate.

2. Go in **Tools > Options > Dynamic SSL Certificates > Save** and save the Cert to a file. <br/>
*When ZAP first starts up, it generates a certificate valid during one year. You can also generate a new one from the Dynamic SSL Certificates section.*

3. Transfer the Certificate to the Android Device with `adb push owasp_zap_root_ca.cer sdcard/`<br/>
In GenyMotion you can also Drag&Drop the Cert file on the Emulator.

4. On your phone, install the Certificate from **Settings->WiFi->Advanced->Install Certificate**, select your file and Install it.<br/><br/>
*Since the Certificate is not Trusted and we are MiTM-ing the connection, a notification will pop-up saying:* `Network May be monitored by an Unknown Third party`<br/>
**It's ok**, the Cert is working :D<br/>
*Remember to remove the Cert when you finish your Proxy session*

5. **If you are using GenyMotion ignore this step**<br/>Now we need to tell ZAP to listen from all the device in the LAN.
By default ZAP listen on `localhost:8080` so it's visible only on our PC.<br/>
Go to **Tool > Options > Local Proxy** and type in your local IP address. (something like `192.168.1.2`...you know)

<a name="Configuring"></a>
<h3>Configuring Android</h3>

Now you have 3 choices:

 - If your target App **don't follow** the `HTTP_PROXY` rule on Android and you have **root** you can use [ProxyDroid](#ProxyDroid)
 - If you don't have an Android Device or you don't want to Install the target App you can use [GenyMotion](#GenyMotion)
 - If you can install your App and it follow `HTTP_PROXY` rule, or it have a Proxy settings or you target a mobile WebSite you can use the [default Android proxy](#Android)

<a name="ProxyDroid"></a>
<h4>Using ProxyDroid</h4>
[ProxyDroid](https://play.google.com/store/apps/details?id=org.proxydroid) is a free and [open-source](https://github.com/madeye/proxydroid) app for Android.<br/> It’s a bunch of *proxy tools* and *iptables rules* wrapped up into an app that give you a really simple way to tunnel traffic to an endpoint.<br/>

You’ll need ***root*** access to get it to work.

1. Open **ProxyDroid** App
1. Edit your **Host** settings to the OWASP ZAP IP
2. Enable the **Proxy Switch**
3. Grant **Root Permission**

<a name="GenyMotion"></a>
<h4>Using GenyMotion</h4>

In your Genymotion Android emulator:

1. **Settings -> Wifi -> Press and hold your active network**
2.  Select **“Modify Network”**
3.  Select **“Show Advanced Options”**
4.  Select **“Proxy Settings -> Manual”**
5.  Set your Proxy to: `10.0.3.2` (Genymotion’s special code for the local workstation)
6.  Set your Port to: `8080`
7.  Press **Save**

<h4>Using An Android Device</h4>

1. **Settings -> Wifi -> Press and hold your active network**
2.  Select **“Modify Network”**
3.  Select **“Show Advanced Options”**
4.  Select **“Proxy Settings -> Manual”**
5.  Set your Proxy to the OWASP ZAP IP (something like) `192.168.1.2`
6.  Set your Port to: `8080`
7.  Press **Save**

**Source**

 - Thanks [Rex St John](http://rexstjohn.com/using-genymotion-charles-proxy/) for GenyMotion configuration
 - [NCCGroup Post](https://www.nccgroup.trust/us/about-us/newsroom-and-events/blog/2012/july/network-analysis-with-proxydroid-burpsuite-and-hipster-dog/) about ProxyDroid and Burp
 - [Intercepting traffic using a proxy on Firefox OS](https://developer.mozilla.org/en-US/Firefox_OS/Debugging/Intercepting_traffic_using_a_proxy)
