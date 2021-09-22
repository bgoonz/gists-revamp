The <code>top</code> property in CSS goes hand in hand with <a href="/almanac/properties/p/position/">positioning</a>. By default, elements are <code>static</code> positioned in which the <code>top</code> property has no effect whatsoever. But when the positioning of an element is <code>relative</code>, <code>absolute</code>, or <code>fixed</code>, the <code>top</code> value plays a big role. 

<pre rel="CSS"><code class="language-css">div {
  top: value (px, em, %, pt, etc) || auto || inherit;   /* can be negative */
}</code></pre>

The value for <code>top</code> is any of the valid <a href="https://css-tricks.com/the-lengths-of-css/">lengths of CSS</a>.


<h4>"The Nudge" (Relative Position)</h4> 

If you apply a <code>top</code> value to an element with relative positioning, it will "nudge" the element that direction. 

<figure><img src="https://css-tricks.com/wp-content/uploads/2011/09/nudge.png" alt="" width="589" height="358" class="alignnone size-full wp-image-16498" /></figure>

Negative values will "pull" the element in that direction.

If you apply both a <code>top</code> and <code>bottom</code> value, only the <code>top</code> value will be honored.

<h4>"The Place" (Absolute/Fixed Position)</h4>

If you apply a <code>top</code> value to an element with relative positioning, it will "place" that element at that value according to its nearest positioning context (meaning: it's nearest parent element with some positioning value other than static, or the document itself). 

<figure><img src="https://css-tricks.com/wp-content/uploads/2011/09/place.png" alt="" width="687" height="521" class="alignnone size-full wp-image-16499" /></figure>

Note that if you apply both a <code>top</code> and <code>bottom</code> value, it will stretch the element to hit both of those values.


<h3 id="browser-support">Browser Support</h3>

<table class="browser-support-table">
  <thead>
    <tr>
      <th class="chrome"><span>Chrome</span></th>
      <th class="safari"><span>Safari</span></th>
      <th class="firefox"><span>Firefox</span></th>
      <th class="opera"><span>Opera</span></th>
      <th class="ie"><span>IE</span></th>
      <th class="android"><span>Android</span></th>
      <th class="iOS"><span>iOS</span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="yep">Works</td>
      <td class="yep">Works</td>
      <td class="yep">Works</td>
      <td class="yep">5+</td>
      <td class="yep">5.5+</td>
      <td class="yep">Works</td>
      <td class="yep">Works</td>
    </tr>
  </tbody>
</table>