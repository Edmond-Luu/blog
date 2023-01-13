# My Blog Website

Click [here](https://edmond-luu.github.io/blog) or on the image below to visit the website!

[![image](https://user-images.githubusercontent.com/26613209/189459308-c958fc14-6614-468a-85b7-00dd35d0128c.png)](https://edmond-luu.github.io/blog)

In my blog website, there are 5 sections, each of which contains an autobiography, a shortlist of projects I have worked on, the features of the website itself, my contact information, and a few fun facts about myself. I had a lot of fun building this website as I was able to not only showcase my web-design skills, but I was also able to make it as aesthetically pleasing and user-friendly to the best of my abilities. As a result, I have created a website about myself that I am very proud to present to you!

This is an updated version of my [original website](https://edmond-luu.github.io/oldWebsite). Unlike my previous website, which was built using only HTML and CSS, this one was built using React as well. Because of this, the website is very composable and reusable, meaning that the code is very concise and it is very easy to add on to it in the future whenever I want.

## Here are the major updates and improvements of this website compared to the previous version because of React:
* This is now a single-page application (SPA) meaning that there is only 1 HTML page in this website with different components rendered or shown for each different section of the website. React would determine, based on the section, what component to display. There are 2 major advantages with this:
  * The transitions between each page are very smooth and seamless. In the previous website, since there was one page per section, each transition was not very pleasant for the user since the whole page would reload and flash. With React routing, this is no longer the case because React would just render a new component rather than changing the page and reloading the whole website.
  * The code is very consise since many reused elements of each section such as the navigation bar and the footer, only need to be typed once whereas in the previous website, every page needed to have the same and long markup for the navigation bar.
* All repeated elements of this page such as the image carousel and the accordion (from React-Bootstrap) are all reused but with different parameters. In other words, the markup and the code for each element only needs to be written once as a function and to change the contents in accordance with each section, the same function with new parameters are simply called. In the previous website, there was a lot of copy and pasting from other parts of the website for the same elements.
* A feature that I added which would significantly improve the user experience is that whenever the user changes the section, the website would automatically scroll back to the top in a smooth animation. This feature is not included in React-Router since everytime the user visits a new section, the website would remain in the same scroll position as before.

My blog website is also fully responsive, meaning that it will automatically adjust itself based on screen size. For example, on smaller screen sizes, the navigation bar on top compresses into a navigation toggle represented by the square button with three horizontal bars. The contents of the page would shrink down accordingly to save space while all font sizes remain the same. Then, the contents of the footer at the bottom rearrange themselves to maximize space within a smaller screen size.

<div>
 <img src="https://user-images.githubusercontent.com/26613209/189459401-f2d0d631-974d-4139-bb83-c1e985ef6ad2.png" width=400/>
 <img src="https://user-images.githubusercontent.com/26613209/189436865-350bd66f-b9b3-4d00-87ec-75fa7a922b9c.png" width=400/>
</div>


To learn more about the features, please visit the site info section of [the website](https://edmond-luu.github.io).

