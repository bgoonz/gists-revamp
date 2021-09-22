Steem-content-renderer <span class="small">example</span>
=========================================================

Steem-content-renderer is aimed at unifying post rendering across all Steem interfaces. The rendering code was extracted from [condenser by Steemit](https://github.com/steemit/condenser), refactored, tested and bundled into a standalone library. This approach allows independedt development and continous improvement of post rendering in Steem blockchain. As for now it is fully compatible with the Steemit way of rendering posts. See the [repository](https://github.com/wise-team/steem-content-renderer), integrate into your project, star, make pull requests and create issues. Let's make the project alive!

------------------------------------------------------------------------

This example uses some markdown and transforms it to html. The library is loaded from the unpkg CDN: *<https://unpkg.com/steem-content-renderer>*.

Render markdown:
----------------

Link to post (busy or steemit):

Load steem post

\# Sample post and some content. Let's mention @ned or include a tag \#steem. https://youtu.be/B7C83L6iWJQ

Render markdown

Output:
-------

...press the button...

  

Generated HTML markup
---------------------

                ...press the button...
            
