---
layout: post
title: "Why you should release your Crypto under GPL"
date: 2016-02-08 17:01:45
---

**I'm not a Lawyer, the view expressed below is my own.**

We see everyday new Crypto software. From IM Applications to Secure Storage programs, and many more.
Crypto now a days is a vital part of our time spent in front of a PC Monitor.

Almost every site you visit on your Browser and App you use on your Smartphone use (or *should use*) Strong Cryptography because [Crypto is not a crime](https://cryptoisnotacrime.org/)

But, with Crypto also comes Trust.
It's easier to trust an Open-Source, Audited software that a Proprietary one.
(Stay away from self-proclamed **"Military-Grade Cryptography"** and **"Snake oil"**)

So I will explain why in my opinion is better license Crypto Software under GPL.

Note That I love Public Domain. (in short PD)<br/>
Public domain software allows anyone to do whatever they want with software.
In short software is not subject to copyright.

Other people can read your source code and use it whenever they want.
[And that's good!](https://stpeter.im/writings/essays/publicdomain.html)

But like I said before, Crypto need Trust.

Under PD, the Cryptography Software you write can be used by everybody (and it's still good) but It can be
sublicensed or used into Proprietary Software.

When doing this, the Proprietary Vendor can insert **backdoor** or **manipulate** the software feature and it isn't
required to release the source code!
And that new software may never see a **security audit**!
But it still can feature the "based on X" label where X is a Public Domain software.

Instead, when using **Copyleft** licenses (like GNU GPL) forks (ed, software based on your source code)
you **MUST** release the software source and **MUST** stating significant changes made to software.

This way, users can do Independent Code Review based on the changes made in the new source, (when the Fork is not so big)
 and maintain the Trust gained from the original software (ex. Security Audit)

Some example can be:
 - TrueCrypt and VeraCrypt
 - Telegram for Android and Other Telegram Android forks
 - many more...

<h4>So do a favor to your Users, use the GPL license for your Crypto.</h4>

**Source**

 - The [Unlicense](https://tldrlegal.com/license/unlicense) Public Domain License
 - [WTFPL](https://tldrlegal.com/license/do-what-the-f*ck-you-want-to-public-license-%28wtfpl%29) Public Domain License
 - [GNU GPLv3](https://tldrlegal.com/license/gnu-general-public-license-v3-%28gpl-3%29) Copyleft License
 - [GPL F.A.Q.](https://www.gnu.org/licenses/gpl-faq.html)
