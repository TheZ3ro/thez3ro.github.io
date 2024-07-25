---
layout: post
title: "Shellshock Update!"
date: 2014-09-28 13:27:05
---

Three days ago I have talked about Shellshock, in these 3 days we have found others vulnerability for a total of 6 (<a target="_blank" href="http://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-6271">CVE-2014-6271</a>, <a target="_blank" href="http://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-7169">CVE-2014-7169</a>, <a target="_blank" href="https://access.redhat.com/security/cve/CVE-2014-7186">CVE-2014-7186</a>, <a target="_blank" href="https://access.redhat.com/security/cve/CVE-2014-7187">CVE-2014-7187</a>, <a target="_blank" href="https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-6277">CVE-2014-6277</a>, <a target="_blank" href="https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-6278">CVE-2014-6278</a>).

If you don't update your system often there are a lot of possibilities that you are vulnerable.
I reccomend to update often and keep an eye on the <a href="http://shellshocker.net/">Shellshocker.net site</a>.

On the shellshock site you can find a list to the known Exploit for test them in your shell.

And also a simple command to update your bash to the lastest patch from GNU

``` curl https://shellshocker.net/fixbash | sh ```

or manually

{% highlight shell %}
cd ~/
mkdir bash
cd bash
wget https://ftp.gnu.org/gnu/bash/bash-4.3.tar.gz
#download all patches
for i in $(seq -f "%03g" 0 27); do wget     https://ftp.gnu.org/gnu/bash/bash-4.3-patches/bash43-$i; done
tar zxvf bash-4.3.tar.gz
cd bash-4.3
for i in $(seq -f "%03g" 0 27);do patch -p0 < ../bash43-$i; done
./configure && make && make install
{% endhighlight %}

<strong style="color:red">Please Note!</strong><br/>
<p>The patches available from bash are not yet 100% issue free. It's highly recommended that you still update your system and patch bash, even if it only fixes the first few exploits on your system. Please check back occasionally for updates, we will keep this page up to date with the latest patches available.</p>
