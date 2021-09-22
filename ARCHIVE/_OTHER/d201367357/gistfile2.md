Trying to understand the sequencing/processing going on here. Seems a little strange but I'm sure I'm missing something obvious.

So, as I would expect it:

1. the `put(..)` on line 4 is blocked (thereby pausing that generator). control transfers to the second generator.
2. the `take(..)` on line 10 is blocked until the `put(..)` happens, but it unblocks the `put(..)`. control transfers back to the first generator.
3. the `put(..)` happens, then the `ch.close()` is called on line 5. control transfers back to the second generator.
4. the `take(..)` on line 10 now is unblocked, but since the channel is already closed, it can't/shouldn't get the message, right?

But that can't explain how it works. So, are these not in order? And which of these is synchronous, vs which of these (if any) happens async (like on the next event tick)?

For this to work like it observably does, it seems to me like it needs to instead be:

1. the `put(..)` on line 4 is blocked. control transfers to the second generator.
2. the `take(..)` on line 10 synchronously unblocks the `put(..)`, so the message goes on the channel. but no control transfer.
3. the `take(..)` on line 10 synchronously gets the message, and it gets printed out. control transfers back to the first generator.
4. the `put(..)` is unblocked, and so finally the `ch.close()` is called on line 5.

Is that more accurate? It sure seems like a stranger processing model. Can you offer any insight?
