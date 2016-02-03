# Everbright Theme

Demo: [http://www.everbrightstudio.com](http://www.everbrightstudio.com)

**IMPORTANT** Requires Ghost version `0.7.4` or higher for API feature. In v.`0.7.4`, navigate to `Labs` in the admin panel and check the box next to `Public API`

Everbright is a theme based on "Creator X" by Phantomus made for photography sites, intended to be clean, organized, scalable and intuitive. This theme differs from many others in that it is organized hierarchically with Ghost tags.

The basic structure from top to bottom is as follows:

> ***Tag --> Posts with this tag --> Individual post***

The basic idea is that posts could be grouped together and displayed on the home page in terms of categories. For the purpose of a photography blog, the home page would include categories such as "portraits, weddings, nature photos" and other similar groupings. When, in this example, the "portraits" tag is clicked, all specific posts that are tagged with "portraits" are displayed, allowing the user to then navigate to the blog post of a particular image gallery.

Also included in is a jQuery lightbox that allows the user to cycle through all of the photos with in the specific post gallery. To use this, create a div with the class `imgGallery`, and create an unordered list (`ul`) with the class `g`. The thumbnails should be used as the `img` link and the full-res image should be used as the `a` link for this particular lightbox. A CDN (Cloudinary is a good, free one for most simple websites) is highly recommended for performance.

Lightbox:
----

```
<div class="imgGallery">
<ul class="g">
<li><a href="http://full-res-image-1.jpg" class="image-link">
   <img src="http://thumbnail-image-1.jpg" />
</a></li>
<li><a href="http://full-res-image-2.jpg" class="image-link">
   <img src="http://thumbnail-image-2.jpg" />
</a></li>
</ul>
</div>
```
###Gallery Example
![Gallery example](http://res.cloudinary.com/establishmysteps/image/upload/v1453746627/Everbright_Example_1_djfbe9.jpg)

###Lightbox Example
![Lightbox example](http://res.cloudinary.com/establishmysteps/image/upload/v1453746757/Everbright_Example_2_k5capi.jpg)

***Version 1.0 Feature Summary***

~~~
- Tag-based grouping
- jQuery lightbox
- Author and tag pages
- Dynamic content layout with left/right align
- Scalable
- Mobile-friendly
- Google Analytics integration
- Disqus commenting
- Multiple authors
~~~

## Credits
* "Ghost" blogging platform - ([https://github.com/TryGhost/Ghost](https://github.com/TryGhost/Ghost) | (c) Ghost Foundation)
* "Creator X" Theme - ([https://github.com/phantomus-host/creatorx](https://github.com/phantomus-host/creatorx) | (c) Phantomus)
* "Skel" responsive framework - ([https://github.com/n33/skel](https://github.com/n33/skel) | (c) n33)
* "Magnific Popup" lightbox - ([https://github.com/dimsemenov/Magnific-Popup](https://github.com/dimsemenov/Magnific-Popup) | (c) Dmitry Semenov)
