<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">
<h1 align="center">Fluid-iframe-ADS</h1>

<p align="center">A simple solution for the adaptability of advertising banners on the site.</p>


<div id="badges" align="center">
    <img src="https://img.shields.io/badge/Html5-red?style=for-the-badge&logo=Html5&logoColor=white" alt="Html5 Badge"/>
    <img src="https://img.shields.io/badge/jquery_3.2-0769ad?style=for-the-badge&logo=jquery&logoColor=7bcff7" alt="jquery Badge"/>
    <!--<img src="https://img.shields.io/badge/css-379bd6?style=for-the-badge&logo=css3&logoColor=fff" alt="css3 Badge"/>-->
</div>

### Uses:

- **CDN** jquery 3.21
- **CDN** bootstrap <code>[not necessary]</code>

## How it work
<p align="center"><img src="https://github.com/OKontey/Fluid-iframe-ADS/assets/157806715/3e5b3511-15f3-4ec0-8a87-43f3150b6e04" alt="FluidFrameGitSmall"></p>

### What's new:

Now the script finds all <code><iframe>...</iframe></code> on the page and counts them relative to the parent element ```<div>```
<br>
No additional connection is required on the page. We can see an example of usage in the file  <code>index.html</code> 


### Initialization
- connect jquery <code><script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script></code>
- connect <code>fluid_frame_ad.js</code> file <code><script src="/js/fluid_frame_ad.js"></script></code>

usage example:
```html

<div>
    <iframe src="{YOUR_LINK}"></iframe>
</div>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="/js/fluid_frame_ad.js"></script>

```
> [!NOTE]
> the specified ```<div>``` block should be used to frame your ```<iframe>``` so that the code counts the width from the parent element

🤷‍♂️ ~~perhaps in the future I will expand support for banner types and make the code better~~

✅ the code has been updated and the method of its connection, including
