---
title: Lessons from the Ducky App
slug: lessons-from-ducky-app
gh_link: 
main_link:
summary: A programmer style take on a paper doll project built with React which allows you to create your own downloadable ducky pal.
date: 2022-10-18
---

![alt text](/images/blog/ducky/duckystatic.jpeg)

Sometimes we all need to confide in someone when things aren't going right. 

But when it's our code that isn't working the way we want it to, the duck is there to help you. As you explain what the code is supposed to do, and go into line-by-line detail, you'll realize that you're not doing what you say you are doing. The duck will smile, knowing that it helped you. 

I noticed that not everyone has a duck, so I created a little application to create one that they think would suit them. 

### The Process

It started with the illustrations. Using Procreate on my iPad, I made the "base ducky" and used different transparent layers to add different costume pieces.

For the actual application logic, I was very inspired by the gopherize.me application. I noticed that the images were layered on top using z-index in css and that the preview was changed based on the user's click on different items. 

I set it up so the image loaded on the `DuckyPreview` would be dynamic. 



By clicking on the menu item, it would trigger a change in state and re-render the whole preview.

``` jsx
<img
        id="eyes"
        className=" max-w-[100%] md:max-w-lg top-0 absolute z-8 rounded-xl"
        src={ctx.eyes}
      />      
```


I have two main components being rendered on my `App.js` file, a `DuckyPreview` and an `OptionsDrawer`. An issue I noticed from the beginning is the trouble with passing props from the menu item clicks to the app and back down to the preview would lead to a very cluttered codebase. 

### Enter the Ducky Context

Thankfully, React has the capability to use the useContext Hook. Each of the image options for the menus are stored in a list as a string. Alongside this, the displayed image state and the handlers were stored here. I simply wrapped the provider around my App component and voila, I had access to all the ducky data across the application without messy communication via props.

One thing I would like to improve in this is the structure of the lists. All the image titles needed to be typed in manually with isn't ideal. Also there is some code duplication that could be simplified. 

<img src="/images/posts/dev/ducky/duckygif.gif">

### Takeaways and Next Steps

Overall, I'm glad I took the time to mess around with something that on the whole is pretty silly. I enjoyed combining my love for illustration and my excitement about frontend development. If it puts a smile on someone's face, it'll be worth it. 

There are some features and QOL improvements I'd like to make: 
- The menu items are small thumbnails and it is difficult to tell what each item is. A note on hover would be great for accessibility. How that transfers to mobile I'm not sure. 
- Colors options are a big one that would require some redesign of the base ducky. To get some accessories to look natural, I had to use white to mask the black lines of the base. I think using SVG and changing the color properties may be the way to go. 