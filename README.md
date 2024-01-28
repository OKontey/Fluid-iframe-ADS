<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">
<h1 align="center">Fluid-iframe-ADS</h1>

<p align="center">A simple solution for the adaptability of advertising banners on the site. Uses: , </p>


<div id="badges" align="center">
    <img src="https://img.shields.io/badge/Html5-red?style=for-the-badge&logo=Html5&logoColor=white" alt="Html5 Badge"/>
    <img src="https://img.shields.io/badge/jquery_3.2-0769ad?style=for-the-badge&logo=jquery&logoColor=7bcff7" alt="jquery Badge"/>
  <a href="your-twitter-URL">
    <img src="https://img.shields.io/badge/css-379bd6?style=for-the-badge&logo=css3&logoColor=fff" alt="css3 Badge"/>
  </a>
</div>

### Uses:

- **CDN** jquery 3.21
- **CDN** bootstrap <code>[not necessary]</code>

## How it work
<i class="devicon-jquery-plain"></i>
  

<p align="center"><img src="https://github.com/OKontey/Fluid-iframe-ADS/assets/157806715/3e5b3511-15f3-4ec0-8a87-43f3150b6e04" alt="FluidFrameGitSmall"></p>

<p>
The width is recalculated relative to the parent block with the class <code>.frameblock</code> for an iframe with the class <code>.frameBoard</code>
</p>

### Initialization
- connect jquery <code><script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script></code>
- connect <code>fluid_frame_ad.js</code> file <code><script src="/js/fluid_frame_ad.js"></script></code>
- connect css file ```<link rel="stylesheet" type="text/css" href="/css/fluid_frame.css">```
- add code:
```js
<script type="text/javascript">
    let iframeResize = ".frameBoard";
    $(function() {
        makeFluid(iframeResize);
    });
    $(window).resize(function(){
        makeFluid(iframeResize);
    });
</script>  
```
> [!NOTE]
> the specified class in quotes <code>.frameBoard</code> can be changed to another one of yours. However, then you should specify the new class in the html layout. This class is hung on an <code>iframe</code>


🤷‍♂️ perhaps in the future I will expand support for banner types and make the code better

