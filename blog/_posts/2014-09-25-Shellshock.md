---
layout: post
title: "Shellshock CVE-2014-6271"
date: 2014-09-26 16:46:05
---

In these days, the news about ShellShock have scared many Linux-Sysadmin,
but what is exactly ShellShock?<br/>
Shellshock (CVE-2014-6271 and CVE-2014-7169) is an vulnerability in GNU's <a target="_BLANK" href="http://en.wikipedia.org/wiki/Bash_(Unix_shell)">bash</a> shell that gives attackers access to run <a target="_BLANK" href="http://en.wikipedia.org/wiki/Arbitrary_code_execution">remote commands</a> on a vulnerable system.

<!-- more -->
<a name="more"></a>

If your system has not updated bash in the last 24 hours, you're
<strong>most definitely vulnerable</strong> and have been since first boot. This security vulnerability affects versions 1.14 (released in 1994) to the most recent version 4.3 according to <a target="_BLANK" href="http://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-6271">NVD</a>.<br/>
(more at <a href="https://shellshocker.net">https://shellshocker.net</a>) <br/><br/>

<strong>Testing Your System</strong>

<strong>Exploit 1 (CVE-2014-6271)</strong>

There are a few different ways to test if your system is vulnerable to shellshock. Try running the following command in a shell.

```env x='() { :;}; echo vulnerable' bash -c "echo this is a test"```

If you see "Vulnerable" you need to update bash. Otherwise, you should be good to go.

<strong>Exploit 2 (CVE-2014-7169)</strong>

Even after upgrading bash you may still be vulnerable to this exploit. Try running the following code.

```env X='() { (a)=>\' sh -c "echo date"; cat echo```

If the above command outputs the current date (it may also show errors), you are still vulnerable.

If you've tested your sytem, please leave a comment below. Don't forget to include your bash version and what OS you're running. Type `bash --version` for bash, and `cat /etc/release` for your OS.

Anyway: be the nice guy:
```() { :;}; /bin/bash -c “echo updatingbash”; /bin/apt-get update&&apt-get upgrade```
(via @0xerror)
